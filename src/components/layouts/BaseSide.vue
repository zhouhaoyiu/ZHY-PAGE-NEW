<script setup lang="ts">
import { projects } from '~/data/portfolio'
defineEmits<{ navigate: [] }>()
</script>
<template>
  <nav class="directory-grid" aria-label="网站目录">
    <section>
      <h3>研究项目</h3>
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="{ path: '/nav/CaseStudy', hash: '#' + project.id }"
        @click="$emit('navigate')"
        >{{ project.title }}</router-link
      >
    </section>
    <section>
      <h3>周浩宇</h3>
      <router-link to="/nav/Home" @click="$emit('navigate')">首页</router-link>
      <router-link to="/nav/AboutMe" @click="$emit('navigate')"
        >关于我</router-link
      >
      <router-link to="/nav/ContactMe" @click="$emit('navigate')"
        >联系</router-link
      >
    </section>
  </nav>
</template>
