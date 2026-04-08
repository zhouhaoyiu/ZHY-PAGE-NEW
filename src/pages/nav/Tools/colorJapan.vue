<script setup lang="ts">
// ./colorBox.ts
import { ElMessage } from 'element-plus'
import { colorBoxJapan } from './colorBox'

function copy(hex: string, name: string) {
  if (!navigator.clipboard) {
    ElMessage.error('复制失败')
    return
  }
  navigator.clipboard.writeText(hex).then(() => {
    // 提示
    ElMessage.success(`已复制 ${name} 的hex 值 ${hex}`)
  }).catch(() => {
    ElMessage.error('复制失败')
  })
}
</script>

<template>
  <section class="page-shell color-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Color Lab
      </p>
      <h1 class="page-title">
        Japan-colors
      </h1>
      <p class="page-description">
        日本传统色彩以卡片栅格方式展示，点击色块即可复制 hex 值。
      </p>
    </header>

    <div class="color-box">
      <div v-for="colorRow in colorBoxJapan" :key="colorRow[0].name" class="box-in">
        <div v-for="color in colorRow" :key="color.name" :style="{ backgroundColor: color.hex }" class="color-self">
          <!-- hover时显示点击复制 -->
          <div class="color-hex" :title="`点击复制${color.name}`" @click="copy(color.hex, color.name)">
            {{ color.hex }}
          </div>
          <div>{{ color.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.color-page {
  width: 100%;
  min-height: 100%;
  

  .color-box {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 18px;

    .box-in {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      align-items: start;
      gap: 14px;
      border: 1px solid rgba(226, 232, 240, 0.9);
      border-radius: 18px;
      padding: 14px;
      background: rgba(255, 255, 255, 0.65);

      .color-self {
        font-weight: 600;
        border-radius: 16px;
        min-height: 92px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        color: #fff;
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.1);

        .color-hex {
          margin-bottom: 3px;
          min-height: 20px;
          line-height: 20px;
          background-color: rgb(255 255 255 / 21%);
          padding: 4px 6px;
          width: calc(100% - 12px);
          text-align: start;
          cursor: pointer;
        }
        // 修改title的样式
      }
    }
  }
}
</style>
