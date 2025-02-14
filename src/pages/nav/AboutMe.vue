<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'
// 修改 PDF 文件路径
import zhyPdf from './zhy.pdf'
</script>

<template>
  <div class="about-me">
    <VuePdfEmbed :source="zhyPdf" />
  </div>
</template>

<style scoped>
.about-me {
  width: 100%;
  padding: 0 20%;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
}

/* 美化滚动条 */
.about-me::-webkit-scrollbar {
  width: 8px;
}

.about-me::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.about-me::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.about-me::-webkit-scrollbar-thumb:hover {
  background: #555;
}

:deep(canvas) {
  width: 100% !important;
  height: auto !important;
}
</style>
