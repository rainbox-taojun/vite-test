<script setup>
import { useEcharts } from '@/composables'
import { radarItemBg } from './radarItemBg'

const data1 = ref([0, 0, 0, 0, 0, 0])
const data2 = ref([0, 0, 0, 0, 0, 0])
const yData = ref([
  '权利寻租、优亲厚友、违规插手工程',
  '围标串标',
  '违规拆分工程',
  '违规直接发包',
  '优亲厚友',
  '违规插手工程'
])

const indicator = computed(() => {
  return yData.value.map(item => {
    return {
      name: item,
      max: 100
    }
  })
})

const options = computed(() => {
  return {
    tooltip: {},
    radar: {
      radius: "50%", //大小
      nameGap: 3, // 图中工艺等字距离图的距离
      center: ["50%", "50%"], // 图的位置
      name: {
        textStyle: {
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: 12,
          padding: [10, 25, 10, 25],
        },
        backgroundColor: {
          image: radarItemBg,
        },
        formatter: function (name) {
          const index = yData.value.findIndex(item => item === name)
          return '{a|' + name + '}\n' + '{c|' + data2.value[index] + '条 }{b|' + data1.value[index] + '%}'
        },
        rich: {
          a: {
            align: 'center',
            color: '#fff',
            height: 18,
            fontSize: 12,
          },
          b: {
            align: 'center',
            fontSize: 16,
            fontFamily: 'TRENDS',
            color: '#FFB51F',
            lineHeight: 20,
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F5A623 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          // triggerEvent: true,//开启雷达图的边角名称可点击
        },
      },
      indicator: indicator.value,
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
          areaStyle: { type: "default" }
        },

        data: [
          {
            symbol: "circle",
            symbolSize: 4.4,
            value: data1.value,
            areaStyle: { color: "rgba(255, 198, 0, 0.3)" },
            itemStyle: {
              borderWidth: 1,
              color: "rgba(255, 218, 90, 1)",
              borderColor: "rgba(255, 218, 90, 1)"
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
const { refreshChart } = useEcharts('problem-warning-radar-chart', options.value)

</script>

<template>
  <div
    class="radar-chart"
    id="problem-warning-radar-chart"
  ></div>
</template>

<style lang="scss" scoped>
.radar-chart {
  width: 100%;
  height: 55%;
}
</style>