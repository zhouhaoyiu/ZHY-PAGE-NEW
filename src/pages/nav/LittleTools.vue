<script setup lang="ts">

</script>

<template>
  <div class="little-tools">
    <h1>Little Tools</h1>
    <div class="toolBox">
      <div v-for="o in 40" :key="o" class="tool">
        <p class="">
          {{ `List item ${o}` }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.little-tools {
  width: 100%;
  // box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  .toolBox {
    display: flex;
    flex-wrap: wrap;
    .tool {
      box-shadow: var(--tool-bg-shadow);
      margin: 14px 20px;
      width: 280px;
      height: 80px;
      border: 1px solid #e2e8f080;
      transition: all 0.2s ease-out;
      background: var(--tool-bg-color);
      border-radius: 10px;
      &:hover {
        transform: scale(1.05);
        outline: 1px solid #000;
      }
      cursor: pointer;
    }
  }
}
</style>
