<script lang="ts" setup>
const imgWX = '/wx.jpg'
const imageWXUrl = new URL(`${imgWX}`, import.meta.url).href
const imgQQ = '/qq.jpg'
const imgQQUrl = new URL(`${imgQQ}`, import.meta.url).href
</script>

<template>
  <div>
    <h1>Contact Me</h1>
    <p>
      Feel free to contact me via email:
      <el-button plain>
        <a href="mailto:648921469@qq.com">
          Send Email To 648921469@qq.com
        </a>
      </el-button>
    </p>
    <p>
      Wechat
    </p>
    <el-image
      style="width: 250px; height: 300px" :src="imageWXUrl" :preview-src-list="[imageWXUrl]"
      :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" show-progress preview-teleported fit="contain"
    />
    <p>
      QQ
    </p>
    <el-image
      style="width: 200px; height: 300px;" :src="imgQQUrl" :preview-src-list="[imgQQUrl]"
      :max-scale="7" :min-scale="0.2" show-progress preview-teleported fit="contain"
    />

    <p>
      Github: <a target="_blank" href="https://www.github.com/zhouhaoyiu">
        <div style=" display: flex; align-items: center;justify-content: center;">
          <div i-ri-github-fill style="padding-right: 15px;" />
          www.github.com/zhouhaoyiu
        </div>
      </a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-size: 20px;
  margin: 10px;
}
</style>
