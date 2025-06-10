<script lang="ts" setup>
import {
  Document,
  Files,
  Menu as IconMenu,
  MagicStick,
  Paperclip,
  PictureRounded,
  Setting,
} from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute.value.path
const defaultActive = ref(currentRoute)

onMounted(() => {
  getActive()
})

function getActive() {
  const savedPath = localStorage.getItem('savePath')
  defaultActive.value = savedPath || currentRoute
}

function handleOpen(key: string) {
  localStorage.setItem('savePath', key)
}
</script>

<template>
  <el-menu router :default-active="defaultActive" class="el-menu-v">
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
        <!-- GITHUB -->
        <div i-ri-github-fill />
      </el-icon>
      <template #title>
        Github Project Board
      </template>
    </el-menu-item>
    <el-menu-item index="/nav/Ai" route="/nav/Ai" @click="handleOpen('/nav/Ai')">
      <el-icon>
        <!-- GITHUB -->
        <div i-ri-chat-1-line />
      </el-icon>
      <template #title>
        Ai
      </template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-v {
  width: 300px;
}
</style>
