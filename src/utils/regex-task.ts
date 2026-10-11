export interface RegexRequest {
  pattern: string
  text: string
  flags: string
}
export interface RegexResult {
  result: string
  count: number
  elapsed: number
  error?: string
}
export interface RegexWorker {
  onmessage: ((event: MessageEvent<RegexResult>) => void) | null
  onerror: ((event: ErrorEvent) => void) | null
  postMessage: (value: RegexRequest) => void
  terminate: () => void
}
export function runRegex(
  request: RegexRequest,
  makeWorker: () => RegexWorker,
  timeout = 500,
) {
  if (request.pattern.length > 2000 || request.text.length > 100000)
    throw new Error('表达式最多 2,000 字符，测试文本最多 100,000 字符。')
  const worker = makeWorker()
  let cancel = () => {}
  const promise = new Promise<RegexResult>((resolve, reject) => {
    let settled = false
    const finish = (error?: Error, result?: RegexResult) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      worker.terminate()
      worker.onmessage = null
      worker.onerror = null
      if (error) reject(error)
      else resolve(result!)
    }
    const timer = setTimeout(
      () => finish(new Error('匹配超时，已终止计算。')),
      timeout,
    )
    cancel = () => finish(new Error('匹配已取消。'))
    worker.onmessage = (event) =>
      event.data.error
        ? finish(new Error(event.data.error))
        : finish(undefined, event.data)
    worker.onerror = () => finish(new Error('计算线程未能完成匹配。'))
    try {
      worker.postMessage(request)
    } catch {
      finish(new Error('无法启动匹配。'))
    }
  })
  return { promise, cancel }
}
