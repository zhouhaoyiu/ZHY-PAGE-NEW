<script setup lang="ts">
function openBigImage(index:number) {
  console.log(index);  
}
</script>

<template>
  <div class="photo-wall h-full w-full">
    <h1>PhotoWall</h1>
    <div class="flex-center flex flex-row flex-wrap flex-justify-center">
      <svg @click="openBigImage(i)" v-for="(i, index) in 16" :key="index" width="500px" height="395px" xmlns="http://www.w3.org/2000/svg" class="svg">
        <rect rx="0" ry="0" width="100%" height="100%" fill="url(#diagonalGradient)" /><defs>
          <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="30%" style="stop-color:#f292e5;" />
            <stop offset="70%" style="stop-color:#8ad7eb;" />
          </linearGradient>
        </defs>
        <text x="50%" y="50%" dominant-baseline="middle" alignment-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="#ffffff">
          <!-- 500 x 200 -->
          {{ i }}
        </text>
      </svg>
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
      outline: 1px solid #000;
    }
  }
}

/* 美化滚动条 */
.photo-wall::-webkit-scrollbar {
  width: 4px;
  margin-right: 3px;
}
</style>
