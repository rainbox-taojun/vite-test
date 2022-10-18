<script setup name="MapView">
import MapShadow from './components/MapShadow.vue'
import { useEventListener } from '@/composables'

const visible = ref(true)

useEventListener(window, 'resize', () => {
  visible.value = false
  nextTick(() => {
    visible.value = true
  })
})
</script>

<template>
  <div class="map-view">
    <header>
      <span>
        郭溪街道
      </span>
    </header>

    <iframe
      v-if="visible"
      src="http://59.202.23.34:8186/tq-bigscreen-web/#/share/1580848071670439937?token=eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbl91c2VyX2lkIjoxLCJ0b2tlbl9jcmVhdGVfdGltZSI6MTY2NTczODkyNjY4Nywic3ViIjoiamRlbmciLCJ0b2tlbl91c2VyX25hbWUiOiJqZGVuZyIsImV4cCI6MTY2NTgyNTMyNiwidG9rZW5fdGVuYW50X2lkIjoiMDAwMDAwIiwidG9rZW5fdXNlcl9wYXNzd29yZCI6IiQyYSQxMCRjWnRXYVJ5MU13UGZUSll3UmQzcTRPN2ZMT3NSZTNYbEc5VDhqSVQvU1Q4bHFVdXMvV2ZmSyJ9.g24K-Bh3mPzM6GhvTF5xhw288aIGTlz_hOCnZ3vt4BfeYFhJaUsOne0gQpWVhYcliW7J5NVXsdcPMQeBUlGs0w&shareToken=none"
      frameborder="0"
      class="map-container"
    ></iframe>
    <!-- <div class="map-img"></div> -->

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