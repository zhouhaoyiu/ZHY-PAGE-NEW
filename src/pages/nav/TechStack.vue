<script setup lang="ts">
const stackGroups = [
  { title: 'Frontend', items: ['Vue 3', 'TypeScript', 'SCSS', 'UnoCSS'] },
  { title: 'Backend', items: ['Node.js', 'REST API', 'File services'] },
  { title: 'Engineering', items: ['Vite', 'pnpm', 'ESLint', 'CI basics'] },
  { title: 'AI Workflow', items: ['Copilot', 'Prompt design', 'Automation'] },
]
</script>

<template>
  <section class="page-shell stack-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Tech Stack
      </p>
      <h1 class="page-title">
        技术栈地图
      </h1>
      <p class="page-description">
        分层展示当前技术能力与工程实践侧重点。
      </p>
    </header>

    <div class="stack-grid">
      <article v-for="group in stackGroups" :key="group.title" class="surface-panel stack-card">
        <h3>{{ group.title }}</h3>
        <p>{{ group.items.join(' · ') }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.stack-page {
  min-height: 100%;
  
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
}

.stack-card {
  padding: 16px;
}

.stack-card h3 {
  color: var(--theme-text-primary);
}

.stack-card p {
  margin: 8px 0 0;
  color: var(--theme-text-secondary);
  line-height: 1.6;
}
</style>
