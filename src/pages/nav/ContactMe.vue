<script lang="ts" setup>
const imgWX = '/wx.jpg'
const imageWXUrl = new URL(`${imgWX}`, import.meta.url).href
const imgQQ = '/qq.jpg'
const imgQQUrl = new URL(`${imgQQ}`, import.meta.url).href

function openMail() {
  window.location.href = 'mailto:648921469@qq.com'
}
</script>

<template>
  <section class="page-shell contact-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Reach Out
      </p>
      <h1 class="page-title">
        Contact Me
      </h1>
      <p class="page-description">
        保留了原有微信和 QQ 二维码，同时把联系方式整理成更清晰的卡片布局。
      </p>
    </header>

    <div class="contact-grid">
      <div class="surface-panel contact-card contact-card--email">
        <p class="card-label">
          Email
        </p>
        <h2>直接发送邮件</h2>
        <p>
          如果你想快速联系我，邮件是最直接的方式。
        </p>
        <el-button type="primary" class="email-btn" @click="openMail">
          Send Email To 648921469@qq.com
        </el-button>
      </div>

      <div class="surface-panel contact-card">
        <p class="card-label">
          WeChat
        </p>
        <el-image
          class="contact-image" :src="imageWXUrl" :preview-src-list="[imageWXUrl]"
          :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" show-progress preview-teleported fit="contain"
        />
      </div>

      <div class="surface-panel contact-card">
        <p class="card-label">
          QQ
        </p>
        <el-image
          class="contact-image" :src="imgQQUrl" :preview-src-list="[imgQQUrl]"
          :max-scale="7" :min-scale="0.2" show-progress preview-teleported fit="contain"
        />
      </div>

      <div class="surface-panel contact-card contact-card--social">
        <p class="card-label">
          Github
        </p>
        <a class="social-link" target="_blank" rel="noreferrer" href="https://www.github.com/zhouhaoyiu">
          <div i-ri-github-fill />
          <span>www.github.com/zhouhaoyiu</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-page {
  min-height: 100%;
  
  padding-right: 4px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.contact-card {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-card--email,
.contact-card--social {
  justify-content: center;
}

.card-label {
  margin: 0;
  color: #0f766e;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.contact-card h2 {
  margin: 0;
  color: var(--ep-text-color-primary);
}

.contact-card p {
  margin: 0;
  color: #475569;
  line-height: 1.7;
}

.contact-image {
  width: 100%;
  max-width: 320px;
  align-self: center;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 18px;
  text-decoration: none;
  color: var(--ep-text-color-primary);
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.16);
}

.social-link div {
  font-size: 1.2rem;
}

.contact-page :deep(.el-button) {
  width: fit-content;
}

.email-btn {
  min-height: 42px;
}

.contact-page :deep(.ep-button--primary) {
  color: #fff;
}
</style>
