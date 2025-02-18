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
</script>

<template>
  <div class="uuid">
    <h1>UUID</h1>
    <div>
      <label>生成数量:</label>
      <el-select v-model="quantity" placeholder="生成数量" prefix-icon="el-icon-plus" type="number">
        <el-option v-for="i in 100" :key="i" :label="`${i}个`" :value="i" />
      </el-select>
    </div>
    <div>
      <label>是否大写:</label>
      <el-checkbox v-model="isUpperCase">
        大写
      </el-checkbox>
    </div>
    <div>
      <label>分隔符:</label>
      <el-input v-model="separator" placeholder="分隔符" prefix-icon="el-icon-link" />
    </div>
    <el-button type="primary" @click="generateUUIDs">
      生成
    </el-button>
    <div>
      <div v-for="(uuid, index) in uuidArray" :key="index" flex items-center justify-center>
        <h2> {{ index + 1 }} </h2>
        &nbsp; &nbsp; &nbsp;
        {{ uuid }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.uuid {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 20px;
}

label {
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
