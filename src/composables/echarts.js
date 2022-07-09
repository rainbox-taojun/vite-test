import * as echarts from 'echarts'
import { useEventListener } from './index'

export function useEcharts (container, option) {
  const chart = ref(null)

  const initChart = () => {
    let dom = null
    if (typeof container === 'string') {
      dom = document.getElementById(container)
    } else {
      dom = container
    }
    chart.value = echarts.init(dom)
    chart.value.setOption(option)
  }

  onMounted(() => {
    initChart()
  })

  useEventListener(window, 'resize', (event) => {
    chart.value.resize()
  })

  const refreshChart = (newOption) => {
    chart.value.clear()
    chart.value.setOption(newOption)
  }

  return {
    chart,
    initChart,
    refreshChart
  }
}