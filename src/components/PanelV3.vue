<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },

  size: {
    type: String,
    default: 'default'
  }
})

const slotTitle = !!useSlots().title;
</script>

<template>
  <div
    class="panel-v3"
    :class="props.size"
  >
    <header v-if="slotTitle">
      <slot name="title" />
    </header>
    <header v-else>
      {{props.title}}
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.panel-v3 {
  height: 100%;


  &>header {
    padding-left: 41px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    font-size: 24px;
    font-family: PangMenZhengDao;
    color: #FFFFFF;
    line-height: 27px;
    letter-spacing: 2px;
    background-image: url(@/assets/villages-towns/panel-header_bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  &.small>header {
    background-image: url(@/assets/villages-towns/panel-header-short_bg.png);
  }

  &>main {
    padding: 19px 10px 10px 10px;
    height: calc(100% - 35px);
    overflow-y: auto;
    overflow-x: hidden;
    background-image: linear-gradient(rgba(52, 169, 255, 0.2300), rgba(2, 72, 123, 0));
  }
}
</style>