<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  const savePath = localStorage.getItem('savePath') || '/'

  router.push(savePath)
})
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="main-container flex">
      <BaseSide />
      <div
        w="full"
        style="display: flex; justify-content: center; align-items: center;background-color: var( --router-view-bg-color);"
      >
        <!-- div中的内容水平垂直居中 -->
        <RouterView />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 4px);
}
</style>
