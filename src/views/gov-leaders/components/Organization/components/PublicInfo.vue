<script setup>
const publicData = ref([
  { label: '党务公开', open: 19, secret: 0 },
  { label: '财务公开', open: 19, secret: 0 },
  { label: '村(居)务公开', open: 19, secret: 0 },
])
</script>

<template>
  <div class="public-info">
    <div
      v-for="item in publicData"
      class="item"
    >
      <div class="label">{{item.label}}</div>
      <div class="open">
        <span>已公开村社</span>
        <CountTo
          class="value"
          :endVal="Number.parseInt(item.open)"
        />
      </div>
      <div class="secret">
        <span>未公开村社</span>
        <CountTo
          class="value"
          :endVal="Number.parseInt(item.secret)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.public-info {
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: space-between;

  .item {
    width: calc((100% - 8px) / 3);
    background-image: linear-gradient(rgba(0, 53, 92, 0.2300), rgba(2, 72, 123, 0));

    .label {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35%;
      font-size: 16px;
      font-family: PangMenZhengDao;
      color: #45DAF2;
      line-height: 18px;
      background: linear-gradient(180deg, #FFFFFF 0%, #45DAF2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &::before,
      &::after {
        content: ' ';
        display: block;
        width: 16px;
        height: 22px;
        background-image: url(@/assets/villages-towns/arrow-down-1.png);
        background-size: 100% 100%;
        transform: translateY(-5px);
      }
    }

    .open,
    .secret {
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 30%;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #FFFFFF;
      line-height: 14px;
      background-size: 100% 100%;

      .value {
        font-size: 18px;
        font-family: TRENDS;
        line-height: 18px;
      }
    }

    .open {
      background-image: url(@/assets/villages-towns/public-info_bg_blue.png);

      .value {
        color: #07FFFF;
      }
    }

    .secret {
      background-image: url(@/assets/villages-towns/public-info_bg_orange.png);

      .value {
        color: #FFC24A;
      }
    }
  }
}
</style>