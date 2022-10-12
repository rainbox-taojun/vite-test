<script setup name="Overwatch"></script>

<template>
  <div class="overwatch">
    <header>动态瞭望</header>
    <main></main>
  </div>
</template>

<style lang="scss" scoped>
.overwatch {
  height: 100%;

  &>header {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    height: 35px;
    font-size: 24px;
    font-family: PangMenZhengDao;
    color: #FFFFFF;
    line-height: 27px;
    letter-spacing: 2px;
    background-image: url(@/assets/villages-towns/panel-header-aligncenter_bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  &>main {
    padding: 19px 10px 10px 10px;
    height: calc(100% - 45px); // header 35 margin-bottom 10
    overflow-y: auto;
    overflow-x: hidden;
    background-image: linear-gradient(rgba(52, 169, 255, 0.2300), rgba(2, 72, 123, 0));
  }
}
</style>