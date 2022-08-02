<script setup>
// 平安法治
import { getLawInfo } from '@/api'

const list = ref([])  // 列表数据

// 获取数据
const getData = async () => {
  const res = await getLawInfo()
  if (res.code === 200) {
    list.value = res.data.list
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <PanelV1
    title="平安法治"
    class="law-info"
  >
    <template v-slot:title-right>
      <div class="link">更多></div>
    </template>

    <div class="content-wrap">
      <ul class="list">
        <li
          v-for="(item, index) in list"
          class="list-item"
        >
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }} {{ index === 0 ? '人' : '次' }}</div>
        </li>
      </ul>
    </div>
  </PanelV1>
</template>

<style lang="scss" scoped>
.law-info {
  .content-wrap {
    padding: 0;
    height: 100%;
    overflow: hidden;

    .list {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      height: 100%;

      .list-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 25%;
        height: 100%;
        color: #fff;
        background-size: 6.5vh auto;
        background-repeat: no-repeat;
        background-position: center top;

        &:nth-child(1) {
          background-image: url(@/assets/law-1_bg.png);
        }

        &:nth-child(2) {
          background-image: url(@/assets/law-2_bg.png);
        }

        &:nth-child(3) {
          background-image: url(@/assets/law-3_bg.png);
        }

        &:nth-child(4) {
          background-image: url(@/assets/law-4_bg.png);
        }

        .name {
          width: 53px;
          font-family: PingFangSC-Regular;
          font-size: 13px;
          font-weight: normal;
          line-height: 16px;
          text-align: center;
          letter-spacing: 0px;
          color: #FFFFFF;
        }

        .value {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0px;
        }
      }
    }
  }
}
</style>