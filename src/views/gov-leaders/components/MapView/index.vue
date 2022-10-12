<script setup name="MapView">
import { getHeatmap } from '@/api'
import MapShadow from './components/MapShadow.vue'
import { useAMap } from '@/composables'

import { useArea } from './composables/area'
import { usePoint } from './composables/point'
const { initAreas, showAreas, hideAreas } = useArea()
const { initPoint, showPoint, hidePoint } = usePoint()

let satellite = null // 卫星图图层

// 地图初始化
const { map } = useAMap({
  container: 'map-container',
  center: [120.699279, 27.993849],
  zoom: 12,
  terrain: true, // 3D建筑
  mapStyle: 'amap://styles/76655daf251d3a84065af27fa04be6a8', // amap://styles/76655daf251d3a84065af27fa04be6a8
  callback: (AMap) => {
    satellite = new AMap.TileLayer.Satellite()

    map.value.addLayer(satellite)
    initAreas(map)
    initPoint(map)
  }
})
</script>

<template>
  <div class="map-view">
    <div
      class="map-container"
      id="map-container"
    />

    <MapShadow />
  </div>
</template>

<style lang="scss" scoped>
.map-view {
  position: relative;

  .map-container {
    width: 100%;
    height: 100%;
  }

  :deep(.marker-route.marker-marker-bus-from) {
    position: relative;
    width: 100px;
    height: 50px;
    background-image: url(@/assets/marker_bg.png);
    background-size: 100% 100%;

    span {
      position: absolute;
      bottom: 1px;
      left: 0;
      right: 0;
      height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 22px;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5000);
    }
  }
}
</style>