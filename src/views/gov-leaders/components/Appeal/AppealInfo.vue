<script setup>
import * as echarts from 'echarts'
import { useEcharts } from '@/composables'

const props = defineProps({
  data: {
    type: Object,
    default: () => { }
  },
  colors: {
    type: Array,
    default: ['#06BEFF', '#007EFE', 'rgba(71, 135, 212, 1)', 'rgba(71, 108, 212, 0.5000)']
  }
})

const chartRef = ref(null)

const options = computed(() => {
  return {
    grid: {
      left: '10px',
      top: '10%',
      right: '5%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['承运商1'],
      axisLine: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      name: '辆',
      axisLine: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false }
    },
    series: [
      {
        name: '值',
        type: 'bar',
        animationDuration: 0,
        legendHoverLink: false,
        barGap: '-100%',
        padding: 10,
        itemStyle: {
          barBorderRadius: [0, 0, 30, 30],
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: props.colors[0],
              },
              {
                offset: 1,
                color: props.colors[1],
              },
            ],
          },
        },
        barWidth: 14,
        data: [props.data?.percentage],
        z: 1,
      },
      {
        name: '格子',
        type: 'pictorialBar',
        barGap: '-100%',
        animationDuration: 0,
        legendHoverLink: false,
        symbolRepeat: 'true',
        symbolMargin: '20%',
        symbol: 'rect',
        symbolClip: true,
        symbolSize: [13, 1],
        symbolMargin: 2,
        symbolOffset: [0, 0],
        itemStyle: {
          color: '#333',
        },
        data: [props.data?.percentage],
        z: 2,
        animationEasing: 'elasticOut'
      },
      {
        name: "背景",
        type: 'bar',
        barWidth: 15,
        barGap: '-100%',
        animationDuration: 0,
        itemStyle: {
          color: props.colors[2],
          barBorderRadius: 30,
          barBorderColor: props.colors[3]
        },
        label: {
          show: false
        },
        data: [100],
        z: 0,
        animationEasing: 'elasticOut'
      }
    ]
  }
})

onMounted(() => {
  const { initChart, refreshChart } = useEcharts(chartRef.value, options.value)
  initChart()
})
</script>

<template>
  <div class="appeal-info">
    <main>
      <div class="item">
        <div class="label">{{props.data?.number1Label}}</div>
        <div class="value-1">
          <span
            v-for="str in props.data?.number1"
            class="card"
          >{{str}}</span>
        </div>
        <div
          v-if="props.data?.number1Incremental"
          class="value-2"
        >
          <span class="label">昨日新增</span>
          <span class="value">+{{props.data?.number1Incremental}}</span>
        </div>
      </div>

      <div class="item">
        <div class="label">{{props.data?.number2Label}}</div>
        <div class="value-1">
          <span
            v-for="str in props.data?.number2"
            class="card"
          >{{str}}</span>
        </div>
        <div
          v-if="props.data?.number2Incremental"
          class="value-2"
        >
          <span class="label">昨日新增</span>
          <span class="value">+{{props.data?.number2Incremental}}</span>
        </div>
      </div>
    </main>

    <aside>
      <div class="value">{{props.data?.percentage}}%</div>
      <div
        ref="chartRef"
        class="chart"
      />
      <div class="label">{{props.data?.percentageLabel}}</div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.appeal-info {
  display: flex;
  height: 100%;

  &>main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.1);

    .item {
      &>.label {
        margin-bottom: 6px;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 20px;
        background: linear-gradient(180deg, #80C1FF 0%, #FFFFFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &>.label::after {
        content: ' ';
        margin-left: 6px;
        display: inline-block;
        width: 20px;
        height: 16px;
        background-image: url(@/assets/villages-towns/arrow-right-2.png);
        background-size: 100% 100%;
      }

      &>.value-1 {
        margin-bottom: 3px;
        display: flex;
        align-items: center;

        .card {
          margin-right: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 15%;
          height: 30px;
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #F7F7F7;
          line-height: 20px;
          background-image: url(@/assets/villages-towns/appeal-number_bg.png);
          background-size: 100% 100%;
        }
      }

      &>.value-2 {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
        line-height: 17px;

        .value {
          margin-right: 3px;
          color: #00C9FF;
        }
      }
    }
  }

  &>aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 100%;

    .value {
      padding-left: 10px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 20px;
      text-align: center;
    }

    .chart {
      width: 100%;
      height: 80%;
    }

    .label {
      padding-left: 10px;
      height: 14px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 14px;
      text-align: center;
    }
  }
}
</style>