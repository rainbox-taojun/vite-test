<script setup>
const props = defineProps({
  customClass: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    class="card-v1"
    :class="props.customClass"
  >
    <div
      v-for="item in 4"
      class="angle"
    ></div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card-v1 {
  position: relative;
  background: rgba(43, 136, 254, 0.1);

  .angle {
    position: absolute;
    margin: auto;
    display: block;
    width: 4px;
    height: 4px;
    border: 1px solid #88FFF5;

    &:nth-child(1) {
      top: 0;
      left: 0;
      border-right: unset;
      border-bottom: unset;
    }

    &:nth-child(2) {
      top: 0;
      right: 0;
      border-left: unset;
      border-bottom: unset;
    }

    &:nth-child(3) {
      bottom: 0;
      right: 0;
      border-left: unset;
      border-top: unset;
    }

    &:nth-child(4) {
      bottom: 0;
      left: 0;
      border-right: unset;
      border-top: unset;
    }
  }
}
</style>