<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { ref } from 'vue'

// 进入页面时获取当前路由
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute.value.path
const defaultActive = ref(currentRoute.split('/').slice(0, 3).join('/'))

// const isCollapse = ref(true)
function handleOpen(key: string, _keyPath: string[]) {
  // console.log(key, keyPath)
  localStorage.setItem('savePath', key)
}
function handleClose(_key: string, _keyPath: string[]) {}
</script>

<template>
  <el-menu router :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-menu-item index="/nav/Home">
      <el-icon>
        <IconMenu />
      </el-icon>
      <template #title>
        <!-- 个人主页 -->
        Home
      </template>
    </el-menu-item>
    <el-menu-item index="/nav/AboutMe" disabled>
      <el-icon>
        <Document />
      </el-icon>
      <template #title>
        About Me
      </template>
    </el-menu-item>
    <el-menu-item index="/nav/ContactMe">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>
        Contact Me
      </template>
    </el-menu-item>
  </el-menu>
</template>
