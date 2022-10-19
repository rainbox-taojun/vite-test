<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => { }
  }
})

const yellowBar = computed(() => {
  if (props.data?.warningYellow === props.data?.warningRed) {
    return 50
  }
  return (props.data?.warningYellow / (props.data?.warningYellow + props.data?.warningRed) * 100).toFixed(0)
})
</script>

<template>
  <div class="info-bar-up">
    <aside>
      <div class="label">预警情况</div>
      <div class="value">
        <CountTo :endVal="props.data?.warning || 0" />
      </div>
    </aside>
    <main>
      <div class="item">
        <div class="label">黄色预警</div>
        <div class="value">
          <CountTo :endVal="props.data?.warningYellow || 0" />
        </div>
      </div>

      <div class="bar-wrap">
        <div class="label">
          <div class="value">{{yellowBar + '%'}}</div>
          <div class="value">{{100 - yellowBar + '%'}}</div>
        </div>
        <div class="bar">
          <div
            class="yellow"
            :style="{width: yellowBar + '%'}"
          />
        </div>
      </div>

      <div class="item">
        <div class="label">红色预警</div>
        <div class="value">
          <CountTo :endVal="props.data?.warningRed || 0" />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.info-bar-up {
  margin-bottom: 12px;
  display: flex;
  width: 100%;
  height: 12%;

  &>aside {
    margin-right: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 23%;
    background-image: linear-gradient(0deg, rgba(50, 133, 255, 0.0600) 0%, rgba(97, 175, 255, 0.2400) 100%);

    .label {
      position: relative;
      height: 20px;
      font-size: 14px;
      color: #FFFFFF;
      line-height: 20px;

      &::before {
        content: ' ';

        position: absolute;
        left: -20px;
        top: 0;
        display: block;
        width: 18px;
        height: 19px;
        background-image: url(@/assets/villages-towns/red-point.png);
        background-size: 100% 100%;

      }
    }

    .value {
      height: 16px;
      color: #FFFFFF;
    }
  }

  &>main {
    flex: 1;

    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(0deg, rgba(50, 133, 255, 0.0600) 0%, rgba(97, 175, 255, 0.2400) 100%);

    .bar-wrap {
      flex: 1;

      margin: 0 26px;

      .label {
        margin-bottom: 4px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .value {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 22px;
          font-size: 14px;
          color: rgba(247, 247, 247, 0.8);
          line-height: 17px;
          background-image: url(@/assets/villages-towns/dialog_bg.png);
          background-size: 100% 100%;
        }
      }

      .bar {
        display: flex;
        width: 100%;
        height: 6px;
        border-radius: 6px;
        background: #FA6400;
        overflow: hidden;

        .yellow {
          display: block;
          height: 100%;
          background: #F7B500;
        }
      }
    }

    .item .label {
      text-align: center;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 14px;
    }

    .item .value {
      text-align: center;
      height: 14px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 14px;
    }
  }
}
</style>