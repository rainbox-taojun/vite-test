<script setup name="MapView">
import { useAMap } from '@/composables'

let satellite = null // 卫星图图层
// 是否开启热力图
const isHeatmap = ref(false)

const { map } = useAMap({
  container: 'map-container',
  center: [120.699279, 27.993849],
  zoom: 12,
  mapStyle: "amap://styles/darkblue",
  callback: () => {
    satellite = new AMap.TileLayer.Satellite();
    !isHeatmap.value && satellite.hide()
    map.value.addLayer(satellite);
  }
})

// 热力图和普通地图切换
const toggleMapType = () => {
  isHeatmap.value = !isHeatmap.value
  isHeatmap.value ? satellite.show() : satellite.hide() // 热力图在卫星地图模式下显示
}
</script>

<template>
  <div class="map-view">
    <div
      class="map-container"
      id="map-container"
    />

    <div
      class="map-type_switch"
      :class="isHeatmap ? 'heatmap' : ''"
      @click="toggleMapType"
    >

    </div>
    <header :class="isHeatmap ? 'heatmap' : ''"></header>
    <div class="shadow shadow-top"></div>
    <div class="shadow shadow-left"></div>
    <div class="shadow shadow-right"></div>
  </div>
</template>

<style lang="scss" scoped>
.map-view {
  position: relative;

  .map-container {
    width: 100%;
    height: 100%;
  }

  .map-type_switch {
    position: absolute;
    bottom: 11px;
    right: 11px;
    width: 142px;
    height: 93px;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    z-index: 100;
    background-image: url(../../../../assets/map-grid_btn.png);

    &.heatmap {
      background-image: url(../../../../assets/map-heatmap_btn.png);
    }
  }

  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 73px;
    background-size: contain;
    background-position: 0%;
    background-size: auto 100%;
    background-repeat: no-repeat;
    z-index: 100;
    background-image: url(../../../../assets/map-event_bg.png);

    &.heatmap {
      background-image: url(../../../../assets/map-heatmap_bg.png);
    }
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 99;
  }

  .shadow-top {
    width: 100%;
    height: 57px;
    background: linear-gradient(180deg, rgba(0, 15, 44, 0.7) 0%, rgba(0, 15, 44, 0) 100%);
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
}
</style>