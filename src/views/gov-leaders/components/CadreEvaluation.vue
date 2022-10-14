<script setup name="CadreEvaluation">
import { useAutoScroll } from '@/composables'

const columns = ref([
  {
    label: '村(社区)',
    key: 'name',
  },
  {
    label: '基础值',
    key: 'value1',
  },
  {
    label: '干事值',
    key: 'value2',
  },
  {
    label: '发展值',
    key: 'value3',
  },
  {
    label: '规矩值',
    key: 'value4',
  },
  {
    label: '满意值',
    key: 'value5',
  },
  {
    label: '总分',
    key: 'total',
  }
])
const data = ref([])</script>

<template>
  <PanelV3
    class="cadre-evaluation"
    title="村社干部五维评价"
  >
    <div class="table-wrap">
      <DynamicTable
        :columns="columns"
        :data="data"
        height="100%"
      />
    </div>
  </PanelV3>
</template>

<style lang="scss" scoped>
.cadre-evaluation {
  --ep-bg-color: rgba(11, 46, 93, 1);
  --ep-text-color-secondary: #CCF1FF;
  --ep-fill-color-blank: rgba(43, 174, 254, 0.15);
  --ep-border-color-lighter: rgba(0, 0, 0, 0.2500);
  --ep-fill-color-light: rgba(43, 174, 254, 0.15);
  --ep-text-color-regular: #fff;
  --ep-text-color-primary: #fff;

  .table-wrap {
    margin: -19px -10px -10px -10px;
    height: calc(100% + 19px + 10px);
  }
}
</style>