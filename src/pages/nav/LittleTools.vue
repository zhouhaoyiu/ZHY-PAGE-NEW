<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getHashColor } from './tool'

const router = useRouter()
interface ItoolBox {
  icon: string
  title: string
  description: string
  to: string
  disabled: boolean
}
const toolBox: ItoolBox[] = [
  {
    icon: 'uuid',
    title: 'UUID生成工具',
    description: 'UUID在线生成工具',
    to: '/nav/Tools/uuid',
    disabled: false,
  },
  {
    icon: '高',
    title: '高考倒计时',
    description: '高考倒计时工具',
    to: '/nav/Tools/gaokao',
    disabled: false,
  },
  {
    icon: '键',
    title: '键盘',
    description: 'html模拟的键盘',
    to: '/nav/Tools/keyboard',
    disabled: false,
  },
  {
    icon: '中',
    title: '中国传统色彩',
    description: '中国传统色彩大全',
    to: '/nav/Tools/colorChina',
    disabled: false,
  },
  {
    icon: '日',
    title: '日本传统色彩',
    description: '日本传统色彩大全',
    to: '/nav/Tools/colorJapan',
    disabled: false,
  },
  {
    icon: '正',
    title: '正则测试',
    description: '正则表达式测试工具',
    to: '/nav/Tools/regexDoctor',
    disabled: false,
  },
]
const refToolBox = ref(toolBox)

function handleGoTool(url: string) {
  router.push(url)
}
</script>

<template>
  <section class="page-shell little-tools-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Utilities
      </p>
      <h1 class="page-title">
        Little Tools
      </h1>
      <p class="page-description">
        小工具入口整理为响应式卡片，点击即可进入对应页面。
      </p>
    </header>

    <div class="tool-box">
      <div v-for="(o, oIndex) in refToolBox" :key="oIndex" class="tool" @click="handleGoTool(o.to)">
        <div class="icon-box">
          <el-image class="icon" src="" alt="" :style="getHashColor(o.icon)">
            <template #error>
              <div class="image-slot">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <!-- 圆角矩形框里是uuid字符 -->
                  <!-- <rect x="0" y="0" width="24" height="24" rx="4" ry="4" fill="none" stroke="currentColor" stroke-width="2" /> -->
                  <text
                    x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="8px"
                    fill="currentColor" class="svgtext"
                  >{{ o.icon }}</text>
                </svg>
              </div>
            </template>
          </el-image>
        </div>
        <div class="info-box">
          <p class="info-title">
            {{ o.title }}
          </p>
          <p class="info-des">
            {{ o.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.little-tools-page {
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
}

.tool-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.tool-box .tool {
  display: flex;
  box-shadow: var(--tool-bg-shadow);
  min-height: 98px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.2s ease-out;
  background: var(--tool-bg-color);
  border-radius: 20px;
  cursor: pointer;
}

.tool-box .tool:hover {
  transform: translateY(-4px);
  outline: 1px solid rgba(37, 99, 235, 0.18);
}

.tool-box .tool .icon-box {
  width: 25%;
  border-radius: 20px 0 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tool-box .tool .icon-box .icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
}

.tool-box .tool .icon-box .icon .image-slot {
  width: 100%;
  min-height: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tool-box .tool .info-box {
  display: flex;
  flex-direction: column;
  width: 75%;
  border-radius: 0 20px 20px 0;
  padding: 0 2%;
  justify-content: center;
  align-items: start;
}

.tool-box .tool .info-box p {
  margin: 0;
}

.info-title {
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 4px;
}

.info-des {
  font-size: 14px;
  line-height: 14px;
  padding-top: 4px;
  font-weight: 400;
  color: #64748b;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 暗黑模式适配 */
.svgtext {
  fill: #000;
}
</style>
