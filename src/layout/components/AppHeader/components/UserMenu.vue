<script setup>
</script>

<template>
  <div class="user-menu">
    <span class="user-name">温州市政府·用户名</span>
    <el-button
      color="#0091FF"
      size="small"
      round
      class="logout-btn"
    >
      <SvgIcon icon-class="switch-button" />
      退出
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.user-menu {
  padding-top: 1.5vh;
  display: flex;
  align-items: center;
  width: 12vw;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #fff;
  line-height: 19px;

  .logout-btn {
    margin-left: 15px;
    color: #000;

    .svg-icon {
      margin-right: 5px;
    }
  }
}
</style>
