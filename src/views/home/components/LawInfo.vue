<script setup>
// 平安法治
import * as echarts from 'echarts'
import { getLawInfo } from '@/api'
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
        smooth: true,
        symbol: 'none',
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#FFA040'
            },
            {
              offset: 1,
              color: '#FFD959'
            }
          ]),
          shadowBlur: 10
        },
        areaStyle: { //区域填充样式
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(255, 219, 90, 0.5500)"
            },
            {
              offset: 1,
              color: "rgba(255, 219, 90, 0)"
            }
          ], false),
          shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
          shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        },
      }
    ]
  }
})
const { refreshChart } = useEcharts('law-info-chart', options.value)

// 获取数据
const getData = async () => {
  const res = await getLawInfo()
  if (res.code === 200) {
    list.value = res.data.list
    chartData.value = res.data.chart
    refreshChart(options.value)
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <PanelV1
    title="平安法治"
    class="law-info"
  >
    <div class="content-wrap">
      <ul class="list">
        <li
          v-for="(item, index) in list"
          class="list-item"
        >
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }} {{ index === 0 ? '人' : '次' }}</div>
        </li>
      </ul>

      <div
        class="chart-box"
        id="law-info-chart"
      />
    </div>
  </PanelV1>
</template>

<style lang="scss" scoped>
.law-info {
  .title-img {
    width: 284px;
    height: 100%;
    background-image: url(../../../assets/law-info-title_bg.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .content-wrap {
    padding: 20px 60px;

    .list {
      list-style-type: none;
      margin: 0;
      padding: 0;

      .list-item {
        margin-bottom: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 24px;
        color: #fff;

        .value {
          color: #FF9440;
        }
      }
    }

    .chart-box {
      width: 100%;
      height: 135px;
    }
  }
}
</style>