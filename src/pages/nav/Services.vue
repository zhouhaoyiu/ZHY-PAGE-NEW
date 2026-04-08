<script setup lang="ts">
const services = [
  'Landing page and portfolio development',
  'Existing project UI refactor and cleanup',
  'Frontend performance and readability optimization',
  'AI-assisted development workflow setup',
]
</script>

<template>
  <section class="page-shell services-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Services
      </p>
      <h1 class="page-title">
        服务与合作
      </h1>
      <p class="page-description">
        明确可交付项，支持从设计到开发落地。
      </p>
    </header>

    <ul class="service-list">
      <li v-for="item in services" :key="item" class="surface-panel service-item">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.services-page {
  min-height: 100%;
  
}

.service-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.service-item {
  padding: 14px 16px;
  color: var(--theme-text-secondary);
  line-height: 1.6;
}
</style>
