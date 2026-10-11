<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { isDark } from "~/composables";
import { validateWaveform, type Waveform } from "~/utils/waveform";
import metadata from "../../public/research/waveform-metadata.json";
const host = ref<HTMLElement>();
const canvas = ref<HTMLCanvasElement>();
const record = ref<Waveform>();
const time = ref(21);
const duration = computed(() => record.value?.duration ?? metadata.duration);
const axisEnd = computed(() => Math.ceil(duration.value / 10) * 10);
const failed = ref(false);
const timeLabel = computed(() => time.value.toFixed(2));
let observer: ResizeObserver | undefined;
let frame = 0;
let disposed = false;
const controller = new AbortController();

function draw() {
  const element = canvas.value;
  const data = record.value;
  if (!element || !host.value || !data) return;
  const { width, height } = host.value.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  element.width = Math.round(width * ratio);
  element.height = Math.round(height * ratio);
  const ctx = element.getContext("2d");
  if (!ctx) return;
  ctx.scale(ratio, ratio);
  const compact = window.matchMedia(
    "(min-width: 600px) and (max-height: 600px)",
  ).matches;
  const mobile = width < 800 && !compact;
  const left = mobile ? 18 : width * 0.48;
  const right = width - 26;
  const copy = host.value.parentElement?.querySelector(".hero-copy");
  const copyBottom = copy
    ? copy.getBoundingClientRect().bottom -
      host.value.getBoundingClientRect().top
    : 0;
  const top = compact
    ? 118
    : mobile
      ? Math.max(copyBottom + 34, height * 0.5)
      : height * 0.24;
  const bottom = height - (compact ? 122 : mobile ? 148 : 170);
  const areaWidth = right - left;
  const rowHeight = (bottom - top) / 3;
  const colors = isDark.value
    ? ["#8bd4bb", "#ff945c", "#80b3d6"]
    : ["#087568", "#dd5f24", "#466b8e"];
  const grid = isDark.value ? "#ffffff14" : "#213e3220";
  ctx.strokeStyle = grid;
  ctx.lineWidth = 0.7;
  for (let t = 0; t <= axisEnd.value; t += 10) {
    const x = left + (areaWidth * t) / axisEnd.value;
    ctx.beginPath();
    ctx.moveTo(x, top - 26);
    ctx.lineTo(x, bottom + 18);
    ctx.stroke();
    ctx.fillStyle = isDark.value ? "#9eb3a6" : "#687d73";
    ctx.font = "10px monospace";
    ctx.fillText(`${t}s`, x - 7, bottom + 34);
  }
  const trace = (
    channel: number,
    center: number,
    zoom = 1,
    focusX = 0,
    amplitude = rowHeight * 0.39,
  ) => {
    ctx.beginPath();
    data.samples.forEach((values, index) => {
      const originalX =
        left + (areaWidth * (index / data.samplingRate)) / axisEnd.value;
      const x = zoom === 1 ? originalX : focusX + (originalX - focusX) * zoom;
      const y = center - (values[channel] / data.displayScale) * amplitude;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  };
  for (let channel = 0; channel < 3; channel++) {
    const center = top + rowHeight * (channel + 0.5);
    ctx.strokeStyle = isDark.value ? "#698575" : "#7d9289";
    ctx.lineWidth = 0.85;
    trace(channel, center);
    ctx.fillStyle = colors[channel]!;
    ctx.font = "11px monospace";
    ctx.fillText(data.channels[channel] || "", left, center - rowHeight * 0.42);
  }
  const radius = Math.max(
    28,
    Math.min(mobile ? 86 : 132, areaWidth / 2 - 5, (bottom - top) / 2 - 6),
  );
  const selectedX = left + (areaWidth * time.value) / axisEnd.value;
  const x = Math.max(left + radius, Math.min(right - radius, selectedX));
  const y = top + rowHeight * 1.5;
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.clip();
  ctx.fillStyle = isDark.value ? "#1e3027" : "#edf5f0";
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  ctx.strokeStyle = grid;
  for (let dx = -radius; dx <= radius; dx += 24) {
    ctx.beginPath();
    ctx.moveTo(x + dx, y - radius);
    ctx.lineTo(x + dx, y + radius);
    ctx.stroke();
  }
  for (let channel = 0; channel < 3; channel++) {
    ctx.strokeStyle = colors[channel]!;
    ctx.lineWidth = 1.4;
    ctx.save();
    ctx.translate(x - selectedX, 0);
    trace(
      channel,
      y + (channel - 1) * radius * 0.6,
      3,
      selectedX,
      radius * 0.28,
    );
    ctx.restore();
  }
  ctx.strokeStyle = isDark.value ? "#fc9a6a" : "#d65322";
  ctx.setLineDash([3, 4]);
  ctx.beginPath();
  ctx.moveTo(x, y - radius);
  ctx.lineTo(x, y + radius);
  ctx.stroke();
  ctx.restore();
  ctx.strokeStyle = isDark.value ? "#91b8a4" : "#527866";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
}
function scheduleDraw() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(draw);
}
function inspect(event: PointerEvent) {
  if (!host.value || (event.target as HTMLElement).closest("a, button, input"))
    return;
  const bounds = host.value.getBoundingClientRect();
  const compact = window.matchMedia(
    "(min-width: 600px) and (max-height: 600px)",
  ).matches;
  const left = bounds.width < 800 && !compact ? 18 : bounds.width * 0.48;
  const x = event.clientX - bounds.left;
  if (x < left) return;
  time.value = Math.max(
    0,
    Math.min(
      duration.value,
      ((x - left) / (bounds.width - 26 - left)) * axisEnd.value,
    ),
  );
}
onMounted(async () => {
  observer = new ResizeObserver(scheduleDraw);
  if (host.value) observer.observe(host.value);
  host.value?.parentElement?.addEventListener("pointermove", inspect);
  try {
    const response = await fetch("/research/waveform.json", {
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("Waveform unavailable");
    const value = validateWaveform(await response.json());
    if (!disposed) {
      record.value = value;
      scheduleDraw();
    }
  } catch {
    if (!disposed) failed.value = true;
  }
});
watch([time, isDark], scheduleDraw);
onBeforeUnmount(() => {
  disposed = true;
  controller.abort();
  observer?.disconnect();
  cancelAnimationFrame(frame);
  host.value?.parentElement?.removeEventListener("pointermove", inspect);
});
</script>

<template>
  <div ref="host" class="wave-field">
    <img
      v-if="!record"
      src="/research/waveform.png"
      class="wave-fallback"
      alt="GeoNet RHSC 三分量校正加速度记录，使用共同幅值尺度"
      width="1890"
      height="1063"
    />
    <canvas
      ref="canvas"
      role="img"
      aria-label="GeoNet RHSC 校正加速度及三倍时间放大透镜"
    />
    <div class="wave-meta">
      <span class="mono">CHRISTCHURCH 2011 / {{ metadata.station }}</span>
      <span
        >{{ metadata.channels.join(" · ") }} /
        {{ metadata.samplingRate }} Hz</span
      >
      <span>校正加速度 · m/s² · 三分量同尺度</span>
    </div>
    <div class="wave-controls">
      <label v-if="record" for="wave-time"
        >局部时间放大 ×3 <output>{{ timeLabel }} s</output></label
      >
      <input
        v-if="record"
        id="wave-time"
        v-model.number="time"
        type="range"
        min="0"
        :max="duration"
        :step="1 / metadata.samplingRate"
      />
      <p v-if="failed" role="status">交互数据未载入，显示静态波形。</p>
      <a
        href="https://www.geonet.org.nz/data/types/strong_motion"
        target="_blank"
        rel="noreferrer"
        >GeoNet · 校正记录</a
      >
      <a
        class="source-detail"
        href="/research/waveform-metadata.json"
        target="_blank"
        rel="noreferrer"
        title="原始来源、校正信息、单位与文件校验值"
        >数据来源与处理</a
      >
    </div>
  </div>
</template>

<style scoped>
.wave-field {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
canvas,
.wave-fallback {
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  object-fit: fill;
}
.wave-meta {
  position: absolute;
  top: 145px;
  right: 32px;
  display: grid;
  gap: 3px;
  font-size: 11px;
  color: var(--theme-text-tertiary);
  text-align: right;
}
.wave-controls {
  position: absolute;
  bottom: 32px;
  left: 53%;
  right: 32px;
  pointer-events: auto;
  font-size: 11px;
  color: var(--theme-text-tertiary);
}
.wave-controls label {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.wave-controls input {
  width: 100%;
  accent-color: var(--teal);
  display: block;
  margin: 10px 0;
}
.source-detail {
  margin-left: 16px;
}
.dark .wave-fallback {
  opacity: 0.3;
}
@media (max-width: 800px) {
  .wave-fallback {
    width: 210%;
    max-width: none;
    left: -105%;
    top: 50%;
    height: calc(50% - 135px);
  }
  .wave-meta {
    top: auto;
    bottom: 94px;
    right: 20px;
    font-size: 9px;
  }
  .wave-meta span:not(:first-child) {
    display: none;
  }
  .wave-controls {
    bottom: 14px;
    left: 20px;
    right: 20px;
    font-size: 10px;
  }
}
@media (min-width: 600px) and (max-height: 600px) {
  .wave-fallback {
    width: 100%;
    height: 100%;
    inset: 0;
  }
  .wave-meta {
    top: 90px;
    bottom: auto;
    right: 24px;
    font-size: 9px;
  }
  .wave-meta span:not(:first-child) {
    display: none;
  }
  .wave-controls {
    bottom: 12px;
    left: 53%;
    right: 24px;
    font-size: 10px;
  }
  .wave-controls input {
    margin: 5px 0;
  }
}
</style>
