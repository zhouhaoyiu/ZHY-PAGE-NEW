<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const isHome = computed(() => route.path === '/nav/Home' || route.path === '/')
</script>
<template>
  <el-config-provider namespace="ep">
    <a class="skip-link" href="#main-content">跳到正文</a>
    <BaseHeader />
    <main id="main-content" :class="isHome ? 'home-view' : 'inner-view'">
      <router-view />
    </main>
    <footer class="site-footer">
      <router-link to="/nav/Home">HAOYU ZHOU / 周浩宇</router-link>
      <span>SEISMOLOGY</span>
      <a href="https://github.com/zhouhaoyiu" target="_blank" rel="noreferrer"
        >GitHub</a
      >
    </footer>
  </el-config-provider>
</template>
