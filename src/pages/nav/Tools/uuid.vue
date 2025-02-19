<script lang="ts" setup>
import { ref } from 'vue'

const quantity = ref(1)
const isUpperCase = ref(false)
const separator = ref('-')
const uuidArray = ref<string[]>([])

function generateUUIDs() {
  uuidArray.value = []
  for (let i = 0; i < quantity.value; i++) {
    let uuid = `xxxxxxxx${separator.value}xxxx${separator.value}4xxx${separator.value}yxxx${separator.value}xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
    if (isUpperCase.value) {
      uuid = uuid.toUpperCase()
    }
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
  <div class="uuid" flex items-center>
    <h1>UUID</h1>
    <div class="input-box">
      <label>生成数量:</label>
      <el-select v-model="quantity" placeholder="生成数量" prefix-icon="el-icon-plus" type="number">
        <el-option v-for="i in 100" :key="i" :label="`${i}个`" :value="i" />
      </el-select>
    </div>
    <div class="input-box">
      <label>是否大写:</label>
      <el-checkbox v-model="isUpperCase">
        大写
      </el-checkbox>
    </div>
    <div class="input-box">
      <label>分隔符:</label>
      <el-input v-model="separator" placeholder="分割每一段uuid" c>
        <!-- <template #prepend>分隔符</template> -->
      </el-input>
    </div>
    <el-button type="primary" @click="generateUUIDs">
      生成
    </el-button>
    <div>
      <div v-for="(uuid, index) in uuidArray" :key="index" style="margin:10px 0" flex items-center justify-center>
        <el-input style="width: 500px;min-width: max-content;" :value="uuid" readonly>
          <template #prepend>
            <span type="primary">
              {{ index + 1 }}
            </span>
          </template>
          <template #append>
            <div style="cursor: pointer;" type="primary" @click="copy(uuid)">
              复制
            </div>
          </template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.uuid {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  flex-direction: column;

  .input-box {
    width: 400px;
    display: flex;
    // 靠左居中对齐
    align-items: center;
    justify-content: flex-start;
    min-width: max-content;
    margin: 10px 0;
  }
}

label {
  // 靠左居中对齐
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}

.el-button {
  margin-top: 10px;
  width: 100%;
}

.uuid::-webkit-scrollbar {
  width: 6px;
  margin-right: 5px;
}
</style>
