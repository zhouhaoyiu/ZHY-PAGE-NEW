<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { runRegex } from '~/utils/regex-task'
const regex = ref('')
const text = ref('')
const result = ref('')
const count = ref(0)
const elapsed = ref(0)
const busy = ref(false)
const feedback = ref('')
const global = ref(true)
const ignoreCase = ref(true)
const multiline = ref(true)
let task: ReturnType<typeof runRegex> | undefined
let revision = 0
async function match() {
  task?.cancel()
  const current = ++revision
  busy.value = true
  feedback.value = ''
  result.value = ''
  count.value = 0
  elapsed.value = 0
  try {
    task = runRegex(
      {
        pattern: regex.value,
        text: text.value,
        flags:
          (global.value ? 'g' : '') +
          (ignoreCase.value ? 'i' : '') +
          (multiline.value ? 'm' : ''),
      },
      () =>
        new Worker(new URL('../../../utils/regex.worker.ts', import.meta.url), {
          type: 'module',
        }),
    )
    const response = await task.promise
    if (current !== revision) return
    result.value = response.result
    count.value = response.count
    elapsed.value = response.elapsed
    feedback.value = count.value
      ? '匹配完成。结果最多显示 20,000 字符。'
      : '没有匹配项。'
  } catch (error) {
    if (current === revision)
      feedback.value = error instanceof Error ? error.message : '匹配失败。'
  } finally {
    if (current === revision) busy.value = false
  }
}
function reset() {
  revision++
  task?.cancel()
  busy.value = false
  regex.value = ''
  text.value = ''
  result.value = ''
  count.value = 0
  elapsed.value = 0
  feedback.value = ''
  global.value = true
  ignoreCase.value = true
  multiline.value = true
}
function example() {
  regex.value = '[0-9]+'
  text.value = '123abc456def789ghi'
  global.value = true
  void match()
}
async function copy() {
  try {
    await navigator.clipboard.writeText(result.value)
    feedback.value = '已复制。'
  } catch {
    feedback.value = '复制失败，可手动选择结果。'
  }
}
onBeforeUnmount(() => {
  revision++
  task?.cancel()
})
</script>
<template>
  <section class="page-shell">
    <header class="page-header">
      <p class="page-eyebrow">REGEX LAB</p>
      <h1 class="page-title">正则测试</h1>
    </header>
    <div class="regex-layout">
      <div>
        <label for="regex-input">正则表达式</label
        ><textarea
          id="regex-input"
          v-model="regex"
          rows="3"
          maxlength="2000"
          spellcheck="false"
          placeholder="[0-9]+"
        />
        <fieldset>
          <legend>匹配选项</legend>
          <label><input v-model="global" type="checkbox" />全局 (g)</label
          ><label
            ><input v-model="ignoreCase" type="checkbox" />忽略大小写 (i)</label
          ><label><input v-model="multiline" type="checkbox" />多行 (m)</label>
        </fieldset>
        <label for="text-input">测试文本</label
        ><textarea
          id="text-input"
          v-model="text"
          rows="8"
          maxlength="100000"
          spellcheck="false"
        />
        <div class="actions">
          <button class="button-link" :disabled="busy" @click="match">
            {{ busy ? '计算中' : '测试匹配' }}</button
          ><button class="plain-button" @click="reset">重置</button
          ><button class="plain-button" @click="example">示例</button>
        </div>
      </div>
      <div>
        <label for="regex-result">匹配结果</label
        ><textarea id="regex-result" :value="result" readonly rows="15" />
        <div class="result-stats">
          <span>匹配 {{ count }} 项</span
          ><span>{{ elapsed.toFixed(3) }} ms</span
          ><button v-if="result" class="plain-button" @click="copy">
            复制结果
          </button>
        </div>
        <p role="status" aria-live="polite">{{ feedback }}</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.regex-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
label {
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
}
textarea {
  display: block;
  resize: vertical;
  width: 100%;
  padding: 12px;
  border: 1px solid var(--theme-border);
  background: var(--theme-bg-surface);
  color: var(--theme-text-primary);
  font: 14px/1.6 monospace;
  border-radius: 4px;
}
fieldset {
  margin: 20px 0;
  padding: 12px;
  border: 1px solid var(--theme-border);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
fieldset label {
  margin: 0;
}
legend {
  font-size: 12px;
}
.actions,
.result-stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
  font-size: 13px;
}
.plain-button {
  padding: 8px 12px;
  color: var(--theme-text-primary);
  border: 1px solid var(--theme-border);
  background: var(--theme-bg-surface);
}
[role='status'] {
  font-size: 13px;
  margin-top: 16px;
  color: var(--teal);
}
@media (max-width: 700px) {
  .regex-layout {
    grid-template-columns: 1fr;
  }
}
</style>
