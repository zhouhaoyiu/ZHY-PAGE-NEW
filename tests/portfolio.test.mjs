import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { projects } from '../src/data/portfolio.ts'
import { siteAssets, sitePages } from '../src/data/site-scope.ts'

test('portfolio contains exactly the three seismic projects', () => {
  assert.deepEqual(
    projects.map((project) => project.title),
    ['CSPP', '地震数据库', '历史地震查询'],
  )
  assert.equal(new Set(projects.map((project) => project.id)).size, 3)
  for (const project of projects) {
    assert.ok(project.description && project.subtitle && project.details.length)
    assert.equal('status' in project, false)
    assert.equal('detail' in project, false)
    if (project.url) assert.equal(new URL(project.url).protocol, 'https:')
  }
})

test('site builds only research pages and their assets', () => {
  assert.deepEqual(sitePages, [
    'index',
    'nav/Home',
    'nav/CaseStudy',
    'nav/AboutMe',
    'nav/ContactMe',
  ])
  assert.deepEqual(siteAssets, [
    'favicon.svg',
    'research/waveform.json',
    'research/waveform-metadata.json',
    'research/waveform.png',
  ])
  for (const file of siteAssets)
    assert.ok(
      readFileSync(new URL('../public/' + file, import.meta.url)).length,
    )
})

test('published copy excludes legacy projects and editorial disclaimers', () => {
  const files = [
    ...sitePages.map((name) => 'src/pages/' + name + '.vue'),
    'src/components/ProjectList.vue',
    'src/components/layouts/BaseHeader.vue',
    'src/components/layouts/BaseSide.vue',
    'src/data/portfolio.ts',
    'src/App.vue',
    'index.html',
  ]
  for (const file of files) {
    const text = readFileSync(new URL('../' + file, import.meta.url), 'utf8')
    assert.doesNotMatch(
      text,
      /供水|抄表|工具箱|相册|当前公开仓库|尚未发布|以仓库中的发布说明为准|不代表|非个人发表列表|卡片样式|把研究问题写进代码/,
      file,
    )
  }
})
