<script setup lang="ts">
import {
  ArrowDown,
  ArrowRight,
  Message,
  TopRight,
} from '@element-plus/icons-vue'
</script>
<template>
  <div class="portfolio-home">
    <section id="overview" class="research-hero" aria-labelledby="hero-name">
      <WaveformLens />
      <div class="hero-copy">
        <p class="section-label">SEISMOLOGY</p>
        <h1 id="hero-name">Haoyu <span>Zhou.</span></h1>
        <p class="hero-chinese">周浩宇</p>
        <p class="hero-lead">地震信号处理<br />与 P 波拾取</p>
        <p class="hero-summary">
          研究连续地震波形，整理全球强震记录，开发历史地震查询工具。
        </p>
        <div class="hero-actions">
          <a class="button-link" href="#work">研究项目 <ArrowDown /></a>
          <a
            class="text-link"
            href="https://github.com/zhouhaoyiu"
            target="_blank"
            rel="noreferrer"
            >GitHub <TopRight
          /></a>
        </div>
      </div>
    </section>
    <section id="work" class="work-band">
      <div class="content-band">
        <div class="section-intro">
          <div>
            <p class="section-label">PROJECTS</p>
            <h2>研究项目</h2>
          </div>
        </div>
        <ProjectList />
      </div>
    </section>
    <section id="about" class="content-band about-band">
      <div>
        <p class="section-label">ABOUT</p>
        <h2>关于我</h2>
      </div>
      <div>
        <p>
          我主要做地震波形处理与 P
          波拾取研究。日常工作包括整理强震记录、编写数据处理程序，以及查询和分析历史地震。
        </p>
        <router-link class="text-link" to="/nav/AboutMe"
          >研究内容 <ArrowRight
        /></router-link>
      </div>
    </section>
    <section id="contact" class="contact-band">
      <div class="content-band">
        <p class="section-label">CONTACT</p>
        <h2>联系</h2>
        <a class="text-link" href="mailto:648921469@qq.com"
          ><Message />648921469@qq.com</a
        >
      </div>
    </section>
  </div>
</template>
<style scoped>
.research-hero {
  position: relative;
  min-height: 0;
  height: min(860px, calc(100svh - 80px));
  background: var(--theme-bg-surface);
  overflow: hidden;
  border-bottom: 5px solid var(--teal);
}
.hero-copy {
  position: relative;
  z-index: 2;
  width: 48%;
  max-width: 740px;
  padding-left: 48px;
  top: 50%;
  transform: translateY(-40%);
  pointer-events: none;
}
.hero-copy a {
  pointer-events: auto;
}
.hero-copy h1 {
  font:
    800 72px/1.1 'SFMono-Regular',
    Consolas,
    monospace;
  margin-bottom: 8px;
  white-space: nowrap;
}
.hero-copy h1 span {
  color: var(--accent);
}
.hero-chinese {
  font-size: 22px;
  margin-bottom: 18px;
  font-weight: 650;
}
.hero-lead {
  font-size: 26px;
  line-height: 1.5;
  font-weight: 650;
  margin-bottom: 14px;
}
.hero-summary {
  font-size: 15px;
  max-width: 440px;
  line-height: 1.9;
  color: var(--theme-text-secondary);
  margin-bottom: 24px;
}
.hero-actions {
  display: flex;
  gap: 28px;
  align-items: center;
}
.content-band {
  max-width: 1320px;
  margin: auto;
  padding: 64px 48px;
  scroll-margin-top: 100px;
}
.section-intro {
  margin-bottom: 38px;
}
.section-intro h2 {
  margin-bottom: 0;
}
.work-band {
  background: var(--theme-bg-surface);
}
.about-band {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 64px;
  border-top: 1px solid var(--theme-border);
}
.about-band > div > p:not(.section-label) {
  max-width: 56ch;
  color: var(--theme-text-secondary);
  line-height: 1.9;
}
.contact-band {
  background: var(--theme-bg-surface-active);
  scroll-margin-top: 100px;
}
@media (min-width: 1700px) {
  .hero-copy {
    padding-left: max(64px, calc((100vw - 1500px) / 2));
    max-width: none;
  }
  .hero-copy h1 {
    font-size: 84px;
  }
}
@media (max-width: 1100px) {
  .hero-copy {
    padding-left: 32px;
  }
  .hero-copy h1 {
    font-size: 54px;
  }
  .hero-lead {
    font-size: 22px;
  }
  .hero-summary {
    font-size: 14px;
  }
  .content-band {
    padding: 52px 32px;
  }
}
@media (max-width: 800px) {
  .research-hero {
    height: calc(100svh - 70px);
  }
  .hero-copy {
    width: 100%;
    max-width: none;
    top: 116px;
    transform: none;
    padding: 0 24px;
  }
  .hero-copy h1 {
    font-size: 52px;
  }
  .hero-chinese {
    font-size: 17px;
    margin-bottom: 12px;
  }
  .hero-lead {
    font-size: 22px;
    margin-bottom: 12px;
  }
  .hero-summary {
    max-width: 540px;
  }
  .content-band {
    padding: 44px 24px;
  }
  .section-intro {
    margin-bottom: 26px;
  }
  .section-intro h2,
  .about-band h2,
  .contact-band h2 {
    font-size: 26px;
  }
  .about-band {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
@media (max-width: 480px) {
  .hero-copy {
    top: 104px;
    padding: 0 20px;
  }
  .hero-copy h1 {
    font-size: 42px;
  }
  .hero-copy .section-label {
    font-size: 9px;
    margin-bottom: 8px;
  }
  .hero-lead {
    font-size: 19px;
  }
  .hero-summary {
    font-size: 12px;
    margin-bottom: 14px;
    max-width: 330px;
  }
  .hero-actions {
    gap: 22px;
  }
  .hero-actions a {
    font-size: 12px;
    min-height: 40px;
  }
  .hero-chinese {
    margin-bottom: 8px;
  }
  .content-band {
    padding: 36px 20px;
  }
}
@media (max-width: 360px) {
  .hero-copy h1 {
    font-size: 38px;
  }
  .hero-lead {
    font-size: 18px;
  }
}
@media (max-width: 800px) and (max-height: 760px) {
  .hero-copy {
    top: 94px;
  }
  .hero-summary {
    display: none;
  }
  .hero-copy h1 {
    font-size: 38px;
  }
  .hero-lead {
    font-size: 18px;
    margin-bottom: 8px;
  }
  .hero-chinese {
    margin-bottom: 6px;
    font-size: 16px;
  }
}
@media (max-width: 800px) and (max-height: 600px) {
  .hero-copy {
    top: 90px;
    width: 100%;
    padding-left: 18px;
  }
  .hero-copy h1 {
    font-size: 32px;
  }
  .hero-lead,
  .hero-summary {
    display: none;
  }
  .hero-actions {
    gap: 14px;
  }
}
@media (min-width: 801px) and (max-height: 800px) {
  .hero-copy h1 {
    font-size: 54px;
  }
}
@media (min-width: 600px) and (max-height: 600px) {
  .hero-copy {
    top: 110px;
    width: 48%;
    padding-left: 24px;
    transform: none;
  }
  .hero-copy h1 {
    font-size: 36px;
  }
  .hero-copy .section-label {
    font-size: 9px;
    margin-bottom: 10px;
  }
  .hero-chinese {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .hero-lead,
  .hero-summary {
    display: none;
  }
  .hero-actions {
    gap: 16px;
  }
  .hero-actions a {
    font-size: 12px;
    min-height: 38px;
  }
}
</style>
