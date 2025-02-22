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
      text: [`世界可以被理解为一种物质存储及其本身变化的动态系统。<br>
      在物质层面，原子和分子是构成物质的基本单元，它们通过不同的排列组合和相互作用。<br>
      这些基本单元本身也承载着信息，如电子的排布决定了元素的性质，而分子的结构则决定了化合物的特性。<br>
      这种信息的存储与物质的变化紧密相连，是物质世界复杂多样性的基础。
`],
    },
    footer: 'About World',
  },
]
</script>

<template>
  <div h-full class="thoughts">
    <h1>Thoughts</h1>
    <div class="card-box">
      <el-card v-for="(i, iIndex) in cardInfo" :key="iIndex" style="width: 270px; " class="card" shadow="hover">
        <!-- eslint-disable-next-line vue/no-useless-template-attributes -->
        <template #header class="card-header">
          <div>
            <span>{{ i.header }}</span>
          </div>
        </template>
        <div class="textbox">
          <!-- vue/no-v-text-v-html-on-component -->
          <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
          <el-text v-for="(j, jIndex) in i.info.text" :key="jIndex" :tag="i.info.tag" v-html="j" />
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

        // width: 140px;
        p {
          width: 100%;
        }
      }
    }
  }
}
</style>
