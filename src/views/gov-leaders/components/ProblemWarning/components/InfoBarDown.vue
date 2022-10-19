<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="info-bar-down">
    <ul class="list">
      <li
        v-for="item in props.data"
        class="item"
      >
        <div class="label">{{item.label}}</div>
        <div class="value">
          <CountTo :endVal="item.value" />
          <span class="unit">{{item.unit}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.info-bar-down {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 19%;
  background-image: url(@/assets/villages-towns/warning-info_bg.png);
  background-size: cover;

  .list {
    list-style-type: none;
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    display: flex;

    .item {
      padding-right: 5px;
      margin-right: 5px;
      border-right: 1px solid rgba(255, 255, 255, 0.1);

      &:last-child {
        padding-right: 0;
        margin-right: 0;
        border-right: 0;
      }

      .label {
        height: 14px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        line-height: 14px;
        text-align: center;
      }

      .value {
        height: 18px;
        font-size: 14px;
        font-family: TRENDS;
        color: #07FFFF;
        line-height: 18px;
        text-align: center;
      }
    }
  }
}
</style>