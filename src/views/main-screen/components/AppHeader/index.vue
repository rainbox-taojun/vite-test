<script setup name="AppHeader">
import Timestamp from './components/Timestamp.vue'
import UserMenu from './components/UserMenu.vue'
import { useEventListener } from '@/composables'
const route = useRoute()

// title缩放控制
const screenWidth = ref(document.body.clientWidth)

useEventListener(window, 'resize', () => {
  screenWidth.value = document.body.clientWidth
})
</script>

<template>
  <div class="app-header">
    <Timestamp />
    <div class="left-menu">
    </div>
    <div class="title">
      <span>
        温州市基层智治综合应用
      </span>
    </div>
    <div class="right-menu">
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
    width: 25%;
    transform-origin: center center;

    span {
      height: 100%;
      font-weight: bolder;
      font-style: oblique;
      color: rgb(255, 255, 255);
      font-size: 32px;
      line-height: 42px;
      text-indent: 1px;
      background: linear-gradient(#fff, #ABE4FF);
      color: transparent;
      -webkit-background-clip: text;
    }
  }
}
</style>