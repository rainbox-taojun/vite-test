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
  border-radius: 8px;

  .title {
    position: relative;
    padding: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 63px;
    line-height: 26px;
    font-family: PangMenZhengDao;
    font-size: 22px;
    font-weight: normal;
    line-height: 26px;
    letter-spacing: 0px;
    color: #FFFFFF;

    &::before {
      content: ' ';
      margin-right: 14px;
      display: block;
      width: 20px;
      height: 20px;
      background-image: url(@/assets/panel-v1-title-before-icon.png);
      background-size: 100% 100%;
    }

    &::after {
      content: ' ';
      margin-left: 5px;
      display: block;
      width: 14px;
      height: 14px;
      background-image: url(@/assets/panel-v1-title-after-icon.png);
      background-size: 100% 100%;
    }

    .right-btn {
      position: absolute;
      right: 26px;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 16px;
      font-size: 12px;
      font-family: MicrosoftYaHei;
      color: #32C5FF;
      line-height: 16px;
    }

    .bottom-light {
      position: absolute;
      margin: auto;
      bottom: -35px;
      right: 0;
      left: 24px;
      top: 0px;
      width: 300px;
      height: 3px;
      background: #88FFF5;
    }
  }

  &>main {
    height: calc(100% - 63px);
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>