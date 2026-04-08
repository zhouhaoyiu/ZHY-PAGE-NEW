<script lang="ts" setup>
import { ref } from 'vue'

const quantity = ref(1)
const isUpperCase = ref(false)
const separator = ref('-')
const uuidArray = ref<string[]>([])
const UUID_PATTERN = /[xy]/g

function generateUUIDs() {
  uuidArray.value = []
  for (let i = 0; i < quantity.value; i++) {
    let uuid = `xxxxxxxx${separator.value}xxxx${separator.value}4xxx${separator.value}yxxx${separator.value}xxxxxxxxxxxx`.replace(UUID_PATTERN, (c) => {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
    if (isUpperCase.value)
      uuid = uuid.toUpperCase()
    uuidArray.value.push(uuid)
  }
}

function copy(text: string) {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}
</script>

<template>
  <section class="page-shell uuid-page">
    <header class="page-header">
      <p class="page-eyebrow">
        Utility
      </p>
      <h1 class="page-title">
        UUID
      </h1>
      <p class="page-description">
        简洁的 UUID 生成器，参数配置与结果列表分区展示。
      </p>
    </header>

    <div class="surface-panel uuid-panel">
      <div class="config-box">
        <div class="input-box">
          <label>生成数量</label>
          <el-select v-model="quantity" placeholder="生成数量" type="number">
            <el-option v-for="i in 100" :key="i" :label="`${i}个`" :value="i" />
          </el-select>
        </div>

        <div class="input-box">
          <label>是否大写</label>
          <el-checkbox v-model="isUpperCase">
            大写
          </el-checkbox>
        </div>

        <div class="input-box">
          <label>分隔符</label>
          <el-input v-model="separator" placeholder="例如 - 或 _" />
        </div>

        <el-button type="primary" @click="generateUUIDs">
          生成
        </el-button>
      </div>

      <div class="uuid-list">
        <div v-for="(uuid, index) in uuidArray" :key="index" class="uuid-row">
          <el-input class="uuid-input" :value="uuid" readonly>
            <template #prepend>
              <span>{{ index + 1 }}</span>
            </template>
            <template #append>
              <span class="copy-button" @click="copy(uuid)">复制</span>
            </template>
          </el-input>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.uuid-page {
  width: 100%;
  min-height: 100%;
  
}

.uuid-panel {
  padding: 20px;
  display: grid;
  grid-template-columns: minmax(260px, 340px) minmax(0, 1fr);
  gap: 18px;
}

.config-box {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.input-box {
  display: grid;
  gap: 6px;
}

label {
  font-size: 0.9rem;
  color: #475569;
  font-weight: 600;
}

.uuid-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  max-height: 56vh;
  
  padding-right: 4px;
}

.uuid-row,
.uuid-input {
  width: 100%;
}

.copy-button {
  cursor: pointer;
}

@media (max-width: 900px) {
  .uuid-panel {
    grid-template-columns: 1fr;
  }

  .uuid-list {
    max-height: none;
  }
}
</style>
