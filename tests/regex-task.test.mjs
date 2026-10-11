import assert from 'node:assert/strict'
import test from 'node:test'
import { runRegex } from '../src/utils/regex-task.ts'

function fakeWorker(respond) {
  const worker = {
    onmessage: null,
    onerror: null,
    stopped: false,
    postMessage(value) {
      queueMicrotask(() => respond?.(worker, value))
    },
    terminate() {
      worker.stopped = true
    },
  }
  return worker
}
test('completes and terminates its worker', async () => {
  const worker = fakeWorker((w) =>
    w.onmessage({ data: { result: '123', count: 1, elapsed: 1 } }),
  )
  const task = runRegex(
    { pattern: '[0-9]+', flags: 'g', text: '123a' },
    () => worker,
  )
  assert.equal((await task.promise).result, '123')
  assert.equal(worker.stopped, true)
})
test('terminates a stalled worker on timeout', async () => {
  const worker = fakeWorker()
  const task = runRegex(
    { pattern: '(a+)+$', flags: 'g', text: 'aaaa!' },
    () => worker,
    10,
  )
  await assert.rejects(task.promise, /超时/)
  assert.equal(worker.stopped, true)
})
test('reset cancels active work', async () => {
  const worker = fakeWorker()
  const task = runRegex({ pattern: 'x', flags: 'g', text: 'x' }, () => worker)
  task.cancel()
  await assert.rejects(task.promise, /取消/)
  assert.equal(worker.stopped, true)
})
test('rejects over-limit inputs before starting a worker', () => {
  assert.throws(
    () =>
      runRegex({ pattern: 'x', flags: '', text: 'x'.repeat(100001) }, () => {
        throw Error('unexpected worker')
      }),
    /100,000/,
  )
})
test('surfaces syntax and worker errors', async () => {
  const worker = fakeWorker((w) =>
    w.onmessage({ data: { error: 'Invalid regex' } }),
  )
  await assert.rejects(
    runRegex({ pattern: '[', flags: '', text: '' }, () => worker).promise,
    /Invalid regex/,
  )
  assert.equal(worker.stopped, true)
})
