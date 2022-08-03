<script setup name="MapView">
import { getHeatmap } from '@/api'
import Keyword from './components/Keyword.vue'
import MapTypeSwitch from './components/MapTypeSwitch.vue'
import { useAMap } from '@/composables'

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
  callback: () => {
    satellite = new AMap.TileLayer.Satellite()
    map.value.plugin(["AMap.HeatMap"], function () {
      //初始化heatmap对象
      heatmap = new AMap.HeatMap(map.value, {
        radius: 25, //给定半径
        opacity: [0, 0.8]
      });

      if (isHeatmap.value) {
        getHeatmapData()
      } else {
        satellite.hide()
      }
    })
    map.value.addLayer(satellite);
  }
})

// 热力图和普通地图切换
const toggleMapType = () => {
  isHeatmap.value = !isHeatmap.value
  if (isHeatmap.value) {
    satellite.show()// 热力图在卫星地图模式下显示
    heatmap.show()
    map.value.setPitch(45)
    getHeatmapData()
  } else {
    satellite.hide()
    heatmap.hide()
    map.value.setPitch(1)
  }
}

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