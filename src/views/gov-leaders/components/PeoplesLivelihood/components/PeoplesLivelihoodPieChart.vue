<script setup name="PeoplesLivelihoodPieChart">
import { useEcharts } from '@/composables'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const colorList = ['#FFC24B', '#4DCDB7', '#4DA5FF', '#004EFF', '#794BFF', '#CE4BFF', '#E778A7', '#EC7777', '#FF9B5B', '#D5D89F', '#8DD583', '#A6A6A6']

const chartData = computed(() => {
  return props.data?.map((item, index) => {
    return {
      ...item,
      itemStyle: {
        color: colorList[index]
      }
    }
  })
})

const option = computed(() => {
  return {
    title: {
      text: '类别占比',
      textStyle: {
        color: '#fff',
        fontSize: '18'
      },
      left: '10%',
      bottom: 0
    },
    legend: {
      icon: 'circle',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      itemGap: 15,
      textStyle: { color: 'rgba(255,255,255,0.8)' },
    },
    series: [{
      type: "pie",
      center: ['22%', '45%'],
      radius: ["40%", "70%"],
      itemStyle: {
        normal: {
          color: 'transparent',
          label: {
            show: false,
          },
          labelLine: {
            showAbove: true,
            length: 30,
            length2: 0,
            show: true,
            lineStyle: {
              color: 'rgba(102, 121, 157, 1)'
            }
          }
        }
      },
      data: chartData.value,
    },
    {
      type: 'pie',
      center: ['22%', '45%'],
      radius: ['51%', '40%'],
      hoverAnimation: false,
      data: [
        {
          name: '',
          value: 0,
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            color: '#fff',
            opacity: 0.33,
          },
          emphasis: {
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: '#CCAC5D',
            },
          },
        }
      ],
    },
    ]
  }
})

useEcharts('peoples-livelihood-chart', option.value)
</script>

<template>
  <div
    class="peoples-livelihood-pie-chart"
    id="peoples-livelihood-chart"
  />
</template>

<style lang="scss" scoped>

</style>