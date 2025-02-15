<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'

// 使用动态导入
const pdfUrl = new URL('./zhy.pdf', import.meta.url).href
</script>

<template>
  <div class="about-me">
    <VuePdfEmbed :source="pdfUrl" />
  </div>
</template>

<style scoped lang="scss">
.about-me {
  width: 100%;
  padding: 0 20%;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
}

/* 美化滚动条 */
.about-me::-webkit-scrollbar {
  width: 4px;
  margin-right: 3px;
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
