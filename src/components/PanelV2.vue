<script setup>

</script>

<template>
  <div class="panel-v2">
    <header class="title">
      <slot name="title" />
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.panel-v2 {
  height: 100%;
  background-image: url(../assets/panel-v2_bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 8px;

  .title {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 43px;
  }

  &>main {
    height: calc(100% - 43px);
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>