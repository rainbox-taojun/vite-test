<script setup>
// 平安法治
</script>

<template>
  <PanelV2 class="law-info">
    <template v-slot:title>
      <div class="title-img"></div>
    </template>
  </PanelV2>
</template>

<style lang="scss" scoped>
.law-info {
  .title-img {
    width: 284px;
    height: 100%;
    background-image: url(../../../assets/law-info-title_bg.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>