<script setup name="ActualCombat">
import RadarChart from './components/RadarChart.vue'
</script>

<template>
  <PanelV3
    class="actual-combat"
    title="实战实效活力指数"
  >
    <div class="content-wrap">
      <RadarChart />
    </div>
  </PanelV3>
</template>

<style lang="scss" scoped>
.actual-combat {
  .content-wrap {
    height: 100%;
  }
}
</style>