<script setup name="GovLeaders">
// 党政统领
import { getGovLeaders } from '@/api'
import GovLeadersPop from './components/GovLeadersPop.vue'
import { usePie3d } from '../../composables/pie3d'

const dialogVisible = ref(false)
const eduData = ref([
  { name: '公务员总人数', value: '32094', unit: '人' },
  { name: '党员总数', value: '51454', unit: '人' },
  { name: '党员平均年龄', value: '41.79', unit: '岁' },
])
const postionData = ref({})
const colorList = ['rgba(32,159,237,1)', 'rgba(255,159,32,1)', 'rgba(159,255,237,1)', 'rgba(159,255,32,1)']

const getData = async () => {
  const res = await getGovLeaders()
  if (res.code === 200) {
    // eduData.value = res.data.chart4
    postionData.value = res.data.chart2.map(item => {
      return {
        ...item,
        value: Number.parseFloat(item.value)
      }
    })
  }
}

const getPrettyPercentage = (num) => {
  return Number.parseFloat(num * 100).toFixed(2) + '%'
}

onMounted(async () => {
  await getData()
  usePie3d('gov-leaders-chart', postionData.value, colorList)
})
</script>

<template>
  <PanelV1
    title="党建统领"
    class="gov-leaders"
  >
    <div class="content-wrap">
      <div
        v-for="item in eduData"
        class="line"
      >
        <div class="name">{{ item.name }}</div>
        <div class="value">{{ item.value }} {{ item.unit }}</div>
      </div>

      <div class="chart-wrap">
        <div
          class="chart-box"
          id="gov-leaders-chart"
        />

        <ul class="legend-list">
          <li v-for="(item, index) in postionData">
            <span
              class="circle"
              :style="{ backgroundColor: colorList[index] }"
            />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </PanelV1>

  <GovLeadersPop v-model="dialogVisible" />
</template>

<style lang="scss" scoped>
.gov-leaders {
  .title-img {
    width: 284px;
    height: 100%;
    background-image: url(@/assets/gov-leaders-title_bg.png);
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .content-wrap {
    padding: 20px 50px;

    .line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 24px;

      .value {
        color: #00FFE9;
      }
    }

    .chart-wrap {
      margin-bottom: 11px;
      display: flex;
      width: 100%;
      height: 115px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3000);

      .chart-box {
        width: 50%;
        height: 100%;
      }

      .legend-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 50%;
        height: 100%;

        li {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #FFFFFF;

          .circle {
            margin-right: 4px;
            width: 12px;
            height: 12px;
            border-radius: 6px;
          }
        }
      }
    }
  }
}
</style>