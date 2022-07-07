<script setup>
// 公共服务
</script>

<template>
  <PanelV2 class="public-service">
    <template v-slot:title>
      <div class="title-img"></div>
    </template>
  </PanelV2>
</template>

<style lang="scss" scoped>
.public-service {
  .title-img {
    width: 284px;
    height: 100%;
    background-image: url(../../../assets/public-service-title_bg.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>