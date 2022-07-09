<script setup>
/**
 * 图表生成
 * 这个组件在v-for中很好用，
 * 单独使用的话其实并不方便，建议直接用useCharts
 */
import { useEcharts } from '@/composables'

const props = defineProps({
  option: {
    type: Object,
    default: () => { }
  }
})

const chartRef = ref(null)

const handleRender = () => {
  nextTick(() => {
    const { chart, initChart } = useEcharts(chartRef.value, props.option)
    initChart()
    chart.value.resize()
  })
}

defineExpose({ handleRender })
</script>

<template>
  <div
    class="chart-render"
    ref="chartRef"
    style="width: 100%; height: 100%;"
  ></div>
</template>

<style lang="scss" scoped>
.chart-render {}
</style>