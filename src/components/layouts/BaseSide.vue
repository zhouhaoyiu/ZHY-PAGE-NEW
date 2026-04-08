<script lang="ts" setup>
import {
  Collection,
  Document,
  Files,
  Menu as IconMenu,
  MagicStick,
  Paperclip,
  PictureRounded,
  Setting,
} from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'

const defaultActive = ref('')

function getActive() {
  const savedPath = localStorage.getItem('savePath')
  defaultActive.value = savedPath || window.location.pathname
}

function handleOpen(key: string) {
  localStorage.setItem('savePath', key)
  if (window.location.pathname !== key)
    window.location.href = key
}
</script>

<template>
  <el-menu :default-active="defaultActive" class="site-side">
    <el-menu-item-group>
      <template #title>
        Main
      </template>
      <el-menu-item index="/nav/Home" route="/nav/Home" @click="handleOpen('/nav/Home')">
        <el-icon>
          <IconMenu />
        </el-icon>
        <template #title>
          Home
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/AboutMe" route="/nav/AboutMe" @click="handleOpen('/nav/AboutMe')">
        <el-icon>
          <Document />
        </el-icon>
        <template #title>
          About Me
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/ContactMe" route="/nav/ContactMe" @click="handleOpen('/nav/ContactMe')">
        <el-icon>
          <Setting />
        </el-icon>
        <template #title>
          Contact Me
        </template>
      </el-menu-item>
    </el-menu-item-group>

    <el-menu-item-group>
      <template #title>
        Portfolio
      </template>
      <el-menu-item index="/nav/CaseStudy" route="/nav/CaseStudy" @click="handleOpen('/nav/CaseStudy')">
        <el-icon><Document /></el-icon>
        <template #title>
          Case Study
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/TechStack" route="/nav/TechStack" @click="handleOpen('/nav/TechStack')">
        <el-icon><Collection /></el-icon>
        <template #title>
          Tech Stack
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/Articles" route="/nav/Articles" @click="handleOpen('/nav/Articles')">
        <el-icon><Paperclip /></el-icon>
        <template #title>
          Articles
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/OpenSource" route="/nav/OpenSource" @click="handleOpen('/nav/OpenSource')">
        <el-icon><Files /></el-icon>
        <template #title>
          Open Source
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/Services" route="/nav/Services" @click="handleOpen('/nav/Services')">
        <el-icon><Setting /></el-icon>
        <template #title>
          Services
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/NowBuilding" route="/nav/NowBuilding" @click="handleOpen('/nav/NowBuilding')">
        <el-icon><MagicStick /></el-icon>
        <template #title>
          Now Building
        </template>
      </el-menu-item>
    </el-menu-item-group>

    <el-menu-item-group>
      <template #title>
        Pages
      </template>
      <el-menu-item index="/nav/PhotoWall" route="/nav/PhotoWall" @click="handleOpen('/nav/PhotoWall')">
        <el-icon><PictureRounded /></el-icon>
        <template #title>
          Photo Wall
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/LittleTools" route="/nav/LittleTools" @click="handleOpen('/nav/LittleTools')">
        <el-icon><MagicStick /></el-icon>
        <template #title>
          Little Tools
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/Thoughts" route="/nav/Thoughts" @click="handleOpen('/nav/Thoughts')">
        <el-icon><Paperclip /></el-icon>
        <template #title>
          Thoughts
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/Lw" route="/nav/Lw" @click="handleOpen('/nav/Lw')">
        <el-icon><Files /></el-icon>
        <template #title>
          Paper
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/projectBoard" route="/nav/projectBoard" @click="handleOpen('/nav/projectBoard')">
        <el-icon>
          <div i-ri-github-fill />
        </el-icon>
        <template #title>
          Github Project Board
        </template>
      </el-menu-item>
      <el-menu-item index="/nav/Ai" route="/nav/Ai" @click="handleOpen('/nav/Ai')">
        <el-icon>
          <div i-ri-chat-1-line />
        </el-icon>
        <template #title>
          Ai
        </template>
      </el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<style lang="scss" scoped>
.site-side {
  width: 290px;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid var(--theme-border);
  background: var(--theme-bg-surface);
  box-shadow: var(--theme-shadow-sm);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 184, 0.55);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(226, 232, 240, 0.45);
    border-radius: 999px;
  }

  :deep(.ep-menu-item) {
    margin: 5px 0;
    border-radius: 10px;
    height: 44px;
    line-height: 44px;
    color: var(--theme-text-primary);
    font-size: 0.96rem;
    font-weight: 550;
  }

  :deep(.ep-menu-item .ep-icon) {
    color: var(--theme-text-secondary);
  }

  :deep(.ep-menu-item.is-active) {
    background: var(--theme-bg-surface-active);
    color: var(--theme-text-primary);
    font-weight: 700;
  }

  :deep(.ep-menu-item:hover) {
    background: var(--theme-bg-surface-hover);
  }

  :deep(.ep-menu-item-group__title) {
    padding: 8px 8px 2px;
    color: var(--theme-text-eyebrow);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
}

@media (max-width: 1100px) {
  .site-side {
    width: 100%;
    max-height: 240px;
    padding: 8px;
    border-radius: 14px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  :deep(.el-menu-item-group) {
    display: flex;
    flex-direction: column;
    min-width: 160px;
    flex: 1;
  }

  :deep(.ep-menu-item-group__title) {
    padding-top: 6px;
  }

  :deep(.ep-menu-item) {
    height: 40px;
    line-height: 40px;
    margin: 4px 0;
    width: 100%;
  }
}
</style>
