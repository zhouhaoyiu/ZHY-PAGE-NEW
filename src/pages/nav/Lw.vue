<script setup lang="ts">
// 
const lwFiles = import.meta.glob('/public/lw/*.caj')
const lwFilesKeys = Object.keys(lwFiles)
const lwFilesToUrl = lwFilesKeys.map((key) => {
  return key.split('/').pop()  
})
// 如果是线上环境，打包后的public文件夹会被放在根目录下，所以在开发环境和线上环境的路径不一样
function downloadFile(fileName: string) {
  if (import.meta.env.DEV) {
    const a = document.createElement('a')
    a.href = `/public/lw/${fileName}`
    a.download = fileName
    a.click()
  } else {
    const a = document.createElement('a')
    a.href = `/lw/${fileName}`
    a.download = fileName
    a.click()
  }
}
</script>

<template>
  <div h-full class="thoughts">
    <h1 style="position:relative;">
      智能采矿论文
    </h1>
    <div class="lw-box">
      <div v-for="lw in lwFilesToUrl" :key="lw" class="lw-item" @click="downloadFile(lw as string)">
        <!-- 下载caj文件 -->
        {{ lw }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.thoughts {
  width: 100%;
  display: flex;
  flex-direction: column;

  .lw-box {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 0;

    .lw-item {
      width: 500px;
      height: 50px;
      padding: 10px;
      // 不变省略号
      white-space: nowrap;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #f0f0f0;
      }

      // 如果html的class有dark，就改变背景颜色
      .dark & {
        background-color: #333;
        color: #fff;

        &:hover {
          background-color: #666;
        }
      }
    }
  }

  .lw-box::-webkit-scrollbar {
    width: 4px;
    margin-right: 3px;
  }

  .lw-box::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  .lw-box::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  .lw-box::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>
