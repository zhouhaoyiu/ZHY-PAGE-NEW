<script lang='ts' setup>
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
    console.log('executionTime', executionTime.value);
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
    console.log(e);
    result.value = (e as any).message
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
</script>

<template>
  <div class="regex-doctor">
    <h1>
      regexDoctor
    </h1>
    <div>
      <div my-4 w-xl flex items-center justify-center>
        <label style="white-space: nowrap; width: 100px;" for="regex-input" mr-2 font-bold class="label-text">regex-input</label>
        <el-input
          id="regex-input" v-model="regex" placeholder="please input regex" :autosize="{
            minRows: 5,
          }" type="textarea" class="input-box"
        />
      </div>

      <!-- 正则表达式选项 -->
      <div my-4 w-xl flex items-center justify-center>
        <label mr-2 font-bold style="width: 100px;" class="label-text">正则表达式选项：</label>
        <div class="options-container">
          <el-checkbox v-model="regexOptions.global" label="全局匹配 (g)" />
          <el-checkbox v-model="regexOptions.ignoreCase" label="忽略大小写 (i)" />
          <el-checkbox v-model="regexOptions.multiline" label="多行模式 (m)" />
        </div>
      </div>

      <div my-4 w-xl flex items-center justify-center>
        <label style="white-space: nowrap; width: 100px;" for="text-input" mr-2 font-bold class="label-text">text-input</label>
        <el-input
          id="text-input" v-model="text" placeholder="please input text" :autosize="{
            minRows: 5,
          }" type="textarea" class="input-box"
        />
      </div>
      <div my-4 w-xl flex items-center justify-center>
        <el-button type="primary" @click="match">
          match
        </el-button>
        <el-button type="primary" @click="reset">
          reset
        </el-button>
        <el-button type="primary" @click="example">
          example
        </el-button>
      </div>
      <div my-4 w-xl flex items-center justify-center>
        <label style="white-space: nowrap; width: 100px;" for="result" mr-2 font-bold class="label-text">result</label>
        <el-input
          id="result" v-model="result" placeholder="result" :autosize="{
            minRows: 5,
          }" type="textarea" class="input-box"
        />
      </div>

      <!-- 执行时间显示 -->
      <div my-4 w-xl flex items-center justify-center>
        <label style="white-space: nowrap; width: 100px;" mr-2 font-bold class="label-text">执行时间：</label>
        <div class="time-display">
          {{ executionTime }} 毫秒
        </div>
      </div>

      <!-- 每1000字符执行时间显示 -->
      <div v-if="dpkTime > 0" my-4 w-xl flex items-center justify-center>
        <label style="white-space: nowrap; width: 100px;" mr-2 font-bold class="label-text">每千字符时间：</label>
        <div class="time-display">
          {{ dpkTime }} 毫秒/千字符
        </div>
      </div>

      <!-- 匹配数量显示 -->
      <div v-if="resultCount > 0" my-4 w-xl flex items-center justify-center>
        <label style="white-space: nowrap; width: 100px;" mr-2 font-bold class="label-text">匹配数量：</label>
        <div class="count-display">
          {{ resultCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.regex-doctor {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-box {
  width: 500px;
}

.options-container {
  width: 500px;
  display: flex;
  gap: 10px;
}

.label-text {
  font-size: 16px;
  color: #333;
}

.time-display,
.count-display {
  width: 500px;
  font-size: 16px;
  color: #409eff;
  font-weight: bold;
}
</style>
