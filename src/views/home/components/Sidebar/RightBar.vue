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
  perspective: 1000px;
  z-index: 100;
  transition: transform 0.5s ease;
  transform: translateX(730px);

  &.is-open {
    width: auto;
    transform: translateX(0px);

    .center,
    .right {
      transform: rotateY(0deg);
    }
  }

  .center,
  .right {
    position: relative;
    width: 360px;
    height: 100%;
    background: rgba(0, 29, 57, 0.6);
    box-shadow: inset -1px 0px 3px 0px rgba(0, 84, 106, 0.5);
    z-index: 100;
  }

  .center {
    margin-right: 10px;
    transform: rotateY(-70deg);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  .right {
    transform: rotateY(111deg) translateZ(-680px);
    transform-origin: right;
    transition: transform 0.5s ease-out;
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
    transform: translateX(-15px);
    transition: transform 0.7s ease;
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