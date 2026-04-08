<script lang='ts' setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

// 用户输入的正则表达式
const regex = ref('')
// 用户输入的文本
const text = ref('')
// 匹配结果
const result = ref('') as any
// 匹配结果的数量
const resultCount = ref(0)
// 匹配结果的group
const resultGroup = ref('') as any
// 正则表达式选项
const regexOptions = ref({
  global: true,
  ignoreCase: true,
  multiline: true,
})
// 执行时间（毫秒）
const executionTime = ref(0)
// 每1000字符执行时间（毫秒/千字符）
const dpkTime = ref(0)

function match() {
  try {
    // 根据用户选择构建正则表达式选项
    let flags = ''
    if (regexOptions.value.global)
      flags += 'g'
    if (regexOptions.value.ignoreCase)
      flags += 'i'
    if (regexOptions.value.multiline)
      flags += 'm'

    const reg = new RegExp(regex.value, flags)
    const startTime = performance.now()

    const res = text.value.match(reg)

    // 结束计时并计算执行时间
    const endTime = performance.now()
    executionTime.value = Number.parseFloat((endTime - startTime).toFixed(10))
    // 计算每1000字符执行时间（DPK）
    const textLength = text.value.length
    if (textLength > 0) {
      dpkTime.value = Number.parseFloat(((executionTime.value * 1000) / textLength).toFixed(2))
    }
    else {
      dpkTime.value = 0
    }

    result.value = res
    resultCount.value = res?.length || 0
    resultGroup.value = res?.groups || '' // 被命名的捕获组 理论上结果
  }
  catch (e) {
    console.error(e)
    ElMessage.error((e as any).message)
    result.value = ''
    executionTime.value = 0
    dpkTime.value = 0
  }
}

function reset() {
  regex.value = ''
  text.value = ''
  result.value = ''
  resultCount.value = 0
  resultGroup.value = ''
  executionTime.value = 0
  dpkTime.value = 0
  regexOptions.value = {
    global: true,
    ignoreCase: true,
    multiline: true,
  }
}

function example() {
  regex.value = '[0-9]+'
  text.value = '123abc456def789ghi'
  regexOptions.value.global = true
  match()
  // expect: [123, 456, 789]
}

function copyResult() {
  if (result.value) {
    navigator.clipboard.writeText(result.value.toString())
    ElMessage.success('已复制到剪贴板')
  }
}
</script>

<template>
  <section class="page-shell regex-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Regex Lab
      </p>
      <h1 class="page-title">
        regexDoctor
      </h1>
      <p class="page-description">
        正则测试器改成双栏结构，输入、选项和结果更清晰。
      </p>
    </header>

    <div class="content surface-panel">
      <div class="input-section">
        <div class="input-group">
          <label for="regex-input">正则表达式</label>
          <el-input
            id="regex-input"
            v-model="regex"
            placeholder="请输入正则表达式，例如：[0-9]+"
            :autosize="{ minRows: 3 }"
            type="textarea"
            class="input-box"
          />
        </div>

        <div class="options-group">
          <label>匹配选项</label>
          <div class="options-container">
            <el-checkbox v-model="regexOptions.global" label="全局匹配 (g)" />
            <el-checkbox v-model="regexOptions.ignoreCase" label="忽略大小写 (i)" />
            <el-checkbox v-model="regexOptions.multiline" label="多行模式 (m)" />
          </div>
        </div>

        <div class="input-group">
          <label for="text-input">测试文本</label>
          <el-input
            id="text-input"
            v-model="text"
            placeholder="请输入要测试的文本"
            :autosize="{ minRows: 5 }"
            type="textarea"
            class="input-box"
          />
        </div>

        <div class="button-group">
          <el-button type="primary" @click="match">
            测试匹配
          </el-button>
          <el-button @click="reset">
            重置
          </el-button>
          <el-button @click="example">
            示例
          </el-button>
        </div>
      </div>

      <div class="result-section">
        <div class="result-header">
          <h3>匹配结果</h3>
          <el-button v-if="result" type="primary" link @click="copyResult">
            复制结果
          </el-button>
        </div>

        <div class="result-content">
          <el-input
            v-model="result"
            type="textarea"
            :autosize="{ minRows: 5 }"
            readonly
            class="result-box"
          />

          <div class="stats">
            <div v-if="resultCount > 0" class="stat-item">
              <span class="label">匹配数量：</span>
              <span class="value">{{ resultCount }}</span>
            </div>
            <div class="stat-item">
              <span class="label">执行时间：</span>
              <span class="value">{{ executionTime }} 毫秒</span>
            </div>
            <div v-if="dpkTime > 0" class="stat-item">
              <span class="label">每千字符时间：</span>
              <span class="value">{{ dpkTime }} 毫秒/千字符</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.regex-page {
  width: 100%;
  min-height: 100%;
  
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.input-section,
.result-section {
  background: rgba(255, 255, 255, 0.72);
  border-radius: 24px;
  padding: 22px;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.input-group,
.options-group {
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--ep-text-color-primary);
  }
}

.input-box {
  width: 100%;
  font-family: monospace;
}

.options-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    margin: 0;
    color: var(--ep-text-color-primary);
  }
}

.result-content {
  .result-box {
    margin-bottom: 20px;
    font-family: monospace;
  }
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.62);
  border-radius: 18px;

  .stat-item {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .label {
      font-size: 14px;
      color: var(--ep-text-color-secondary);
    }

    .value {
      font-size: 16px;
      font-weight: 500;
      color: var(--ep-color-primary);
    }
  }
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
  }
}
</style>
