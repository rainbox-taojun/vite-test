<script setup lang="jsx">
// 事件热榜
const columns = ref([
  {
    label: '',
    width: '40px',
    render: (h, params) => (
      <div class="icon" />
    )
  },
  {
    label: '事件类型',
    key: 'type',
  },
  {
    label: '事件内容',
    key: 'content',
  },
  {
    label: '数量(件)',
    key: 'value',
    render: (h, params) => (
      <span style="color: #FFD900">{params.row.value}</span>
    )
  }
])
const data = ref([
  { type: '道路施工', content: '事件内容事件内容 事件内容', value: 2347 },
  { type: '城市园林', content: '事件内容事件内容', value: 2347 },
  { type: '公共设施', content: '事件内容事件内容 事件内容', value: 2347 },
  { type: '交通管制', content: '事件内容事件内容 事件内容', value: 2347 },
])
</script>

<template>
  <PanelV1
    title="事件热榜"
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
    padding: 20px;
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

  :deep(.ep-table .ep-table__header) {}

  :deep(.ep-table th.ep-table__cell) {
    color: #CCF1FF;
    background: #141D54;
    border-bottom: 1px solid #101745;
  }

  :deep(.ep-table--enable-row-transition .ep-table__body td.ep-table__cell) {
    color: #fff;
    background: #141D54;
    border-bottom: 1px solid #101745;
  }

  :deep(.ep-table--enable-row-transition .ep-table__body td.ep-table__cell .cell) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 48px;
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>