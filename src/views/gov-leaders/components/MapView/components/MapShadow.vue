<script setup></script>

<template>
  <!-- <div class="shadow shadow-top"></div> -->
  <div class="shadow shadow-bottom"></div>
  <div class="shadow shadow-left"></div>
  <div class="shadow shadow-right"></div>
</template>

<style lang="scss" scoped>
.shadow {
  position: absolute;
  top: 50px;
  left: 0;
  height: calc(100% - 50px);
  z-index: 99;
}

.shadow-top {
  width: 100%;
  height: 57px;
  background: linear-gradient(180deg, rgba(0, 15, 44, 0.7) 0%, rgba(0, 15, 44, 0) 100%);
}

.shadow-bottom {
  top: unset;
  bottom: 0;
  width: 100%;
  height: 57px;
  background: linear-gradient(0deg, rgba(0, 15, 44, 0.7) 0%, rgba(0, 15, 44, 0) 100%);
}

.shadow-left {
  width: 56px;
  background: linear-gradient(90deg, rgba(0, 15, 44, 0.7) 0%, rgba(0, 15, 44, 0) 100%);
}

.shadow-right {
  left: unset;
  right: 0;
  width: 56px;
  background: linear-gradient(-90deg, rgba(0, 15, 44, 0.7) 0%, rgba(0, 15, 44, 0) 100%);
}
</style>