<script setup lang="ts">
const opensource = [
  'Maintained personal web templates and utility pages',
  'Published fixes around UI readability and responsive issues',
  'Shared practical snippets for faster Vue workflow',
]
</script>

<template>
  <section class="page-shell open-source-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Open Source
      </p>
      <h1 class="page-title">
        开源贡献
      </h1>
      <p class="page-description">
        聚焦可复用组件、可读性修复和工程效率提升。
      </p>
    </header>

    <ul class="open-list">
      <li v-for="item in opensource" :key="item" class="surface-panel open-item">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.open-source-page {
  min-height: 100%;
  
}

.open-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.open-item {
  padding: 14px 16px;
  color: var(--theme-text-secondary);
  line-height: 1.6;
}
</style>
