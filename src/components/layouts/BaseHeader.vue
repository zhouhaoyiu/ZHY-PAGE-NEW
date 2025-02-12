<script lang="ts" setup>
import { ref } from 'vue'
// 进入页面时获取当前路由
import { useRouter } from 'vue-router'

// import { repository } from '~/../package.json'
import { toggleDark } from '~/composables'

const router = useRouter()
const currentRoute = router.currentRoute.value.path
const defaultActive = ref(currentRoute.split('/').slice(0, 3).join('/'))
function getFontColor(route: string) {
  return defaultActive.value === route ? 'var(--ep-color-primary)' : ''
}
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" router a font-bold>
    <el-menu-item index="/nav/Home">
      <div class="flex items-center justify-center gap-2">
        <!-- <div class="text-xl" i-ep-element-plus /> -->
        <span font-400 color="$ep-color-primary"> 周浩宇 HaoYu Zhou </span>
      </div>
    </el-menu-item>
    <el-menu-item index="1" route="/nav/Home" :style="{ color: getFontColor('/nav/Home') }">
      Home
    </el-menu-item>
    <el-menu-item index="3" disabled route="/nav/AboutMe" :style="{ color: getFontColor('/nav/AboutMe') }">
      About Me
    </el-menu-item>
    <el-menu-item index="4" route="/nav/ContactMe" :style="{ color: getFontColor('/nav/ContactMe') }">
      Contact Me
    </el-menu-item>

    <el-menu-item h="full" @click="toggleDark()">
      <button class="w-full cursor-pointer border-none bg-transparent" style="height: var(--ep-menu-item-height)">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>

    <!-- <el-menu-item h="full">
      <a class="size-full flex items-center justify-center" :href="repository.url" target="_blank">
        <div i-ri-github-fill />
      </a>
    </el-menu-item> -->
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-demo {
  &.ep-menu--horizontal > .ep-menu-item:nth-child(1) {
    margin-right: auto;
  }
}
</style>
