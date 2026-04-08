<script lang="ts" setup>
// 进入页面时获取当前路由

// import { repository } from '~/../package.json'
import { toggleDark } from '~/composables'
</script>

<template>
  <header class="site-header">
    <a class="brand-item" href="/nav/Home">
      Mystic
    </a>

    <nav class="nav-group" aria-label="External links">
      <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.cursor.com/cn">
        Cursor
      </a>
      <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.github.com/zhouhaoyiu">
        Github
      </a>
      <a class="nav-link" target="_blank" rel="noreferrer" href="https://www.runoob.com/">
        Runoob
      </a>
    </nav>

    <button class="theme-switch" type="button" aria-label="Toggle dark mode" @click="toggleDark()">
      <i inline-flex i="dark:ep-moon ep-sunny" />
    </button>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  margin: 12px 12px 0;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  border: 1px solid var(--theme-border);
  background: var(--theme-bg-surface);
  box-shadow: var(--theme-shadow-sm);
}

.brand-item {
  flex: 0 0 auto;
  font-size: 1.05rem;
  letter-spacing: 0.04em;
  color: var(--theme-text-primary);
  text-decoration: none;
}

.nav-group {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-width: 0;
}

.nav-link {
  color: inherit;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0 6px;
  min-height: 36px;
  text-decoration: none;
  white-space: nowrap;
}

.theme-switch {
  flex: 0 0 auto;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: var(--theme-bg-surface-hover);
  color: inherit;
  cursor: pointer;
}

.theme-switch:hover {
  transform: translateY(-1px);
}

@media (max-width: 880px) {
  .site-header {
    margin: 10px 10px 0;
    padding: 8px 10px;
  }

  .nav-group {
    display: none;
  }
}

@media (max-width: 720px) {
  .site-header {
    margin: 8px 8px 0;
    padding: 8px 10px;
    border-radius: 12px;
  }

  .brand-item {
    font-size: 1rem;
  }

  .theme-switch {
    margin-left: auto;
  }
}
</style>
