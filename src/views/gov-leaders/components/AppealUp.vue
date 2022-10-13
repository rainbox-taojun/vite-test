<script setup>
import AppealInfo from './AppealInfo.vue'

const data = ref({
  number1: '049618',
  number1Label: '诉求总数',
  number1Incremental: 48,
  number2: '049618',
  number2Label: '已办结总数',
  number2Incremental: 48,
  percentage: 96.8,
  percentageLabel: '办结率'
})
</script>

<template>
  <PanelV3
    class="appeal-up"
    title="你说我做"
    size="small"
  >
    <AppealInfo :data="data" />
  </PanelV3>
</template>

<style lang="scss" scoped>
.appeal-up {}
</style>