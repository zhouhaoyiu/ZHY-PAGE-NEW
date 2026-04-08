<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  const savePath = localStorage.getItem('savePath')
  const fallbackPath = '/nav/Home'
  const targetPath = savePath || fallbackPath
  const resolved = router.resolve(targetPath)
  const nextPath = resolved.matched.length > 0 ? targetPath : fallbackPath

  if (router.currentRoute.value.fullPath === '/')
    router.replace(nextPath)
})
</script>

<template>
  <el-config-provider namespace="ep">
    <div class="app-shell">
      <BaseHeader />
      <div class="main-container">
        <aside class="sidebar-shell">
          <BaseSide />
        </aside>
        <main class="view-shell">
          <div class="view-surface">
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </main>
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  height: 100vh;
  color: var(--theme-text-primary);
  overflow: hidden;
}

.app-shell {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-container {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 14px;
  align-items: stretch;
  flex: 1;
  min-height: 0;
  padding: 12px 0 0 12px;
  overflow: hidden;
}

.sidebar-shell {
  align-self: stretch;
  min-height: 0;
  padding-bottom: 12px;
}

.view-shell {
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.view-surface {
  position: relative;
  flex: 1;
  width: 100%;
  padding: clamp(16px, 2vw, 24px);
  border-radius: 18px 0 0 0;
  background: var(--theme-bg-surface);
  border: 1px solid var(--theme-border);
  border-right: none;
  border-bottom: none;
  box-shadow: -4px -4px 14px rgba(15, 23, 42, 0.03);
  overflow-y: auto;
  overflow-x: hidden;
}

.view-surface::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.view-surface::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.6);
  border-radius: 999px;
}

.view-surface::-webkit-scrollbar-track {
  background: rgba(226, 232, 240, 0.55);
  border-radius: 999px;
}

@media (max-width: 1100px) {
  .main-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  .sidebar-shell {
    position: static;
    flex: 0 0 auto;
    padding-right: 12px;
  }

  .view-shell {
    min-height: 0;
    flex: 1 1 auto;
  }
}

@media (max-width: 720px) {
  .main-container {
    padding: 12px 0 0 12px;
    gap: 12px;
  }

  .view-surface {
    padding: 16px;
    border-radius: 22px 0 0 0;
  }
}
</style>
