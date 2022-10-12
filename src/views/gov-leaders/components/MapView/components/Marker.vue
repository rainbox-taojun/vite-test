<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="marker">{{ props.name }}</div>
</template>

<style lang="scss" scoped>
.marker {
  position: relative;
  width: 100px;
  height: 50px;
  background-image: url(@/assets/marker_bg.png);
  background-size: 100% 100%;
}
</style>