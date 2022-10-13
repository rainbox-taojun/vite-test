<script setup></script>

<template>
  <div class="menber-right">
    <header>队伍建设</header>

    <main>
      <div class="item">
        <div class="img"></div>
        <div class="label">正式党员</div>
        <div class="value">
          <CountTo :endVal="Number.parseInt(783)" />
          人
        </div>
      </div>
      <div class="item">
        <div class="img"></div>
        <div class="label">村干部</div>
        <div class="value">
          <CountTo :endVal="Number.parseInt(38)" />
          人
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.menber-right {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/villages-towns/org-menber-right_bg.png);
  background-size: 100% 100%;

  &>header {
    padding-left: 35%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 25%;
    font-size: 16px;
    font-family: PangMenZhengDao;
    color: #FFFFFF;
    line-height: 18px;
  }

  &>main {
    padding: 0 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75%;

    .item {
      width: 66px;

      .img {
        margin-bottom: 5px;
        width: 100%;
        height: 4vh;
        background-image: url(@/assets/villages-towns/man-blue.png);
        background-size: 100% 100%;
      }

      .label {
        margin-bottom: 1px;
        height: 16px;
        font-size: 13px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        text-align: center;
        color: #45DAF2;
        line-height: 16px;
        background: linear-gradient(180deg, #FFFFFF 0%, #5CB8FF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .value {
        height: 20px;
        font-size: 16px;
        font-family: TRENDS;
        color: #FFFFFF;
        text-align: center;
        line-height: 20px;
      }
    }

    .item:last-child {
      .img {
        background-image: url(@/assets/villages-towns/man-green.png);
      }

      .label {
        background: linear-gradient(180deg, #FFFFFF 0%, #B0FF77 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>