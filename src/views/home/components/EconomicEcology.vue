<script setup>
// 经济生态
import * as echarts from 'echarts'
import { getEconomic } from '@/api'
import { useEcharts } from '@/composables'
import { parseTime } from '@/utils'

const list = ref([])  // 列表数据
const chartData = ref({ x: [], y: [] }) // 图表数据

// 图表最大最小值
const chartDataMin = computed(() => {
  return Math.min(...chartData.value.y)
})
const chartDataMax = computed(() => {
  return Math.max(...chartData.value.y)
})

// x轴美化后
const xAxis = computed(() => {
  return chartData.value.x.map(item => {
    return parseTime(new Date(item), '{m}-{d}')
  })
})

// 图表配置
const options = computed(() => {
  return {
    grid: {
      top: '20%',
      left: '10%',
      right: '5%',
      bottom: '15%',
      // containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      type: 'category',
      axisTick: {
        //坐标轴刻度相关设置。
        show: false,
      },
      splitLine: {
        show: false
      },
      data: xAxis.value
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLabel: {
        formatter: function (params) {
          function nFormatter (num, digits) {
            const si = [
              { value: 1, symbol: "" },
              { value: 1E3, symbol: "K" },
              { value: 1E6, symbol: "M" },
              { value: 1E9, symbol: "G" },
              { value: 1E12, symbol: "T" },
              { value: 1E15, symbol: "P" },
              { value: 1E18, symbol: "E" }
            ];
            const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
            let i;
            for (i = si.length - 1; i > 0; i--) {
              if (num >= si[i].value) {
                break;
              }
            }
            return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
          }

          return nFormatter(params, 2)
        }
      },
      min: chartDataMin.value,
      max: chartDataMax.value
    },
    series: [
      {
        data: chartData.value.y,
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#fff', //改变折线点的颜色
          borderColor: '#CEFFAF',
          shadowColor: 'rgba(255, 255, 255, 0.5)',
          shadowBlur: 3
        },
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: 'rgba(64, 255, 126, 1)'
            },
            {
              offset: 1,
              color: 'rgba(236, 255, 89, 1)'
            }
          ]),
          shadowBlur: 10
        },
        areaStyle: { //区域填充样式
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(129, 255, 90, 0.55)"
            },
            {
              offset: 1,
              color: "rgba(51, 255, 23, 0)"
            }
          ], false),
          shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
          shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        },
      }
    ]
  }
})
const { refreshChart } = useEcharts('economic-chart', options.value)

// 获取数据
const getData = async () => {
  const res = await getEconomic()
  if (res.code === 200) {
    list.value = res.data.list
    chartData.value = res.data.chart1
    refreshChart(options.value)
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <PanelV1
    title="经济生态"
    class="economic-ecology"
  >
    <template v-slot:title-right>
      <div class="link">更多></div>
    </template>

    <div class="content-wrap">
      <CardV1 class="card-1">
        <div class="number number-1">
          <div class="icon"></div>
          <div class="value">28839</div>
          <div class="name">开办企业税务登记累计数量</div>
        </div>
        <div class="number number-2">
          <div class="icon"></div>
          <div class="value">31383</div>
          <div class="name">开办个体税务登记累计数量</div>
        </div>
        <div class="bar">
          <div>全年登记数量统计</div>
          <div>单位：户</div>
        </div>
        <div
          class="chart-box"
          id="economic-chart"
        />
      </CardV1>
    </div>
  </PanelV1>
</template>

<style lang="scss" scoped>
.economic-ecology {
  .content-wrap {
    padding: 0px 16px 0 4px;
    height: 100%;

    .card-1 {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 35% 15% 50%;
      height: 100%;
    }

    .number {
      display: grid;
      grid-template-columns: 40px auto;
      grid-template-rows: 22px 28px;
      gap: 2px 12px;
      justify-content: center;
      align-content: center;

      .icon {
        grid-row-start: 1;
        grid-row-end: 3;
        display: flex;
        align-items: center;
        width: 40px;
        height: 100%;
        background-size: 100% auto;
        background-position: center;
        background-repeat: no-repeat;
      }

      .value {
        font-family: PangMenZhengDao;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0px;
      }

      .name {
        width: 72px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        font-weight: normal;
        line-height: 14px;
        letter-spacing: 0px;
        color: #FFFFFF;
      }

      &.number-1 {
        .icon {
          background-image: url(@/assets/icon-company.png);
        }

        .value {
          color: #10F3F7;
        }
      }

      &.number-2 {
        .icon {
          background-image: url(@/assets/icon-hospital.png);
        }

        .value {
          color: #00FF8F;
        }
      }
    }

    .bar {
      padding: 0 10px;
      grid-column-start: 1;
      grid-column-end: 3;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-size: 14px;
      background: linear-gradient(90deg, #0078FF 0%, #0078FF 0%, rgba(0, 26, 58, 0.00) 100%, rgba(0, 26, 58, 0.00) 100%);

      div:last-child {
        font-size: 12px;
        letter-spacing: -0.6px;
        color: rgba(255, 255, 255, 0.8);
      }
    }

    .chart-box {
      grid-column-start: 1;
      grid-column-end: 3;
      width: 100%;
      height: 100%;
    }
  }
}
</style>