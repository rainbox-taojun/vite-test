<script setup>
const { title } = defineProps({
  title: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <div class="panel-v1">
    <header class="title">
      {{ title }}
      <div class="right-btn">
        <slot name="title-right" />
      </div>
      <span class="bottom-light"></span>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.panel-v1 {
  height: 100%;
  background: #101745;
  border-radius: 8px;

  .title {
    position: relative;
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    line-height: 38px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2500);
    width: 100%;
    height: 38px;
    background: linear-gradient(90deg, rgba(3, 110, 255, 0) 0%, #0063C5 51%, rgba(44, 133, 189, 0) 100%);

    .right-btn {
      position: absolute;
      right: 26px;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 16px;
      font-size: 12px;
      color: #32C5FF;
      line-height: 16px;
    }

    .bottom-light {
      position: absolute;
      margin: auto;
      bottom: 0;
      left: 0;
      right: 0;
      width: 123px;
      height: 1px;
      border: 1px solid;
      border-image: linear-gradient(270deg, rgba(0, 63, 255, 0), rgba(147, 255, 253, 1), rgba(0, 63, 255, 0)) 2 2;
    }
  }

  &>main {
    height: calc(100% - 38px);
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>