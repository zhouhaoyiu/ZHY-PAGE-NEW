<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const gaokaoTime = ref('2025-06-07 08:00:00')
const nowTime = ref(new Date().getTime())
const timeFS = ref('2025-03-28 00:00:00')
const time = ref(0)
const time2 = ref(0)
const timer = setInterval(() => {
  nowTime.value = new Date().getTime()
  time.value = new Date(gaokaoTime.value).getTime() - nowTime.value
  time2.value = new Date(timeFS.value).getTime() - nowTime.value
  if (time.value <= 0) {
    clearInterval(timer)
  }
}, 1000)

onUnmounted(() => {
  clearInterval(timer)
})

function formatTime(time: number) {
  const day = Math.floor(time / 1000 / 60 / 60 / 24)
  const hour = Math.floor(time / 1000 / 60 / 60 % 24)
  const minute = Math.floor(time / 1000 / 60 % 60)
  const second = Math.floor(time / 1000 % 60)
  return `${day} 天 ${hour} 时 ${minute} 分 ${second} 秒`
}

function formatTime2(time: number) {
  return Math.floor(time / 1000)
}
</script>

<template>
  <section class="page-shell gaokao-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Countdown
      </p>
      <h1 class="page-title">
        2025 年高考倒计时
      </h1>
      <p class="page-description">
        用更明确的数字面板展示剩余时间，适合在大屏上查看。
      </p>
    </header>

    <div class="surface-panel gaokao-panel">
      <div class="count-block">
        <span class="count-label">目标日期</span>
        <strong>2025-06-07 08:00:00</strong>
        <div v-show="time > 0" class="count-value">
          {{ formatTime(time) }}
        </div>
      </div>

      <div class="count-block alt">
        <span class="count-label">辅助时间</span>
        <strong>2025-03-28</strong>
        <div v-show="time2 > 0" class="count-value">
          {{ formatTime(time2) }}
        </div>
        <div class="count-seconds">
          {{ formatTime2(time2) }} 秒
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.gaokao-page {
  width: 100%;
  min-height: 100%;
  
}

.gaokao-panel {
  padding: 26px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.count-block {
  padding: 22px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(255, 255, 255, 0.72));
  border: 1px solid rgba(148, 163, 184, 0.18);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.count-block.alt {
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.08), rgba(255, 255, 255, 0.72));
}

.count-label {
  color: #0f766e;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.count-block strong {
  color: var(--ep-text-color-primary);
  font-size: 1.1rem;
}

.count-value,
.count-seconds {
  color: #0f172a;
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1.4;
}
</style>
