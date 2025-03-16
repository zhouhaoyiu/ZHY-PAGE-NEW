<script lang='ts' setup>
import { ElMessageBox } from 'element-plus'

interface project {
  icon: string
  name: string
  url: string
  description: string
  fullDescription: string
}
const projectBox: project[] = [
  {
    icon: 'T',
    name: 'tygs',
    description: '太原供水集团水表井数据库',
    url: 'https://github.com/zhouhaoyiu/tygs',
    fullDescription: '太原供水集团水表井数据库是用于存储展示太原供水集团城北有限公司各种水表井的数据库，请使用pnpm或yarn进行包管理',
  },
  {
    icon: 'ZHY',
    name: '个人主页',
    description: '周浩宇的个人主页',
    url: 'https://github.com/zhouhaoyiu/ZHY-PAGE-NEW',
    fullDescription: '我的个人主页',
  },
]

function getHashColor(hash: string) {
  const color = hash.split('').reduce((acc, cur) => {
    return acc + cur.charCodeAt(0)
  }, Math.random() * 360)
  return {
    backgroundColor: `hsl(${color % 360}, 100%, 90%)`,
  }
}

function openDetail(f: string) {
  ElMessageBox.alert(f, '详细介绍', {
    confirmButtonText: '关闭',
  })
}
</script>

<template>
  <div class="project-board">
    <h1>ZHY'S Github Projects</h1>
    <div class="project-box">
      <div v-for="(i, index) in projectBox" :key="index" class="project">
        <div class="info-box">
          <div class="icon-box">
            <el-image class="icon" src="" alt="" :style="getHashColor(i.icon)">
              <template #error>
                <div class="image-slot">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <!-- 圆角矩形框里是uuid字符 -->
                    <!-- <rect x="0" y="0" width="24" height="24" rx="4" ry="4" fill="none" stroke="currentColor" stroke-width="2" /> -->
                    <text
                      x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="8px"
                      fill="currentColor"
                    >{{ i.icon }}</text>
                  </svg>
                </div>
              </template>
            </el-image>
          </div>
          <div class="info-box">
            <p class="info-title">
              {{ i.name }}
            </p>
            <p class="info-des">
              {{ i.description }}
            </p>
          </div>
        </div>
        <div class="link-box">
          <a v-if="i.url" :href="i.url" target="_blank">项目首页</a>
          <a v-if="i.fullDescription" @click="openDetail(i.fullDescription)">详细介绍</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.project-board {
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .project-box {
    display: flex;
    flex-wrap: wrap;

    .project {
      display: flex;
      flex-direction: column;
      box-shadow: var(--tool-bg-shadow);
      margin: 14px 20px;
      width: 280px;
      height: 74px;
      padding: 10px 5px;
      border: 1px solid #e2e8f080;
      transition: all 0.2s ease-out;
      background: var(--tool-bg-color);
      border-radius: 10px;
      cursor: pointer;
      .info-box {
        display: flex;
        flex-direction: row;
        .icon-box {
          width: 25%;
          border-radius: 10px 0 0 10px;
          display: flex;
          justify-content: center;
          align-items: start;

          .icon {
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
          padding: 0 2%;
          justify-content: center;
          align-items: start;

          p {
            margin: 0;
          }

          .info-title {
            font-size: 16px;
            line-height: 16px;
            padding-bottom: 4px;
          }

          .info-des {
            font-size: 12px;
            line-height: 12px;
            padding-top: 6px;
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
      .link-box {
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
      }
    }
  }
}
</style>
