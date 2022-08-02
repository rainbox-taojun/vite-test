<script setup lang="jsx">
// 事件热榜
import { getEventHot } from '@/api'
import { useAutoScroll } from '@/composables'

const columns = ref([
  {
    label: '事件名称',
    key: 'name',
    showOverflowTooltip: true
  },
  {
    label: '对应算法',
    key: 'value1',
    showOverflowTooltip: true
  },
  {
    label: '对应综合模型',
    key: 'value2',
    showOverflowTooltip: true
  }
])
const data = ref([])

const getData = async () => {
  const res = await getEventHot()
  if (res.code === 200) {
    data.value = res.data.list
  }
}

onMounted(() => {
  getData()
})

// useAutoScroll('.event-hot .ep-scrollbar__wrap--hidden-default', '.event-hot .ep-scrollbar__view')
</script>

<template>
  <PanelV1
    title="基层治理一件事"
    class="event-hot"
  >
    <template v-slot:title-right>
      <router-link to="/">更多></router-link>
    </template>

    <div class="box">
      <DynamicTable
        :columns="columns"
        :data="data"
        width="calc(100% - 40px)"
        height="100%"
      />
    </div>
  </PanelV1>
</template>

<style lang="scss" scoped>
.event-hot {
  .box {
    padding: 0 20px;
    width: 100%;
    height: 100%;
  }

  :deep(.icon) {
    width: 20px;
    height: 20px;
    background-image: url(@/assets/icon-hot.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  --ep-bg-color: rgba(0, 126, 219, 0.8);
  --ep-text-color-secondary: #CCF1FF;
  --ep-fill-color-blank: rgba(43, 174, 254, 0.15);
  --ep-border-color-lighter: rgba(0, 0, 0, 0.2500);
  --ep-fill-color-light: rgba(43, 174, 254, 0.15);
  --ep-text-color-regular: #fff;
  --ep-text-color-primary: #fff;

  // :deep(.ep-table .ep-table__header) {}

  // :deep(.ep-table th.ep-table__cell) {
  //   color: #CCF1FF;
  //   background: #141D54;
  //   border-bottom: 1px solid #101745;
  // }

  // :deep(.ep-table--enable-row-transition .ep-table__body td.ep-table__cell) {
  //   color: #fff;
  //   background: #141D54;
  //   border-bottom: 1px solid #101745;
  // }

  // :deep(.ep-table--enable-row-transition .ep-table__body td.ep-table__cell .cell) {
  //   display: flex;
  //   flex-wrap: wrap;
  //   align-items: center;
  //   line-height: 14px;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  // }
}
</style>