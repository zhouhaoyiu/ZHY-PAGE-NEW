<script setup lang="ts">
// import type { Action } from 'element-plus'
// import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'

const imageArr = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
]
const imageUrlArr = [] as string[]
imageArr.forEach((i) => {
  const imageUrl = ref('null')
  imageUrl.value = new URL(`${i}`, import.meta.url).href
  imageUrlArr.push(imageUrl.value)
})
</script>

<template>
  <section class="page-shell photo-wall-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Gallery
      </p>
      <h1 class="page-title">
        Photo Wall
      </h1>
      <p class="page-description">
        图片墙改成了更松弛的网格排布，方便浏览与预览。
      </p>
    </header>

    <div class="photo-grid">
      <!-- <svg v-for="(i, index) in 16" :key="index" width="500px" height="395px" xmlns="http://www.w3.org/2000/svg" class="svg" @click="openBigImage(i)">
        <rect rx="0" ry="0" width="100%" height="100%" fill="url(#diagonalGradient)" /><defs>
          <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="30%" style="stop-color:#f292e5;" />
            <stop offset="70%" style="stop-color:#8ad7eb;" />
          </linearGradient>
        </defs>
        <text x="50%" y="50%" dominant-baseline="middle" alignment-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="#ffffff">
          {{ i }}
        </text>
      </svg> -->
      <el-image
        v-for="(i, index) in imageUrlArr" :key="index" style="width: 330px; height: 220px"
        class="photo-item" :src="i" :preview-src-list="imageUrlArr" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" show-progress preview-teleported :initial-index="index"
        fit="cover"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.photo-wall-page {
  width: 100%;
  // box-sizing: border-box;
  min-height: 100%;
  overflow-y: auto;

  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 18px;
  }

  .photo-item {
    cursor: pointer;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 18px 48px rgba(15, 23, 42, 0.12);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 28px 60px rgba(15, 23, 42, 0.16);
    }
  }
}

.photo-wall-page::-webkit-scrollbar {
  width: 6px;
  margin-right: 3px;
}

.photo-wall-page::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.6);
  border-radius: 999px;
}
</style>
