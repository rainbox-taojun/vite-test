<script setup name="MissionStatus">
// 任务贯通情况
import MorePop from './components/MorePop.vue'

const list = ref([
  { label: '七张问题清单', link: '/' },
  { label: 'e行在线', link: '/' },
  { label: '防汛防台', link: '/' },
  { label: '社区矫正', link: '/' }
])

const dialogVisible = ref(false)
</script>

<template>
  <PanelV1
    title="任务贯通情况"
    class="mission-status"
  >
    <template v-slot:title-right>
      <div
        class="link"
        @click="dialogVisible = true"
      >更多></div>
    </template>

    <ul class="list">
      <li
        v-for="item in list"
        class="list-item"
      >
        {{ item.label }}
      </li>
    </ul>
  </PanelV1>

  <MorePop v-model="dialogVisible" />
</template>

<style lang="scss" scoped>
.mission-status {
  .link {
    cursor: pointer;
  }

  .list {
    list-style-type: none;
    margin: 0;
    padding: 10px 13px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    .list-item {
      margin-bottom: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(50% - 6.5px);
      height: calc(50% - 7px);
      font-size: 18px;
      color: #FFFFFF;
      line-height: 25px;
      background-image: url(@/assets/mission-status-card_bg.png);
      background-size: 100% 100%;
      cursor: pointer;

      &:nth-child(even) {
        margin-left: 13px;
      }
    }
  }
}
</style>