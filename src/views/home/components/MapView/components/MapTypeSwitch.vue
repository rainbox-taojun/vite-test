<script setup>
import { useAppStore } from '@/store/app'

const emits = defineEmits(['toggle-map-type'])

const appStore = useAppStore()
const isHeatmap = ref(false)
const leftbarIsOpen = computed(() => appStore.leftBar)

// 热力图和普通地图切换
const toggleMapType = () => {
  isHeatmap.value = !isHeatmap.value
  emits('toggle-map-type', isHeatmap.value)
}
</script>

<template>
  <div
    class="map-type_switch"
    :class="{ 'heatmap': isHeatmap, 'is-open': leftbarIsOpen }"
    @click="toggleMapType"
  />
</template>

<style lang="scss" scoped>
.map-type_switch {
  position: absolute;
  top: 11px;
  left: 11px;
  width: 142px;
  height: 93px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  cursor: pointer;
  z-index: 100;
  background-image: url(@/assets/map-grid-btn.png);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
    background-image: url(@/assets/map-grid-btn_active.png);
  }

  &.heatmap {
    background-image: url(@/assets/map-heatmap-btn.png);

    &:hover {
      background-image: url(@/assets/map-heatmap-btn_active.png);
    }
  }

  &.is-open {
    transform: translateX(360px);

    &:hover {
      transform: translateX(360px) scale(1.1);
    }
  }
}
</style>