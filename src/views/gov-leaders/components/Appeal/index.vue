<script setup name="Appeal">
import AppealInfo from './AppealInfo.vue'

const leftData = ref({
  number1: '049618',
  number1Label: '诉求总数',
  number1Incremental: 48,
  number2: '048030',
  number2Label: '已办结总数',
  number2Incremental: 48,
  percentage: 96.8,
  percentageLabel: '办结率'
})

const rightData = ref({
  number1: '0496',
  number1Label: '有诉求村社数',
  number2: '0003',
  number2Label: '诉求平均办结时间(天)',
  percentage: 83.1,
  percentageLabel: '满意度'
})
</script>

<template>
  <div class="appeal">
    <header>
      你说我做
    </header>

    <main>
      <div class="left">
        <AppealInfo :data="leftData" />
      </div>
      <div class="right">
        <AppealInfo :data="rightData" />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.appeal {
  &>header {
    padding-left: 41px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    font-size: 24px;
    font-family: PangMenZhengDao;
    color: #FFFFFF;
    line-height: 27px;
    letter-spacing: 2px;
    background-image: url(@/assets/villages-towns/panel-header_bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  &>main {
    display: flex;
    height: calc(100% - 35px);

    .left {
      padding: 19px 10px 10px 10px;
      width: 50%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      background-image: linear-gradient(rgba(52, 169, 255, 0.2300), rgba(2, 72, 123, 0));
    }

    .right {
      padding: 19px 10px 10px 10px;
      width: 50%;
      background-image: linear-gradient(rgba(255, 139, 52, 0.2300), rgba(123, 46, 2, 0));

      :deep(.appeal-info) {
        &>main {
          .item {
            &>.label {
              background: linear-gradient(180deg, #FF8080 0%, #FFFFFF 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            &>.value-1 {
              .card {
                background-image: url(@/assets/villages-towns/appeal-number_bg_red.png);
              }
            }
          }
        }
      }
    }
  }
}
</style>