<script setup>
// 事件看板
import { useEcharts } from '@/composables'
import * as echarts from 'echarts'

const list = ref([
  { label: '总事件数', value: '2,313,171' },
  { label: '派单及时率', value: '96.5' },
  { label: '已处理事件数', value: '586' },
  { label: '超时事件数', value: '586' }
])

const options = computed(() => {
  return {
    title: [
      {
        text: '已处理',
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
        text: '60.0%',
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
              color: 'rgba(46, 18, 128, 1)',
            },
            label: {
              show: false
            },
            labelLine: {
              normal: {
                smooth: true,
                lineStyle: {
                  width: 0
                }
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
        data: [60],
        coordinateSystem: 'polar',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
              offset: 0,
              color: 'rgba(209, 172, 255, 1)'
            }, {
              offset: 1,
              color: 'rgba(112, 20, 255, 1)'
            }]),
          }
        }
      },
    ]
  };
})

const { refreshChart } = useEcharts('event-panel-chart', options.value)
</script>

<template>
  <div class="event-panel">
    <header>
      <div class="title-icon"></div>
      <h5>事件看板</h5>
    </header>

    <main>
      <div
        class="chart-box"
        id="event-panel-chart"
      />

      <ul class="list">
        <li v-for="item in list">
          <div class="label">{{ item.label }}</div>
          <div class="value">
            <span class="light">{{ item.value }}</span> 件
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.event-panel {
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
            color: rgba(212, 199, 255, 1);
          }
        }
      }
    }
  }
}
</style>