<script setup>
// 公共服务
import * as echarts from 'echarts'
import { useEcharts } from '@/composables'
import { getPublicService } from '@/api'

const list = ref([])  // 列表数据

// 图表配置
const options = computed(() => {
  return {
    tooltip: {},

    radar: {
      radius: "79%", //大小
      nameGap: 3, // 图中工艺等字距离图的距离
      center: ["50%", "50%"], // 图的位置
      name: {
        textStyle: {
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: 12
        },
        formatter: function (name) {
          return name;
        }
      },
      indicator: [
        { "name": '出租车', "max": "100" },
        { "name": '养老', "max": "100" },
        { "name": '托管', "max": "100" },
        { "name": '民生', "max": "100" },
        { "name": '医疗', "max": "100" }
      ],
      axisLine: {
        lineStyle: {
          color: "rgba(44, 200, 247, 1)"
        },
        show: true,
        symbolSize: [18, 16],
        symbol: ['none', 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAKdJREFUKJHtkMENglAQROcTC5gSKAE7oARKsAQ60Ras4JdgCWAHWsGSv8D+C/keMEQlhotHJ9nbzOTtAL8S+7GmRk+xfNssllPtQrU03ygMQ/Xpy5ZAGCrsUgOgBAAk3AFHuMxT4/EtRBFSo4fLPOAIpCvctMcUCyScZ1uqqbFZcKlj+4JzWiEHO1CtW3BFCKp1DHajWvl9mL6Yy8f2+byQItxc6a+1HkI9Xzx6TN3JAAAAAElFTkSuQmCC'],
        symbolOffset: -5,
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: "rgba(255,0,0,0)" // 图表背景的颜色
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: "rgba(44, 200, 247, 0.5)" // 设置网格的颜色
        }
      }
    },

    series: [
      {
        type: "radar",
        symbol: "none",
        data: [
          {
            symbol: 'none',
            value: [100, 100, 100, 100, 100, 100],
            areaStyle: { color: "rgba(0, 0, 0, 0)" },
            lineStyle: {
              color: "rgba(44, 200, 247, 0.5)",
              width: 1
            }
          }
        ]
      },
      {
        type: "radar",
        symbol: "none",
        itemStyle: {
          normal: {
            areaStyle: { type: "default" }
          }
        },
        data: [
          {
            symbol: "circle",
            symbolSize: 4.4,
            value: [70, 42, 63, 84, 75, 34],
            areaStyle: { color: "rgba(255, 198, 0, 0.3)" },
            itemStyle: {
              normal: {
                borderWidth: 1,
                color: "rgba(255, 218, 90, 1)",
                borderColor: "rgba(255, 218, 90, 1)"
              }
            },
            lineStyle: {
              color: "rgba(255, 218, 90, 1)",
              width: 1
            }
          }
        ]
      }
    ]
  }
})
const { refreshChart } = useEcharts('public-chart', options.value)


const getData = async () => {
  const res = await getPublicService()
  if (res.code === 200) {
    list.value = res.data.list
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <PanelV1
    title="公共服务"
    class="public-service"
  >
    <template v-slot:title-right>
      <div class="link">更多></div>
    </template>

    <div class="content-wrap">
      <div
        class="chart-box"
        id="public-chart"
      />

      <div class="info">
        <CardV1 class="info-card">
          <div class="name">
            居家养老上门服务工单累计数量
          </div>
          <div class="value">
            161 件
          </div>
        </CardV1>

        <CardV1 class="info-card">
          <div class="name">
            市区出租车（巡游车）在途车辆
          </div>
          <div class="value">
            161 辆
          </div>
        </CardV1>
      </div>
    </div>
  </PanelV1>
</template>

<style lang="scss" scoped>
.public-service {

  .content-wrap {
    display: flex;
    height: 100%;

    .chart-box {
      width: 50%;
      height: 100%;
    }

    .info {
      padding-bottom: 12px;
      width: 50%;
      height: 100%;

      .info-card {
        padding: 6px 12px;
        margin-bottom: 10px;
        width: 70%;
        height: calc(50% - 5px);

        .name {
          height: 34px;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          font-weight: normal;
          line-height: 17px;
          letter-spacing: 0px;
          color: #FFFFFF;
        }

        .value {
          width: 38px;
          height: 17px;
          font-family: PangMenZhengDao;
          font-size: 14px;
          font-weight: normal;
          line-height: 17px;
          letter-spacing: 0px;
          color: #FFCF4D;
        }
      }
    }
  }
}
</style>