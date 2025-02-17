<script lang="ts" setup>
// 进入页面时获取当前路由

// import { repository } from '~/../package.json'
import { toggleDark } from '~/composables'
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" font-bold>
    <el-menu-item index="/nav/Home">
      <div class="flex items-center justify-center gap-2">
        <!-- <div class="text-xl" i-ep-element-plus /> -->
        <span font-400 color="$ep-color-primary"> 周浩宇 HaoYu Zhou </span>
      </div>
    </el-menu-item>
    <el-menu-item>
      <a target="_blank" href="https://www.github.com/zhouhaoyiu">
        Github
      </a>
    </el-menu-item>
    <el-menu-item>
      <a target="_blank" href="https://www.runoob.com/">
        Runoob
      </a>
    </el-menu-item>
    <!-- <el-menu-item index="/nav/AboutMe" disabled route="/nav/AboutMe" @click="handleOpen('/nav/AboutMe')">
      About Me
    </el-menu-item>
    <el-menu-item index="/nav/ContactMe" route="/nav/ContactMe"  @click="handleOpen('/nav/ContactMe')">
      Contact Me
    </el-menu-item> -->

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
