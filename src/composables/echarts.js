import * as echarts from 'echarts'
import { useEventListener } from './index'

export function useEcharts(el, option) {
  const chart = ref(null)

  const initChart = () => {
    chart.value = echarts.init(el)
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
    refreshChart
  }
}