<script setup lang="ts">
import { Close, Menu, Message, Moon, Sunny } from '@element-plus/icons-vue'
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { isDark, toggleDark } from '~/composables'
const route = useRoute()
const directory = ref<HTMLDialogElement>()
const active = ref('overview')
const sections = [
  { id: 'overview', label: '概览' },
  { id: 'work', label: '研究项目' },
  { id: 'about', label: '关于我' },
  { id: 'contact', label: '联系' },
]
function updateActive() {
  if (route.path !== '/nav/Home') {
    active.value = ''
    return
  }
  active.value =
    sections
      .filter((item) => {
        const element = document.getElementById(item.id)
        return element && element.getBoundingClientRect().top <= 180
      })
      .at(-1)?.id || 'overview'
}
watch(
  () => route.fullPath,
  async () => {
    directory.value?.close()
    await nextTick()
    updateActive()
  },
)
onMounted(() => {
  window.addEventListener('scroll', updateActive, { passive: true })
  updateActive()
})
onBeforeUnmount(() => window.removeEventListener('scroll', updateActive))
</script>
<template>
  <header class="site-header">
    <router-link class="brand" to="/nav/Home">
      <span class="brand-mark">ZHY<span>.</span></span>
      <span class="brand-name">Haoyu Zhou<small>SEISMOLOGY</small></span>
    </router-link>
    <nav class="primary-nav" aria-label="主导航">
      <router-link
        v-for="item in sections"
        :key="item.id"
        :to="{ path: '/nav/Home', hash: '#' + item.id }"
        :class="{ active: active === item.id }"
        :aria-current="active === item.id ? 'location' : undefined"
        >{{ item.label }}</router-link
      >
    </nav>
    <div class="header-actions">
      <a class="contact-link" href="mailto:648921469@qq.com"
        ><Message aria-hidden="true" />联系</a
      >
      <button
        class="icon-button"
        type="button"
        :title="isDark ? '切换浅色' : '切换深色'"
        :aria-label="isDark ? '切换浅色' : '切换深色'"
        @click="toggleDark()"
      >
        <Sunny v-if="isDark" /><Moon v-else />
      </button>
      <button
        class="icon-button"
        type="button"
        title="全部页面"
        aria-label="全部页面"
        aria-haspopup="dialog"
        @click="directory?.showModal()"
      >
        <Menu />
      </button>
    </div>
  </header>
  <dialog
    ref="directory"
    class="directory-dialog"
    aria-labelledby="directory-title"
    @click="$event.target === directory && directory?.close()"
  >
    <div class="directory-heading">
      <h2 id="directory-title">全部页面</h2>
      <button
        class="icon-button"
        aria-label="关闭目录"
        title="关闭目录"
        @click="directory?.close()"
      >
        <Close />
      </button>
    </div>
    <BaseSide @navigate="directory?.close()" />
  </dialog>
</template>
