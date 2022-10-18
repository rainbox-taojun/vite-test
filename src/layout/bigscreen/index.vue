<script setup name="LayoutBigscreen">
import AppHeader from './components/AppHeader/index.vue'
import { useEventListener } from '@/composables'

const scaleX = ref(1)
const scaleY = ref(1)

const initScaleData = () => {
  scaleX.value = document.body.clientWidth / 1920
  scaleY.value = document.body.clientHeight / 1080
}

onMounted(() => {
  initScaleData()
})

useEventListener(window, 'resize', () => {
  initScaleData()
})
</script>

<template>
  <div
    class="layout bigscreen"
    :style="{transform: `scale(${scaleX}, ${scaleY})`}"
  >
    <header>
      <AppHeader />
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 1920px;
  height: 1080px;
  background-color: rgba(3, 7, 24, 1);
  transform-origin: 0 0;
  overflow: hidden;

  &>header {
    width: 100%;
    height: 62.29px;
    z-index: 999;
  }

  &>main {
    height: calc(100% - 62.29px);
  }
}
</style>
