<script setup lang="ts">
import { ArrowRight, TopRight } from '@element-plus/icons-vue'
import { projects } from '~/data/portfolio'
defineProps<{ expanded?: boolean }>()
</script>

<template>
  <div class="project-list">
    <article
      v-for="(project, index) in projects"
      :id="project.id"
      :key="project.id"
      class="project-entry"
    >
      <span class="project-number mono">{{
        String(index + 1).padStart(2, '0')
      }}</span>
      <div class="project-heading">
        <p class="section-label">{{ project.category }}</p>
        <h3>{{ project.title }}</h3>
        <p>{{ project.subtitle }}</p>
      </div>
      <div class="project-content">
        <p>{{ project.description }}</p>
        <dl v-if="expanded">
          <div v-for="[label, text] in project.details" :key="label">
            <dt>{{ label }}</dt>
            <dd>{{ text }}</dd>
          </div>
        </dl>
        <div class="project-links">
          <router-link
            v-if="!expanded"
            class="text-link"
            :to="{ path: '/nav/CaseStudy', hash: '#' + project.id }"
            >项目详情 <ArrowRight
          /></router-link>
          <a
            v-if="project.url"
            class="text-link"
            :href="project.url"
            target="_blank"
            rel="noreferrer"
            >GitHub <TopRight
          /></a>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.project-entry {
  display: grid;
  grid-template-columns: 42px minmax(200px, 0.9fr) minmax(0, 1.2fr);
  gap: 24px;
  padding: 42px 0;
  border-top: 1px solid var(--theme-border);
  scroll-margin-top: 112px;
}
.project-number {
  color: var(--accent);
  font-size: 14px;
  padding-top: 3px;
}
.project-heading h3 {
  font-size: 30px;
  margin-bottom: 8px;
}
.project-heading > p:last-child {
  font-size: 14px;
  color: var(--theme-text-tertiary);
  margin: 0;
}
.project-content > p {
  max-width: 58ch;
  color: var(--theme-text-secondary);
  line-height: 1.9;
}
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 24px;
  min-height: 30px;
}
dl {
  font-size: 14px;
  margin: 24px 0;
}
dl > div {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 12px;
  margin: 12px 0;
}
dt {
  color: var(--teal);
}
dd {
  margin: 0;
  color: var(--theme-text-secondary);
}
@media (max-width: 800px) {
  .project-entry {
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 12px;
    padding: 30px 0;
  }
  .project-heading h3 {
    font-size: 26px;
  }
  .project-content {
    grid-column: 2;
  }
  .project-content > p {
    font-size: 14px;
  }
}
@media (max-width: 360px) {
  .project-entry {
    grid-template-columns: minmax(0, 1fr);
  }
  .project-content {
    grid-column: 1;
  }
}
</style>
