<script setup lang="ts">
const cardInfo = [
  {
    header: '我喜欢的歌手',
    info: {
      tag: 'p',
      text: ['拉德温普斯', 'RADWIMPS,ラッドウインプス', '日本摇滚乐队，简称RAD，由主唱及吉他手野田洋次郎、吉他手桑原彰、贝斯手武田祐介和鼓手山口智史组成。'],
    },
    footer: 'Radwimps',
  },
  {
    header: '我去过的地方',
    info: {
      tag: 'p',
      text: ['北京 上海 杭州 苏州 南京 成都 石家庄 太原 广州 常州 西安 拉萨 沈阳 秦皇岛 天津 合肥'],
    },
    footer: 'Trip',
  },
  {
    header: '关于世界的运行',
    info: {
      tag: 'p',
      text: ['世界运行，在我的思考中就是保存与变化'],
    },
    footer: 'About World',
  },
]
</script>

<template>
  <div h-full class="thoughts">
    <h1>Thoughts</h1>
    <div class="card-box">
      <el-card v-for="(i, iIndex) in cardInfo" :key="iIndex" style="width: 220px; " class="card" shadow="hover">
        <!-- eslint-disable-next-line vue/no-useless-template-attributes -->
        <template #header class="card-header">
          <div>
            <span>{{ i.header }}</span>
          </div>
        </template>
        <div class="textbox">
          <el-text v-for="(j, jIndex) in i.info.text" :key="jIndex" :tag="i.info.tag">
            {{ j }}
          </el-text>
        </div>
        <template #footer>
          {{ i.footer }}
        </template>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss">
.thoughts {
  width: 80%;

  .card-box {
    display: flex;
    width: 100%;

    .card {
      margin: 14px 20px;
      cursor: pointer;
      border-radius: 10px;
      .ep-card__header {
        width: 100%;
        box-sizing: border-box;
        background-color: rgb(0 88 255 / 81%);
        color: white;
      }
      &:hover {
        transform: scale(1.02);
        // outline: 1px solid #e3e3e3;
      }

      .textbox {
        display: flex;
        flex-direction: column;
        text-align: left;
        justify-content: start;
        align-items: center;
        height: 180px;
        width: 140px;
        p {
          width: 100%;
        }
      }
    }
  }
}
</style>
