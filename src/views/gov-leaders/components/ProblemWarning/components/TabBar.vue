<script setup>
const tabs = ref(['全部', '村级工程', '劳务用工', '困难救助', '村级采购', '资产资源'])
const currentTab = ref('全部')
</script>

<template>
  <header class="tab-bar">
    <div
      v-for="tab in tabs"
      class="tab"
      :class="{active: currentTab === tab}"
      @click="currentTab = tab"
    >
      {{tab}}
    </div>
  </header>
</template>

<style lang="scss" scoped>
.tab-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;

  .tab {
    padding: 5px 00;
    display: flex;
    justify-content: center;
    width: 14%;
    background-image: url(@/assets/villages-towns/tab.png);
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    line-height: 14px;
    cursor: pointer;

    &.active {
      background-position: center center;
      background-size: 110% 130%;
      background-repeat: no-repeat;
      background-image: url(@/assets/villages-towns/tab-active.png);
    }
  }
}
</style>