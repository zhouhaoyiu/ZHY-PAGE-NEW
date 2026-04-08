<script setup lang="ts">
const quickLinks = [
  {
    title: 'Case Study',
    description: 'View project context, decisions and outcomes.',
    to: '/nav/CaseStudy',
  },
  {
    title: 'Tech Stack',
    description: 'See the tools and workflow I use in production.',
    to: '/nav/TechStack',
  },
  {
    title: 'Articles',
    description: 'Read notes on UI, engineering and product thinking.',
    to: '/nav/Articles',
  },
  {
    title: 'Open Source',
    description: 'Track reusable work and practical contributions.',
    to: '/nav/OpenSource',
  },
  {
    title: 'Services',
    description: 'Check collaboration scope and delivery options.',
    to: '/nav/Services',
  },
  {
    title: 'Now Building',
    description: 'Follow what is in progress right now.',
    to: '/nav/NowBuilding',
  },
]
</script>

<template>
  <section class="home-page">
    <section class="home-hero surface-panel">
      <div class="hero-copy">
        <p class="eyebrow">
          Independent software developer
        </p>
        <h1>
          Hello.
        </h1>
        <p class="lead">
          My name is Haoyu Zhou. I build clean, practical web experiences and experiment with tools that make creation faster.
        </p>

        <div class="meta-row">
          <span class="meta-pill">Taiyuan, Shanxi</span>
          <span class="meta-pill">Open source</span>
          <span class="meta-pill">Full-stack</span>
        </div>

        <div class="action-row">
          <a class="action-link primary" href="https://github.com/zhouhaoyiu/" target="_blank" rel="noreferrer">
            View GitHub
          </a>
          <a class="action-link secondary" href="mailto:knight9z@vip.qq.com">
            Contact me
          </a>
        </div>

        <p class="body-copy">
          My Chinese name is 周浩宇.
          <a
            href="https://fanyi.baidu.com/translate?aldtype=16047&query=%E5%91%A8%E6%B5%A9%E5%AE%87&keyfrombaidu&smartresult=dict&lang=auto2zh#zh/en/%E5%91%A8%E6%B5%A9%E5%AE%87"
            target="_blank"
            rel="noreferrer"
          >
            Pronunciation guide
          </a>
        </p>
      </div>

      <div class="hero-visual">
        <div class="visual-card">
          <div class="visual-orbit" />
          <img src="./zhy.svg" alt="ZHY Signature" class="signature-svg">
        </div>

        <div class="signal-grid">
          <div>
            <strong>Focus</strong>
            <span>Interfaces with strong structure</span>
          </div>
          <div>
            <strong>Style</strong>
            <span>Minimal, but with character</span>
          </div>
          <div>
            <strong>Reach</strong>
            <span>GitHub and email first</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block surface-panel quick-entry">
      <header class="section-header">
        <p class="section-kicker">
          Explore
        </p>
        <h2>快速入口</h2>
      </header>
      <div class="quick-grid">
        <router-link v-for="item in quickLinks" :key="item.title" :to="item.to" class="quick-card">
          <strong>{{ item.title }}</strong>
          <span>{{ item.description }}</span>
        </router-link>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.home-hero {
  width: 100%;
  min-height: auto;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  gap: clamp(20px, 3vw, 42px);
  align-items: start;
  padding: clamp(16px, 2vw, 22px);
}

.hero-copy {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--theme-text-eyebrow);
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: var(--theme-text-primary);
}

.lead {
  max-width: 42rem;
  margin: 16px 0 0;
  color: var(--theme-text-secondary);
  font-size: clamp(1.05rem, 1.25vw, 1.18rem);
  line-height: 1.75;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}

.meta-pill {
  padding: 7px 12px;
  border-radius: 999px;
  background: var(--theme-bg-body);
  border: 1px solid var(--theme-border);
  color: var(--theme-text-primary);
  font-size: 0.88rem;
  font-weight: 600;
}

.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.action-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  min-height: 42px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid transparent;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.action-link.primary {
  background: var(--theme-primary-btn-bg);
  color: var(--theme-primary-btn-text);
  box-shadow: var(--theme-shadow-sm);
}

.action-link.secondary {
  background: var(--theme-bg-surface);
  color: var(--theme-text-primary);
  border-color: var(--theme-border);
}

.body-copy {
  margin: 18px 0 0;
  max-width: 42rem;
  color: var(--theme-text-secondary);
  font-size: 1rem;
  line-height: 1.75;
}

.hero-visual {
  position: relative;
  display: grid;
  gap: 12px;
}

.visual-card {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 360px;
  border-radius: 18px;
  overflow: hidden;
  background: var(--theme-bg-body);
  border: 1px solid var(--theme-border);
  box-shadow: var(--theme-shadow-md);
}

.visual-orbit {
  position: absolute;
  inset: 12px;
  border-radius: 14px;
  border: 1px dashed var(--theme-border);
  background: transparent;
}

.signature-svg {
  position: relative;
  z-index: 1;
  width: min(100%, 480px);
  height: auto;
}

.signal-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.signal-grid div {
  padding: 12px 12px;
  border-radius: 12px;
  background: var(--theme-bg-surface);
  border: 1px solid var(--theme-border);
  box-shadow: var(--theme-shadow-sm);
}

.signal-grid strong,
.signal-grid span {
  display: block;
}

.signal-grid strong {
  margin-bottom: 4px;
  color: var(--theme-text-primary);
}

.signal-grid span {
  color: var(--theme-text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

.section-block {
  padding: 18px;
}

.section-header {
  margin-bottom: 12px;
}

.section-kicker {
  margin: 0 0 6px;
  color: var(--theme-text-tertiary);
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
}

.section-header h2 {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: var(--theme-text-primary);
}

.quick-entry {
  padding: 18px;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
}

.quick-card {
  border: 1px solid var(--theme-border);
  border-radius: 14px;
  background: var(--theme-bg-body);
  padding: 14px;
  text-decoration: none;
}

.quick-card strong {
  display: block;
  color: var(--theme-text-primary);
}

.quick-card span {
  display: block;
  margin-top: 8px;
  color: var(--theme-text-secondary);
  line-height: 1.55;
}

@media (max-width: 1080px) {
  .home-hero {
    grid-template-columns: 1fr;
  }

  .visual-card {
    min-height: 320px;
  }
}

@media (max-width: 720px) {
  .home-hero {
    min-height: auto;
    padding: 8px 0;
  }

  .visual-card {
    min-height: 300px;
    border-radius: 24px;
  }

  .signal-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .home-page {
    gap: 14px;
  }

  .home-hero {
    padding: 12px;
    gap: 14px;
  }

  .meta-row,
  .action-row {
    gap: 8px;
  }

  .meta-pill,
  .action-link {
    min-height: 38px;
    padding-inline: 12px;
  }

  .visual-card {
    min-height: 240px;
    border-radius: 16px;
  }

  .signal-grid {
    grid-template-columns: 1fr;
  }

  .section-block {
    padding: 14px;
  }

  .quick-entry {
    padding: 14px;
  }

  .quick-grid {
    grid-template-columns: 1fr;
  }
}
</style>
