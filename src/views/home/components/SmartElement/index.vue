<script setup name="SmartElement">
// 智能要素
import SmartElementPop from './SmartElementPop.vue'

const items = ref([
  { label: '知识', value: 83 },
  { label: '数据', value: 291 },
  { label: '算法', value: 291 },
  { label: '模型', value: 83 },
  { label: '案例', value: 83 },
  { label: '案例', value: 83 },
])

const dialogVisible = ref(false)
</script>

<template>
  <PanelV1
    title="智能要素"
    class="smart-element"
    @click="dialogVisible = true"
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

      <div class="tool item ">
        <div class="title">工具</div>
      </div>
    </div>
  </PanelV1>

  <SmartElementPop v-model="dialogVisible" />
</template>

<style lang="scss" scoped>
.smart-element {
  cursor: pointer;

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
      font-size: 21px;
      background-image: url(@/assets/smart-element-item_bg.png);
      background-repeat: no-repeat;
      background-size: contain;

      .title {

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
      top: 5.1%;
      left: 9.5%;
      width: 9vh;
      height: 9vh;
    }

    .data {
      top: 7.4%;
      right: 20%;
      width: 10.18vh;
      height: 10.18vh;
    }

    .algorithm {
      top: 37%;
      left: 25%;
      width: 10.37vh;
      height: 10.37vh;
    }

    .model {
      bottom: 5.5%;
      right: 8.2%;
      width: 9.6vh;
      height: 9.6vh;
    }

    .case {
      top: 10.4%;
      right: 6.9%;
      width: 4.6vh;
      height: 4.6vh;
      font-size: 12px;
      opacity: 0.7;
    }

    .tool {
      bottom: 12%;
      left: 8.22%;
      width: 4.6vh;
      height: 4.6vh;
      font-size: 12px;
      opacity: 0.7;
    }
  }
}
</style>