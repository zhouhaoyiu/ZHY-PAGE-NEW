<script setup lang="ts">
const nowBuilding = [
  { name: 'Case Study System', status: 'In progress' },
  { name: 'Article Tag + Search', status: 'Planned' },
  { name: 'Public Design Tokens', status: 'In progress' },
]
</script>

<template>
  <section class="page-shell now-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Building Now
      </p>
      <h1 class="page-title">
        正在做什么
      </h1>
      <p class="page-description">
        当前进行中的方向和下一步计划。
      </p>
    </header>

    <ul class="now-list">
      <li v-for="item in nowBuilding" :key="item.name" class="surface-panel now-item">
        <strong>{{ item.name }}</strong>
        <span>{{ item.status }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.now-page {
  min-height: 100%;
  
}

.now-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.now-item {
  padding: 14px 16px;
}

.now-item strong {
  display: block;
  color: var(--theme-text-primary);
}

.now-item span {
  display: block;
  margin-top: 6px;
  color: var(--theme-text-secondary);
}
</style>
