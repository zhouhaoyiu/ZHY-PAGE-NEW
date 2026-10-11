export interface Waveform {
  station: string
  channels: string[]
  samplingRate: number
  duration: number
  displayScale: number
  samples: number[][]
}

export function validateWaveform(value: unknown): Waveform {
  if (!value || typeof value !== 'object') throw new Error('Invalid waveform')
  const data = value as Waveform
  if (
    typeof data.station !== 'string' ||
    !Array.isArray(data.channels) ||
    data.channels.length !== 3 ||
    !data.channels.every((channel) => typeof channel === 'string') ||
    !Number.isFinite(data.samplingRate) ||
    data.samplingRate <= 0 ||
    !Number.isFinite(data.displayScale) ||
    data.displayScale <= 0 ||
    !Number.isFinite(data.duration) ||
    data.duration <= 0 ||
    !Array.isArray(data.samples) ||
    data.samples.length < 2 ||
    !data.samples.every(
      (row) =>
        Array.isArray(row) && row.length === 3 && row.every(Number.isFinite),
    )
  )
    throw new Error('Invalid waveform')
  if (
    Math.abs((data.samples.length - 1) / data.samplingRate - data.duration) >
    1e-6
  )
    throw new Error('Waveform timing mismatch')
  return data
}
