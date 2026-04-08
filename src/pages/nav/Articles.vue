<script setup lang="ts">
const articles = [
  { title: 'Designing Practical Personal Sites', meta: '8 min read · UI/UX' },
  { title: 'What Makes a Tool Page Useful', meta: '6 min read · Product thinking' },
  { title: 'When to Choose Simplicity over Visual Effects', meta: '5 min read · Frontend' },
]
</script>

<template>
  <section class="page-shell articles-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Articles
      </p>
      <h1 class="page-title">
        写作专栏
      </h1>
      <p class="page-description">
        记录设计、工程实践和产品思考。
      </p>
    </header>

    <ul class="article-list">
      <li v-for="item in articles" :key="item.title" class="surface-panel article-item">
        <strong>{{ item.title }}</strong>
        <span>{{ item.meta }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.articles-page {
  min-height: 100%;
  
}

.article-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.article-item {
  padding: 14px 16px;
}

.article-item strong {
  display: block;
  color: var(--theme-text-primary);
}

.article-item span {
  display: block;
  margin-top: 6px;
  color: var(--theme-text-secondary);
}
</style>
