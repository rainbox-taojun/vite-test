<script setup></script>

<template>
  <div
    v-for="item in 4"
    class='angle'
  >
    <div class="inside"></div>
  </div>
</template>

<style lang="scss" scoped>
.angle {
  position: absolute;
  margin: 0px;
  width: 28px;
  height: 28px;
  border: 1px solid #165889;

  &:nth-child(1) {
    left: 0;
    top: 0;
    border-bottom: unset;
    border-right: unset;

    .inside {
      left: 5px;
      top: 5px;
      border-bottom: unset;
      border-right: unset;
    }
  }

  &:nth-child(2) {
    left: 0;
    bottom: 0;
    border-top: unset;
    border-right: unset;

    .inside {
      left: 5px;
      bottom: 5px;
      border-top: unset;
      border-right: unset;
    }
  }

  &:nth-child(3) {
    right: 0;
    top: 0;
    border-bottom: unset;
    border-left: unset;

    .inside {
      right: 5px;
      top: 5px;
      border-bottom: unset;
      border-left: unset;
    }
  }

  &:nth-child(4) {
    right: 0;
    bottom: 0;
    border-top: unset;
    border-left: unset;

    .inside {
      right: 5px;
      bottom: 5px;
      border-top: unset;
      border-left: unset;
    }
  }

  .inside {
    position: absolute;
    width: 22px;
    height: 22px;
    border: 1px solid #19B3FF;
  }
}
</style>