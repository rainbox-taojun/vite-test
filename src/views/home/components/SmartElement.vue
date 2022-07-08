<script setup>
// 智能要素
const items = ref([
  { label: '知识', value: 83 },
  { label: '数据', value: 291 },
  { label: '算法', value: 291 },
  { label: '模型', value: 83 },
  { label: '案例', value: 83 },
  { label: '案例', value: 83 },
])
</script>

<template>
  <PanelV1
    title="智能要素"
    class="smart-element"
  >
    <div class="box">
      <div class="knowledge item">
        <div class="title">知识</div>
      </div>

      <div class="data item">
        <div class="title">数据</div>
      </div>

      <div class="algorithm item">
        <div class="title">算法</div>
      </div>

      <div class="model item">
        <div class="title">模型</div>
      </div>

      <div class="case item ">
        <div class="title">案例</div>
      </div>

      <div class="tool item">
        <div class="title">工具</div>
      </div>
    </div>
  </PanelV1>
</template>

<style lang="scss" scoped>
.smart-element {
  .box {
    position: relative;
    width: 100%;
    height: 100%;

    .item {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-image: url(@/assets/smart-element-item_bg.png);
      background-repeat: no-repeat;
      background-size: contain;

      .title {
        font-size: 21px;
        color: #FFFFFF;
        line-height: 30px;
        text-shadow: 0px 2px 5px #3196FA;
      }

      .value {
        height: 31px;
        font-size: 16px;
        font-weight: 500;
        color: #FABF1D;
        line-height: 30px;
      }
    }

    .knowledge {
      top: 16px;
      left: 39px;
      width: 98px;
      height: 98px;
    }

    .data {
      top: 23px;
      right: 85px;
      width: 110px;
      height: 110px;
    }

    .algorithm {
      top: 115px;
      left: 103px;
      width: 112px;
      height: 112px;
    }

    .model {
      top: 152px;
      right: 33px;
      width: 104px;
      height: 104px;
    }

    .case {
      top: 32px;
      right: 28px;
      width: 50px;
      height: 50px;
      font-size: 12px;
      opacity: 0.7;
    }

    .tool {
      top: 183px;
      left: 33px;
      width: 50px;
      height: 50px;
      font-size: 12px;
      opacity: 0.7;
    }
  }
}
</style>