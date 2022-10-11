<script setup name="AppHeader">
import { parseTime } from '@/utils'

const route = useRoute()
const time = ref(new Date())
const timestamp = computed(() => {
  return parseTime(time.value, '{y}.{m}.{d} {h}:{i}:{s} 星期{a}')
})
const looper = ref(null)
onMounted(() => {
  looper.value = setInterval(() => {
    time.value = new Date()
  }, 500)
})
onUnmounted(() => {
  clearInterval(time.value)
})
</script>

<template>
  <div class="app-header">
    <div class="timestamp">{{ timestamp }}</div>
    <h1>{{ route.meta.title }}</h1>
    <div class="right-menu">
      <AreaSelect />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/header_bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .timestamp,
  .right-menu {
    padding-top: 1.5vh;
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: TRENDS;
    color: #FFFFFF;
    line-height: 20px;
  }

  .right-menu {
    justify-content: flex-end;
  }

  h1 {
    margin: 0;
    flex: 1;
    font-size: 3.5vh;
    font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
    font-weight: 800;
    text-align: center;
    color: #FFFFFF;
    line-height: 7.4vh;
    letter-spacing: 1px;
    // text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5000);
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(78, 165, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>