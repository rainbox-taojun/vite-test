<script setup name="AppHeader">
import Timestamp from './components/Timestamp.vue'
import UserMenu from './components/UserMenu.vue'
import { useEventListener } from '@/composables'

const route = useRoute()
const currentRoute = computed(() => route.path.value)
const leftRoutes = ref([
  { path: '/home', name: '党建统领' },
  { path: '', name: '经济生态' },
])
const rightRoutes = ref([
  { path: '', name: '平安法治' },
  { path: '', name: '公共服务' },
])



// title缩放控制
const screenWidth = ref(document.body.clientWidth)
const titleScaleX = computed(() => screenWidth.value / 1920)

useEventListener(window, 'resize', () => {
  screenWidth.value = document.body.clientWidth
})
</script>

<template>
  <div class="app-header">
    <Timestamp />
    <div class="left-menu">
      <div
        v-for="item in leftRoutes"
        class="menu-item"
        :class="{active: route.path === item.path}"
      >
        <span class="menu-item-text">{{item.name}}</span>
      </div>
    </div>
    <div
      class="title"
      :style="{transform: `scaleY(0.75) scaleX(${titleScaleX})`}"
    >
      <span>
        乡镇综合信息指挥中心
      </span>
    </div>
    <div class="right-menu">
      <div
        v-for="item in rightRoutes"
        class="menu-item"
        :class="{active: route.path === item.path}"
      >
        <span class="menu-item-text">{{item.name}}</span>
      </div>
    </div>
    <UserMenu />
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/villages-towns/header_bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .left-menu,
  .right-menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .menu-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 128.46px;
      height: 28.75px;
      font-size: 18px;
      font-family: PangMenZhengDao;
      color: #FFFFFF;
      line-height: 21px;
      background-image: url(@/assets/villages-towns/header-tab_bg.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center center;
      cursor: pointer;
      transition: transform 0.3s ease-out;

      &.active {
        background-image: url(@/assets/villages-towns/header-tab-active_bg.png);
      }

      &:hover {
        transform: translateY(-5px);
      }

      &:first-child {
        margin-right: 34px;
      }
    }
  }

  .right-menu .menu-item {
    transform: scaleX(-1);

    &:hover {
      transform: scaleX(-1) translateY(-5px);
    }
  }

  .right-menu .menu-item .menu-item-text {
    transform: scaleX(-1);
  }

  .user-menu {
    justify-content: flex-end;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    width: 25vw;
    transform-origin: center center;

    span {
      height: 100%;
      font-weight: bolder;
      font-style: oblique;
      color: rgb(255, 255, 255);
      font-size: 36px;
      line-height: 42px;
      text-indent: 1px;
      background: linear-gradient(#fff, #ABE4FF);
      color: transparent;
      -webkit-background-clip: text;
    }
  }
}
</style>