<script setup></script>

<template>
  <div class="menber-left">
    <header>党组织建设</header>

    <main>
      <ul>
        <li>
          <div class="label">党委</div>
          <div class="arrow-img"></div>
          <div class="value">
            <CountTo :endVal="Number.parseInt(1)" />
            <span class="unit">个</span>
          </div>
        </li>
        <div class="split-line"></div>
        <li>
          <div class="label">党总支</div>
          <div class="arrow-img"></div>
          <div class="value">
            <CountTo :endVal="Number.parseInt(6)" />
            <span class="unit">个</span>
          </div>
        </li>
        <div class="split-line"></div>
        <li>
          <div class="label">党支部</div>
          <div class="arrow-img"></div>
          <div class="value">
            <CountTo :endVal="Number.parseInt(19)" />
            <span class="unit">个</span>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.menber-left {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/villages-towns/org-menber-left_bg.png);
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
    padding: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75%;

    &>ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 100%;

      .split-line {
        margin: 5px 0;
        height: 1px;
        background: linear-gradient(270deg, rgba(0, 116, 238, 0) 0%, #0074EE 100%);
      }

      li {
        display: flex;
        justify-content: space-between;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 20px;

        .label {
          width: 45%;
        }

        .arrow-img {
          flex: 1;
          width: auto;
          height: 17px;
          background-image: url(@/assets/villages-towns/arrow-right-1.png);
          background-repeat: no-repeat;
          background-size: auto 100%;
        }

        .value {
          width: 30%;
          font-size: 14px;
          font-family: SJxinhei-Regular, SJxinhei;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 17px;
        }
      }
    }
  }
}
</style>