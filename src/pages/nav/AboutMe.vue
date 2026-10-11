<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { projects } from '~/data/portfolio'
</script>
<template>
  <section class="page-shell profile-page">
    <header class="page-header">
      <p class="page-eyebrow">SEISMOLOGY</p>
      <h1 class="page-title">周浩宇 / Haoyu Zhou</h1>
    </header>
    <p class="profile-intro">
      我主要做地震波形处理与 P 波拾取研究，开发了 CSPP 逐包因果 P
      波候选拾取模型。同时整理全球强震记录，编写下载、归档和历史地震查询程序。
    </p>
    <h2>项目</h2>
    <router-link
      v-for="project in projects"
      :key="project.id"
      class="profile-project"
      :to="{ path: '/nav/CaseStudy', hash: '#' + project.id }"
    >
      <span>{{ project.title }}</span
      ><ArrowRight />
    </router-link>
    <a class="text-link profile-email" href="mailto:648921469@qq.com"
      >648921469@qq.com</a
    >
  </section>
</template>
<style scoped>
.profile-intro {
  max-width: 64ch;
  font-size: 18px;
  line-height: 1.9;
  margin-bottom: 48px;
  color: var(--theme-text-secondary);
}
.profile-project {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 720px;
  padding: 20px 0;
  border-top: 1px solid var(--theme-border);
  font-size: 18px;
}
.profile-email {
  margin-top: 36px;
}
@media (max-width: 480px) {
  .profile-intro {
    font-size: 16px;
  }
  .page-title {
    font-size: 30px;
  }
}
</style>
