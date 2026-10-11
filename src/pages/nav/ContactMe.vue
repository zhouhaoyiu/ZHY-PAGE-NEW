<script setup lang="ts">
import { Message, TopRight } from '@element-plus/icons-vue'
</script>
<template>
  <section class="page-shell">
    <header class="page-header">
      <p class="page-eyebrow">CONTACT</p>
      <h1 class="page-title">联系</h1>
    </header>
    <dl class="contact-list">
      <div>
        <dt>邮箱</dt>
        <dd>
          <a class="text-link" href="mailto:648921469@qq.com"
            ><Message />648921469@qq.com</a
          >
        </dd>
      </div>
      <div>
        <dt>GitHub</dt>
        <dd>
          <a
            class="text-link"
            href="https://github.com/zhouhaoyiu"
            target="_blank"
            rel="noreferrer"
            >zhouhaoyiu <TopRight
          /></a>
        </dd>
      </div>
    </dl>
  </section>
</template>
<style scoped>
.contact-list {
  max-width: 800px;
}
.contact-list > div {
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr);
  gap: 24px;
  padding: 28px 0;
  border-top: 1px solid var(--theme-border);
}
dt {
  color: var(--theme-text-tertiary);
}
dd {
  margin: 0;
  min-width: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 480px) {
  .contact-list > div {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
