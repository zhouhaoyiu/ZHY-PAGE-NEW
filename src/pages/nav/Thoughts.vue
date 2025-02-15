<script setup lang="ts">

</script>

<template>
  <div>
    <h1>THOUGHTS</h1>
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <p v-for="o in 4" :key="o" class="text item">
        {{ `List item ${o}` }}
      </p>
      <template #footer>
        Footer content
      </template>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
/* Add your component styles here */
</style>
