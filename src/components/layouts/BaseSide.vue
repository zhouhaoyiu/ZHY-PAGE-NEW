<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'

// 进入页面时获取当前路由
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
  // console.log(key)
  localStorage.setItem('savePath', key)
}
function handleClose(_key: string, _keyPath: string[]) {}
</script>

<template>
  <el-menu router :default-active="defaultActive" class="el-menu-v" @open="getActive" @close="handleClose">
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
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-v {
  width: 300px;
}
</style>
