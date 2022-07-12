<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <div class="pop-model-panel">
    <header>
      <div class="title">
        {{ props.modelValue.title }}
      </div>
      <div class="tag-list">
        <div>市本级</div>
        <div>已建</div>
      </div>
    </header>

    <main>
      {{ props.modelValue.content }}
    </main>
  </div>
</template>

<style lang="scss">
.pop-model-panel {
  margin-right: 30px;
  margin-bottom: 20px;
  width: calc(50% - 15px);
  height: 241px;
  background-image: url(@/assets/smart-panel.png);
  background-size: 100% 100%;

  &:nth-child(even) {
    margin-right: 0px;
  }

  header {
    margin-top: 21px;
    margin-bottom: 10px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    background: linear-gradient(90deg, rgba(48, 148, 253, 0.2700) 0%, rgba(98, 184, 255, 0) 60%);

    .title {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #fff;

      &::before {
        content: ' ';
        margin-right: 10px;
        display: block;
        width: 26px;
        height: 26px;
        background-image: url(@/assets/smart-panel-header-icon.png);
        background-size: 100% 100%;
      }
    }

    .tag-list {
      display: flex;
      align-items: center;

      &>div {
        padding: 0 10px;
        margin-left: 12px;
        display: flex;
        align-items: center;
        width: auto;
        height: 24px;
        font-size: 12px;
        background: rgba(140, 196, 255, 0.1000);
        color: #8CC4FF;
        border-radius: 2px;
        border: 1px solid #8CC4FF;

        &:last-child {
          color: #44D7B6;
          background: rgba(68, 215, 182, 0.1000);
          border-radius: 2px;
          border: 1px solid #44D7B6;
        }
      }
    }
  }

  main {
    margin: 0 31px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8000);
    line-height: 20px;
  }
}
</style>