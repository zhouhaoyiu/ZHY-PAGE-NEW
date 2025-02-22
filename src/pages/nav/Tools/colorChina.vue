<script setup lang="ts">
// ./colorBox.ts
import { colorBox } from './colorBox'
</script>

<template>
  <div class="color-china">
    <h1>
      China-colors
    </h1>
    <div class="color-box">
      <div v-for="colorRow in colorBox" :key="colorRow[0].name" class="box-in">
        <div v-for="color in colorRow" :key="color.name" :style="{ backgroundColor: color.hex }" class="color-self">
          <div>{{ color.name }}</div>
          <div class="color-hex">
            {{ color.hex }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-china {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;

  .color-box {
    display: flex;
    flex-direction: column;
    align-items: start;
    // background-color: red;
    width: 90%;
    gap: 20px;

    .box-in {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: start;
      flex-wrap: wrap;
      border: 2px solid #ecf0f8;
      border-radius: 6px;
      padding: 8px;
      gap: 20px;

      .color-self {
        font-weight: 600;
        border-radius: 3px;
        width: calc(100% / 10);
        min-width: 110px;
        height: 60px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        color: #fff;

        .color-hex {
          margin-bottom: 3px;
          height: 16px;
          line-height: 16px;
          background-color: rgb(255 255 255 / 21%);
          padding: 2px;
          width: calc(100% - 4px);
          text-align: start;
        }
      }
    }
  }
}
</style>
