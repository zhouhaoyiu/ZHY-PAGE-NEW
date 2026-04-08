<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'

// 使用动态导入
const pdfUrl = new URL('/zhy.pdf', import.meta.url).href
</script>

<template>
  <section class="page-shell about-me-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Profile
      </p>
      <h1 class="page-title">
        About Me
      </h1>
      <p class="page-description">
        这里展示我的个人简历 PDF，采用更舒展的内容容器和卡片背景，方便阅读与滚动。
      </p>
    </header>

    <div class="surface-panel pdf-panel">
      <VuePdfEmbed :source="pdfUrl" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-me-page {
  width: 100%;
  min-height: 100%;
  
  padding-right: 4px;
}

.pdf-panel {
  padding: clamp(14px, 2vw, 26px);
  overflow: hidden;
}

:deep(canvas) {
  width: 100% !important;
  height: auto !important;
}

.about-me-page::-webkit-scrollbar {
  width: 6px;
}

.about-me-page::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.6);
  border-radius: 999px;
}
</style>
