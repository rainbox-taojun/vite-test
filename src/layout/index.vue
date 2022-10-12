<script setup name="layout">
import AppHeader from './components/AppHeader/index.vue'
</script>

<template>
  <div class="layout">
    <header>
      <AppHeader />
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  background-color: rgba(3, 7, 24, 1);

  &>header {
    width: 100%;
    height: 62.29px;
    z-index: 999;
  }

  &>main {
    height: calc(100% - 62.29px);
  }
}
</style>
