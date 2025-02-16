<script setup lang="ts">
// import type { Action } from 'element-plus'
// import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue';

const imageArr = [
  './1.jpg',
  './2.jpg',
  './3.jpg'
]
let imageUrlArr = [] as string[]
 imageArr.forEach((i) => {
  const imageUrl = ref('null');
  imageUrl.value = new URL(`${i}`, import.meta.url).href;
  imageUrlArr.push(imageUrl.value);
})
console.log(imageUrlArr);
// function openBigImage(index: number) {
//   ElMessageBox.alert(`${index}`, 'Title', {
//     // if you want to disable its autofocus
//     // autofocus: false,
//     confirmButtonText: 'OK',
//     callback: (action: Action) => {
//       ElMessage({
//         type: 'info',
//         message: `action: ${action}`,
//       })
//     },
//   })
// }
</script>

<template>
  <div class="photo-wall h-full w-full">
    <h1>PhotoWall</h1>
    <div class="flex-center flex flex-row flex-wrap flex-justify-center">
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
      <el-image v-for="(i, index) in imageUrlArr" :key="index" width="500px" height="395px" style="width: 500px; height: 395px"
        class="svg" :src="i" preview-teleported :preview-src-list="imageUrlArr" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" show-progress :initial-index="4"
        fit="cover" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.photo-wall {
  width: 100%;
  // box-sizing: border-box;
  height: 100%;
  overflow-y: auto;

  .svg {
    cursor: pointer;
    margin: 14px 20px;
    background-color: #f6f6f7;
    border-radius: 12px;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);

    &:hover {
      transform: scale(1.02);
      outline: 1px solid #c4c4c4;
    }
  }
}

/* 美化滚动条 */
.photo-wall::-webkit-scrollbar {
  width: 4px;
  margin-right: 3px;
}
</style>
