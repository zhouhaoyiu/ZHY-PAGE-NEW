<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const gaokaoTime = ref('2025-06-07 08:00:00')
const nowTime = ref(new Date().getTime())
const timeFS = ref('2025-03-21 00:00:00')
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
  <div class="gaokao">
    <h1>
      2025 年高考倒计时
    </h1>
    <div v-show="time > 0" font-size="20px">
      {{ formatTime(time) }}
    </div>
    <h1>
      2025-02-21
    </h1>
    <div v-show="time2 > 0" font-size="20px">
      {{ formatTime(time2) }}
    </div>
    <div font-size="20px">
      {{ formatTime2(time2) }} 秒
    </div>
  </div>
</template>

<style scoped lang="scss">
.gaokao {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
