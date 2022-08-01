<script setup name="RightBar">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const isOpen = computed({
  get: () => appStore.rightBar,
  set: () => {
    appStore.toggleSidebar('rightBar')
  }
})
</script>

<template>
  <aside
    class="right-bar"
    :class="{ 'is-open': isOpen }"
  >
    <section class="center">
      <Angle />
      <slot name="center" />
    </section>

    <section class="right">
      <Angle />
      <slot name="right" />
    </section>

    <div
      class="toggle-btn"
      @click="isOpen = !isOpen"
    />
  </aside>
</template>

<style lang="scss" scoped>
.right-bar {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  height: 100%;

  &.is-open {

    .center,
    .right {
      transform: translateX(0);
    }
  }

  .center,
  .right {
    position: relative;
    width: 360px;
    height: 100%;
    background: rgba(0, 29, 57, 0.6);
    box-shadow: inset -1px 0px 3px 0px rgba(0, 84, 106, 0.5);
    transition: transform 0.5s ease;
    z-index: 100;
  }

  .center {
    margin-right: 10px;
    transform: translateX(730px);
  }

  .right {
    transform: translateX(360px);
  }

  .toggle-btn {
    position: absolute;
    left: -20px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 101px;
    background-image: url(@/assets/sidebar-btn_bg.png);
    background-size: 100% 100%;
    transform: translateX(715px);
    transition: transform 0.5s ease;
    cursor: pointer;
    z-index: 100;
  }

  &.is-open {
    .toggle-btn {
      background-image: url(@/assets/sidebar-btn_bg.png);
      transform: translateX(0px) scaleX(-1);
    }
  }
}
</style>