<script setup name="LayoutBigscreen">
  import AppHeader from './components/AppHeader/index.vue'
  import MainContent from './main-content.vue'
  import { useEventListener } from '@/composables'

  const bigscreenContainer = ref(null)

  const scaleX = ref(1)
  const scaleY = ref(1)

  // 控制比例
  const scale = computed(() => {
    return scaleX.value < scaleY.value ? scaleX.value : scaleY.value
  })
  const screenTop = ref(0)
  const screenLeft = ref(0)

  const initScaleData = () => {
    scaleX.value = document.body.clientWidth / 2800
    scaleY.value = document.body.clientHeight / 1080
  }

  const initScreenPosition = () => {
    if (scale.value === scaleX.value) {
      screenLeft.value = 0
      screenTop.value =
        (document.body.clientHeight - bigscreenContainer.value.offsetHeight * scale.value) / 2
    } else {
      screenTop.value = 0
      screenLeft.value =
        (document.body.clientWidth - bigscreenContainer.value.offsetWidth * scale.value) / 2
    }
  }

  onMounted(() => {
    initScaleData()
    initScreenPosition()
  })

  useEventListener(window, 'resize', () => {
    initScaleData()
    initScreenPosition()
  })
</script>

<template>
  <div class="layout">
    <div class="layout-bigscreen" ref="bigscreenContainer">
      <!--     :style="{
        transform: `scale(${scale})`,
        top: `${screenTop}px`,
        left: `${screenLeft}px`
      }"
     -->
      <header>
        <AppHeader />
      </header>
      <main>
        <main-content />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(3, 7, 24, 1);

    & > .layout-bigscreen {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 2800px;
      height: 1080px;
      background-color: rgba(3, 7, 24, 1);
      transform-origin: left top;
      overflow: hidden;

      & > header {
        width: 100%;
        height: 62.29px;
        z-index: 999;
      }

      & > main {
        height: calc(100% - 62.29px);
      }
    }
  }
</style>
<style>
  h1 {
    color: white;
  }
</style>
