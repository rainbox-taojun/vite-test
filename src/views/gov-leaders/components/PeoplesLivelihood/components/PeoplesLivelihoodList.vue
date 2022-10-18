<script setup name="PeoplesLivelihoodList">
import { useAutoScroll } from '@/composables'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

useAutoScroll('.peoples-livelihood-list', '.peoples-livelihood-list .list', 1500, 72, true)

</script>

<template>
  <div class="peoples-livelihood-list">
    <ul class="list">
      <li
        v-for="item in props.data"
        class="card"
      >
        <div class="name">{{item.name}}</div>
        <div class="content">{{item.content}}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.peoples-livelihood-list {
  height: 100%;
  overflow: hidden;

  .list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .card {
    padding: 8px 10px;
    margin-bottom: 8px;
    height: 64px;
    font-family: PingFangSC-Medium, PingFang SC;
    background-image: linear-gradient(rgba(63, 146, 253, 0.1500), rgba(0, 117, 255, 0));
    overflow: hidden;

    .name {
      margin-bottom: 5px;
      height: 14px;
      font-size: 14px;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 14px;

      &::before {
        content: ' ';
        margin-right: 8px;
        display: inline-block;
        width: 13px;
        height: 13px;
        background-image: url(@/assets/villages-towns/user-icon.png);
        background-size: 100% 100%;
      }
    }

    .content {
      height: 28px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>