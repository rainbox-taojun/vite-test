<script setup name="SmartElement">
// 智能要素
import ModelAndAlgorithmPop from './ModelAndAlgorithmPop.vue'
import DataPop from './DataPop.vue'
import { useBallMove } from '../../composables/ballMove'

const items = ref([
  { label: '知识' },
  { label: '数据' },
  { label: '算法' },
  { label: '模型' },
])

const modelAndAlgorithmVisible = ref(false)
const isOpenModelPop = ref(true)
const dataVisible = ref(false)

const { theWorld, timeContinuesToFlow } = useBallMove('.smart-element .box', '.smart-element .box .item')
</script>

<template>
  <PanelV1
    title="智能要素"
    class="smart-element"
    @mouseover="theWorld"
    @mouseout="timeContinuesToFlow"
  >
    <div
      class="box"
      id="box"
    >
      <div class="knowledge item">
        <div class="title">知识</div>
      </div>

      <div
        class="data item"
        @click="dataVisible = true"
      >
        <div class="title">数据</div>
      </div>

      <div
        class="algorithm item"
        @click="() => { modelAndAlgorithmVisible = true, isOpenModelPop = false }"
      >
        <div class="title">算法</div>
      </div>

      <div
        class="model item"
        @click="() => { modelAndAlgorithmVisible = true, isOpenModelPop = true }"
      >
        <div class="title">模型</div>
      </div>
    </div>
  </PanelV1>

  <ModelAndAlgorithmPop
    v-model="modelAndAlgorithmVisible"
    :is-model="isOpenModelPop"
  />
  <DataPop v-model="dataVisible" />
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
      width: 7vh;
      height: 7vh;
      background-image: url(@/assets/smart-element-item_bg1.png);
    }

    .data {
      top: 7.4%;
      right: 20%;
      width: 8vh;
      height: 8vh;
      background-image: url(@/assets/smart-element-item_bg2.png);
    }

    .algorithm {
      top: 37%;
      left: 25%;
      width: 8vh;
      height: 8vh;
      background-image: url(@/assets/smart-element-item_bg3.png);
    }

    .model {
      bottom: 5.5%;
      right: 8.2%;
      width: 9vh;
      height: 9vh;
      background-image: url(@/assets/smart-element-item_bg4.png);
    }

    .case {
      top: 10.4%;
      right: 6.9%;
      width: 3vh;
      height: 3vh;
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