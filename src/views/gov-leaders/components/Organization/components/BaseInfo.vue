<script setup name="BaseInfo"></script>

<template>
  <section class="base-info">
    <header>
      <div class="header-left">
        <div class="label">村(社区)</div>
        <div class="value">
          <CountTo :endVal="19" />
          <span class="unit">个</span>
        </div>
      </div>
      <div class="header-right">
        <div class="label">面积</div>
        <div class="value">
          <CountTo :endVal="42.6" />
          <span class="unit">平方千米</span>
        </div>
      </div>
    </header>

    <main>
      <div class="item">
        <div class="label">户室数(个)</div>
        <div class="value">
          <CountTo :endVal="52166" />
        </div>
      </div>
      <div class="item">
        <div class="label">人数(万人)</div>
        <div class="value">
          <CountTo :endVal="10.95" />
        </div>
      </div>
      <div class="item">
        <div class="label">重点人员(人)</div>
        <div class="value">
          <CountTo :endVal="3817" />
        </div>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
.base-info {
  grid-column-start: 1;
  grid-column-end: 3;

  &>header {
    display: flex;
    height: 35%;

    .header-left,
    .header-right {
      padding: 0 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      color: #FFFFFF;
      line-height: 23px;
      letter-spacing: 1px;
      background-size: 100% 100%;

      .label {
        font-family: PangMenZhengDao;
        font-size: 20px;
      }

      .value {
        font-family: TRENDS;
        font-size: 26px;

        &>.unit {
          margin-left: 10px;
          font-size: 14px;
        }
      }
    }

    .header-left {
      background-image: url(@/assets/villages-towns/org-bar-left_bg.png);
    }

    .header-right {
      background-image: url(@/assets/villages-towns/org-bar-right_bg.png);
    }
  }

  &>main {
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65%;
    background-color: rgba(0, 44, 79, 0.5200);

    .item {
      display: flex;
      flex-direction: column;
      text-align: center;

      .label {
        margin-bottom: 8px;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 16px;
      }

      .value {
        font-size: 24px;
        font-family: TRENDS;
        line-height: 29px;
      }

      &:nth-child(1) {
        color: #00C9FF;
      }

      &:nth-child(2) {
        color: #00FE9F;
      }

      &:nth-child(3) {
        color: #FA6400;
      }
    }
  }
}
</style>