<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const toolBox = [
  {
    icon: 'uuid',
    title: 'UUID生成工具',
    description: 'UUID在线生成工具',
    to: '/nav/Tools/uuid',
    disable: false,
  },
  {
    icon: '高',
    title: '高考倒计时',
    description: '高考倒计时工具',
    to: '/nav/Tools/gaokao',
    disable: false,
  },
  {
    icon: '键',
    title: '键盘',
    description: 'html模拟的键盘',
    to: '/nav/Tools/keyboard',
    disable: false,
  },
  {
    icon: '中',
    title: '中国传统色彩',
    description: '中国传统色彩大全',
    to: '/nav/Tools/colorChina',
    disable: false,
  },
]
const refToolBox = ref(toolBox)

function handleGoTool(url: string) {
  router.push(url)
}
</script>

<template>
  <div class="little-tools">
    <h1>Little Tools</h1>
    <div class="tool-box">
      <div v-for="(o, oIndex) in refToolBox" :key="oIndex" class="tool" @click="handleGoTool(o.to)">
        <div class="icon-box">
          <el-image class="icon" src="" alt="">
            <template #error>
              <div class="image-slot">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <!-- 圆角矩形框里是uuid字符 -->
                  <!-- <rect x="0" y="0" width="24" height="24" rx="4" ry="4" fill="none" stroke="currentColor" stroke-width="2" /> -->
                  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="8px" fill="currentColor">{{ o.icon }}</text>
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
  </div>
</template>

<style scoped lang="scss">
.little-tools {
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .tool-box {
    display: flex;
    flex-wrap: wrap;

    .tool {
      display: flex;
      box-shadow: var(--tool-bg-shadow);
      margin: 14px 20px;
      width: 280px;
      height: 80px;
      border: 1px solid #e2e8f080;
      transition: all 0.2s ease-out;
      background: var(--tool-bg-color);
      border-radius: 10px;

      &:hover {
        transform: scale(1.05);
        outline: 1px solid #000;
      }

      cursor: pointer;

      .icon-box {
        // background-color: #000;
        width: 25%;
        border-radius: 10px 0 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          background-color: pink;
          width: 48px;
          height: 48px;
          border-radius: 10px;

          .image-slot {
            width: 100%;
            height: 100%;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .info-box {
        display: flex;
        flex-direction: column;
        width: 75%;
        border-radius: 0 10px 10px 0;
        padding: 0 2%;
        justify-content: center;
        align-items: start;

        // background-color: blanchedalmond;
        p {
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
          color: gray;
          font-weight: 400;
          color: #9aabb8;
          word-break: keep-all;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
