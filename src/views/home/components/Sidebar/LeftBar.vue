<script setup name="LeftBar">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const isOpen = computed({
  get: () => appStore.leftBar,
  set: () => {
    appStore.toggleSidebar('leftBar')
  }
})
</script>

<template>
  <aside
    class="left-bar"
    :class="{ 'is-open': isOpen }"
  >
    <section class="panel">
      <Angle />
      <slot />
    </section>

    <div
      class="toggle-btn"
      @click="isOpen = !isOpen"
    />
  </aside>
</template>

<style lang="scss" scoped>
.left-bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 360px;
  height: 100%;
  perspective: 1000px;
  z-index: 100;

  .panel {
    width: 100%;
    height: 100%;
    background: rgba(0, 29, 57, 0.6);
    box-shadow: inset -1px 0px 3px 0px rgba(0, 84, 106, 0.5);
    transform: translateX(-360px) rotateY(90deg);
    transition: transform 0.5s ease;
  }

  .toggle-btn {
    position: absolute;
    right: -20px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 101px;
    background-image: url(@/assets/sidebar-btn_bg.png);
    background-size: 100% 100%;
    transform: translateX(-345px) scaleX(-1);
    transition: transform 0.5s ease;
    cursor: pointer;
  }

  &.is-open {
    .panel {
      transform: translateX(0);
    }

    .toggle-btn {
      background-image: url(@/assets/sidebar-btn_bg.png);
      transform: translateX(0px);
    }
  }
}
</style>