<script setup>
// 党政统领
import { usePie3d } from '../composables/pie3d'
onMounted(() => {
  usePie3d('gov-leaders-chart')
})
</script>

<template>
  <PanelV2 class="gov-leaders">
    <template v-slot:title>
      <div class="title-img"></div>
    </template>

    <div class="content-wrap">
      <div
        class="chart-box"
        id="gov-leaders-chart"
      />
    </div>

  </PanelV2>
</template>

<style lang="scss" scoped>
.gov-leaders {
  .title-img {
    width: 284px;
    height: 100%;
    background-image: url(../../../assets/gov-leaders-title_bg.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .content-wrap {
    padding: 20px 60px;

    .chart-box {
      width: 50%;
      height: 135px;
    }
  }
}
</style>