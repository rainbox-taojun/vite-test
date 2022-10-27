<script setup name="MapView">
import MapShadow from './components/MapShadow.vue'
import {
  initMap,
  loadData,
  queryInitOrgCode
} from '@/utils/map'

onMounted(async () => {
  let orgCode = await queryInitOrgCode('郭溪街道')
  initMap('gov-leader-map-container')
  loadData(orgCode)
})
</script>

<template>
  <div class="map-view">
    <header>
      <span>
        郭溪街道
      </span>
    </header>

    <div
      id="gov-leader-map-container"
      class="map-container"
    />

    <MapShadow />
  </div>
</template>

<style lang="scss" scoped>
.map-view {
  position: relative;

  &>header {
    margin: auto;
    width: calc(100% - 54px);
    height: 50px;
    background-image: url(@/assets/villages-towns/map-header_bg.png);
    background-position: center bottom;
    background-size: 100% 70%;
    background-repeat: no-repeat;

    span {
      margin-left: 5%;
      font-size: 28px;
      font-style: oblique;
      font-weight: bolder;
      background: linear-gradient(#fff, #ABE4FF);
      color: transparent;
      -webkit-background-clip: text;
    }
  }

  .map-img {
    width: 100%;
    height: calc(100% - 50px);
    background-image: url(@/assets/villages-towns/map.png);
    background-position: center center;
    background-size: cover;
  }

  .map-container {
    width: 100%;
    height: calc(100% - 50px);
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