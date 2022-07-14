<script setup>
// 公共服务
import { getPublicService } from '@/api'

const list = ref([])  // 列表数据

const getData = async () => {
  const res = await getPublicService()
  if (res.code === 200) {
    list.value = res.data.list
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <PanelV2 class="public-service">
    <template v-slot:title>
      <div class="title-img"></div>
    </template>

    <div class="content-wrap">
      <ul class="list">
        <li
          v-for="(item, index) in list"
          class="list-item"
        >
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }}</div>
        </li>
      </ul>
    </div>
  </PanelV2>
</template>

<style lang="scss" scoped>
.public-service {
  .title-img {
    width: 284px;
    height: 100%;
    background-image: url(../../../assets/public-service-title_bg.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .content-wrap {
    padding: 20px 60px;

    .list {
      list-style-type: none;
      margin: 0;
      padding: 0;

      .list-item {
        margin-bottom: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 24px;
        color: #fff;

        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .value {
          color: rgba(90, 180, 255, 1);
        }
      }
    }
  }
}
</style>