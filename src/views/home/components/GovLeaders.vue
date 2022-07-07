<script setup>
// 党政统领
</script>

<template>
  <PanelV2 class="gov-leaders">
    <template v-slot:title>
      <div class="title-img"></div>
    </template>
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
}
</style>