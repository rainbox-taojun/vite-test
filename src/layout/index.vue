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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 7, 46, 1);

  &>header {
    width: 100%;
    height: 7.40740741vh;
  }

  &>main {
    padding: 20px;
    flex: 1;
  }
}
</style>
