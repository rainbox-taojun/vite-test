<script setup name="ProblemWarning">
import TabBar from './components/TabBar.vue'
import InfoBarUp from './components/InfoBarUp.vue'
import RadarChart from './components/RadarChart.vue'
import InfoBarDown from './components/InfoBarDown.vue'

const infoUpData = ref({
  warning: 19,
  warningYellow: 0,
  warningRed: 19
})
const infoDownData = ref([
  { label: '处理人数', value: 3, unit: '人' },
  { label: '一把手处理人数', value: 0, unit: '人' },
  { label: '挽回损失', value: 9106, unit: '元' },
  { label: '典型案例', value: 1, unit: '个' },
  { label: '制度和成效', value: 1, unit: '个' },
  { label: '监督模型', value: 0, unit: '个' },
])
</script>

<template>
  <PanelV3
    class="problem-warning"
    title="风纪预警"
  >
    <div class="content-wrap">
      <TabBar />
      <InfoBarUp :data="infoUpData" />
      <div class="
        chart-title">高频问题
      </div>
      <RadarChart class="radar-chart" />
      <InfoBarDown :data="infoDownData" />
    </div>
  </PanelV3>
</template>

<style lang="scss" scoped>
.problem-warning .content-wrap {
  margin: -19px -10px -10px -10px;
  padding: 0 10px 10px 10px;
  height: calc(100% + 29px);

  .chart-title {
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 22px;
    font-size: 16px;
    font-family: PangMenZhengDao;
    color: #45DAF2;
    line-height: 18px;
    background: linear-gradient(180deg, #FFFFFF 0%, #45DAF2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after,
    &::before {
      content: ' ';
      margin: 0 16px;
      display: inline-block;
      width: 16px;
      height: 22px;
      background-image: url(@/assets/villages-towns/arrow-down-1.png);
      background-size: 100% 100%;
      transform: translateY(-6px);
    }
  }
}
</style>