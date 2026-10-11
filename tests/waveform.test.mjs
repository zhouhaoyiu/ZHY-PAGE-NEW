import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { validateWaveform } from '../src/utils/waveform.ts'

const data = JSON.parse(
  readFileSync(new URL('../public/research/waveform.json', import.meta.url)),
)

test('published GeoNet source matches its recorded SHA256', () => {
  const source = readFileSync(
    new URL('../scripts/waveform-data/' + data.sourceFile, import.meta.url),
  )
  assert.equal(
    createHash('sha256').update(source).digest('hex'),
    data.sourceSha256,
  )
  assert.match(source.toString(), /Corrected accelerogram/)
})

test('retains the complete corrected record and physical component ratios', () => {
  validateWaveform(data)
  assert.equal(data.samples.length, 3329)
  assert.equal(data.samplingRate, 50)
  assert.equal(data.duration, 66.56)
  assert.equal(data.units, 'm/s^2')
  assert.deepEqual(data.channels, ['N86W', 'S04W', 'UP'])
  const peaks = [0, 1, 2].map((channel) =>
    Math.max(...data.samples.map((row) => Math.abs(row[channel]))),
  )
  assert.deepEqual(peaks, [2.8436, 2.4512, 1.8434])
  assert.equal(data.displayScale, Math.max(...peaks))
})

test('rejects malformed waveform data rather than drawing nonfinite coordinates', () => {
  for (const change of [
    null,
    {},
    { ...data, samplingRate: 0 },
    { ...data, displayScale: 0 },
    { ...data, duration: 30 },
    {
      ...data,
      samples: [
        [NaN, 1, 2],
        [0, 0, 0],
      ],
    },
    {
      ...data,
      samples: [
        [1, 2],
        [3, 4],
      ],
    },
  ]) {
    assert.throws(() => validateWaveform(change))
  }
})
