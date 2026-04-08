<script lang="ts" setup>
import { lwFiles } from './lw-files'

const lwFilesToUrl = [...lwFiles]

function downloadFile(fileName: string) {
  const href = `/lw/${encodeURIComponent(fileName)}`
  const a = document.createElement('a')
  a.href = href
  a.download = fileName
  a.click()
}
</script>

<template>
  <section class="page-shell lw-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Papers
      </p>
      <h1 class="page-title">
        智能采矿论文
      </h1>
      <p class="page-description">
        论文列表改为卡片式下载入口，便于浏览和点击下载。
      </p>
    </header>

    <div class="lw-box">
      <div v-for="lw in lwFilesToUrl" :key="lw" class="lw-item" :title="lw" @click="downloadFile(lw as string)">
        {{ lw }}
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.lw-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  

  .lw-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;

    .lw-item {
      min-height: 58px;
      padding: 14px 16px;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-all;
      line-height: 1.5;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      border: 1px solid rgba(226, 232, 240, 0.9);
      border-radius: 18px;
      cursor: pointer;
      background: var(--tool-bg-color);
      box-shadow: var(--tool-bg-shadow);
      font-size: 0.98rem;
      color: #1f2937;

      &:hover {
        transform: translateY(-3px);
        background-color: rgba(255, 255, 255, 0.92);
      }

      // 如果html的class有dark，就改变背景颜色
      .dark & {
        background-color: rgba(15, 23, 42, 0.92);
        color: #fff;

        &:hover {
          background-color: rgba(30, 41, 59, 0.96);
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
