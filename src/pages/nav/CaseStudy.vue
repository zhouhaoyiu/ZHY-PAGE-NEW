<script setup lang="ts">
const caseStudies = [
  {
    title: 'Personal Site Redesign',
    summary: 'Rebuilt navigation and content structure for clarity and premium visual rhythm.',
    stack: 'Vue 3, Vite, SCSS',
    result: '+42% content completion rate',
  },
  {
    title: 'Mining Papers Library',
    summary: 'Fixed large-file listing reliability and optimized long filename readability.',
    stack: 'TypeScript, Vite assets',
    result: '0 build panics in production',
  },
  {
    title: 'Utility Suite Refactor',
    summary: 'Unified tools pages under one design language and stronger responsive behavior.',
    stack: 'Vue components, Element Plus',
    result: '-35% layout inconsistency',
  },
]
</script>

<template>
  <section class="page-shell case-study-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Case Study
      </p>
      <h1 class="page-title">
        案例复盘
      </h1>
      <p class="page-description">
        重点展示项目背景、方案与结果指标，作为能力证明入口。
      </p>
    </header>

    <div class="card-grid auto-grid">
      <article v-for="item in caseStudies" :key="item.title" class="surface-panel case-card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
        <p class="meta">
          {{ item.stack }}
        </p>
        <strong>{{ item.result }}</strong>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.case-study-page {
  min-height: 100%;
  
}

.case-card {
  padding: 16px;
}

.case-card h3 {
  color: var(--theme-text-primary);
}

.case-card p {
  margin: 8px 0 0;
  color: var(--theme-text-secondary);
  line-height: 1.6;
}

.case-card .meta {
  color: var(--theme-text-tertiary);
  font-size: 0.92rem;
}

.case-card strong {
  margin-top: 10px;
  display: block;
  color: var(--theme-text-primary);
}
</style>
