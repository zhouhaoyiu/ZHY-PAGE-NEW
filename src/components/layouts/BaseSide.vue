<script lang="ts" setup>
import {
  Document,
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
        PhotoWall
      </template>
    </el-menu-item>
    <el-menu-item index="/nav/LittleTools" route="/nav/LittleTools" @click="handleOpen('/nav/LittleTools')">
      <el-icon><MagicStick /></el-icon>
      <template #title>
        LittleTools
      </template>
    </el-menu-item>
    <el-menu-item index="/nav/Thoughts" route="/nav/Thoughts" @click="handleOpen('/nav/Thoughts')">
      <el-icon><Paperclip /></el-icon>
      <template #title>
        Thoughts
      </template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-v {
  width: 300px;
}
</style>
