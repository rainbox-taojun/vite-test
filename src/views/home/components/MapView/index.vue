<script setup name="MapView">
import { getHeatmap } from '@/api'
import Keyword from './components/Keyword.vue'
import MapTypeSwitch from './components/MapTypeSwitch.vue'
import MapShadow from './components/MapShadow.vue'
import { useAMap, useMapStandbyAnim } from '@/composables'

import { useAreaAndPoint } from './composables/areaAndPoint'
const { initAreas, showAreas, hideAreas } = useAreaAndPoint()

let satellite = null // 卫星图图层
let heatmap = null
// 是否开启热力图
const isHeatmap = ref(false)
const keyword = ref('疫情')

watch(() => keyword.value, () => {
  if (isHeatmap.value) {
    getHeatmapData()
  }
})

// 地图初始化
const { map } = useAMap({
  container: 'map-container',
  center: [120.699279, 27.993849],
  zoom: 12,
  terrain: true, // 3D建筑
  mapStyle: 'amap://styles/76655daf251d3a84065af27fa04be6a8', // amap://styles/76655daf251d3a84065af27fa04be6a8
  callback: (AMap) => {
    satellite = new AMap.TileLayer.Satellite()
    map.value.plugin(["AMap.HeatMap"], function () {
      //初始化heatmap对象
      heatmap = new AMap.HeatMap(map.value, {
        radius: 25, //给定半径
        opacity: [0, 0.8]
      })

      if (isHeatmap.value) {
        getHeatmapData()
      } else {
        satellite.hide()
      }
    })
    map.value.addLayer(satellite)
    initAreas(map)
  }
})

// 地图旋转动画
useMapStandbyAnim(map, {
  pitch: 60,
  speed: 250,
  startTime: 10000
})

// 热力图和普通地图切换
const toggleMapType = () => {
  isHeatmap.value = !isHeatmap.value
  if (isHeatmap.value) {
    // 热力图在卫星地图模式下显示
    satellite.show()
    heatmap.show()
    getHeatmapData()

    // 隐藏区域多边形
    hideAreas()
  } else {
    // 隐藏卫星图&& 热力图
    satellite.hide()
    heatmap.hide()

    // 显示区域多边形
    showAreas()
  }
}

// 获取热力图信息
const getHeatmapData = async () => {
  const res = await getHeatmap(keyword.value)
  heatmap.setDataSet({
    data: res.data,
    max: 100
  });
}

</script>

<template>
  <div class="map-view">
    <div
      class="map-container"
      id="map-container"
    />

    <MapTypeSwitch @toggle-map-type="toggleMapType" />
    <Keyword v-model="keyword" />
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
}
</style>