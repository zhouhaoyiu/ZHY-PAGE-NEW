import type { RegexRequest, RegexResult } from './regex-task'

self.onmessage = (event: MessageEvent<RegexRequest>) => {
  try {
    const start = performance.now()
    const { pattern, text, flags } = event.data
    const matches = text.match(new RegExp(pattern, flags))
    const reply: RegexResult = {
      result: (matches?.join('\n') || '').slice(0, 20000),
      count: matches?.length || 0,
      elapsed: performance.now() - start,
    }
    self.postMessage(reply)
  } catch (error) {
    self.postMessage({
      result: '',
      count: 0,
      elapsed: 0,
      error: error instanceof Error ? error.message : '表达式无效',
    })
  }
}
