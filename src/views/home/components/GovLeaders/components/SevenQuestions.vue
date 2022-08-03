<script setup>
// 七张问题清单
import { useEcharts } from '@/composables'
import * as echarts from 'echarts'

const list = ref([
  { label: '核心指标数', value: '2371' },
  { label: '问题总量', value: '391' },
  { label: '问题分类', value: '16' },
  { label: '已解决问题数', value: '268' }
])

const options = computed(() => {
  return {
    title: [
      {
        text: '解决率',
        left: '45%',
        top: '35%',
        textAlign: 'center',
        textStyle: {
          fontSize: '12',
          fontWight: 100,
          color: '#fff',
          textAlign: 'center',
        },
      },
      {
        text: '67.3%',
        left: '45%',
        top: '50%',
        textAlign: 'center',
        textStyle: {
          fontSize: '14',
          fontWight: 100,
          color: '#fff',
          textAlign: 'center',
        },
      }
    ],
    polar: {
      radius: ['75%', '100%'],
      center: ['50%', '50%'],
    },
    angleAxis: {
      max: 100,
      show: false,
      startAngle: 0,
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,

      },
      axisTick: {
        show: false
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['75%', '100%'],
        center: ['50%', '50%'],
        data: [
          {
            hoverOffset: 1,
            value: 100,
            name: '',
            itemStyle: {
              color: '#36302B',
            },
            label: {
              show: false
            },
            labelLine: {
              smooth: true,
              lineStyle: {
                width: 0
              }
            },
            hoverAnimation: false,
          }
        ]
      },
      {
        name: '',
        type: 'bar',
        z: 99,
        roundCap: true,
        barWidth: 60,
        showBackground: true,
        backgroundStyle: {
          color: '#464451',
        },
        data: [67.3],
        coordinateSystem: 'polar',
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
          offset: 0,
          color: 'rgba(255, 203, 45, 1)'
        }, {
          offset: 1,
          color: 'rgba(255, 87, 20, 1)'
        }]),
      },
    ]
  };
})

const { refreshChart } = useEcharts('seven-questions-chart', options.value)
</script>

<template>
  <div class="seven-questions">
    <header>
      <div class="title-icon"></div>
      <h5>七张问题清单</h5>
    </header>

    <main>
      <div
        class="chart-box"
        id="seven-questions-chart"
      />

      <ul class="list">
        <li v-for="item in list">
          <div class="label">{{ item.label }}</div>
          <div class="value">
            <span class="light">{{ item.value }}</span> 个
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.seven-questions {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgba(8, 40, 100, 0.6000);

  header {
    padding: 18px 20px;
    display: flex;
    align-items: center;
    height: 52px;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2000);

    .title-icon {
      margin-right: 10px;
      width: 18px;
      height: 18px;
      background-image: url(@/assets/seven-questions-title-icon.png);
      background-size: 100% 100%;
    }

    h5 {
      margin: 0;
      padding: 0;
    }
  }

  main {
    padding: 18px 25px;
    display: flex;
    height: calc(100% - 52px);

    .chart-box {
      margin-right: 30px;
      width: 90px;
      height: 100%;
    }

    .list {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      width: calc(100% - 120px);

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 50%;

        .label {
          margin-bottom: 4px;
          height: 16px;
          font-size: 12px;
          color: #FFFFFF;
          line-height: 16px;
        }

        .value {
          height: 19px;
          font-size: 14px;
          color: #FFFFFF;
          line-height: 19px;

          .light {
            color: #FF954E;
          }
        }
      }
    }
  }
}
</style>