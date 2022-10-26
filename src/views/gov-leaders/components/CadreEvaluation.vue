<script setup name="CadreEvaluation">
import { useAutoScroll } from '@/composables'

const columns = ref([
  {
    label: '村(社区)',
    width: 80,
    key: 'name',
  },
  {
    label: '基础值',
    width: 80,
    key: 'value1',
  },
  {
    label: '干事值',
    width: 70,
    key: 'value2',
  },
  {
    label: '发展值',
    width: 70,
    key: 'value3',
  },
  {
    label: '规矩值',
    width: 70,
    key: 'value4',
  },
  {
    label: '满意值',
    width: 70,
    key: 'value5',
  },
  {
    label: '总分',
    width: 70,
    key: 'total',
  }
])
const data = ref([
  { name: '郭溪村', value1: 9.04, value2: 22.11, value3: 23.94, value4: 14.56, value5: 14.18, total: '83.83' },
  { name: '三合村', value1: 8.89, value2: 22.09, value3: 21.81, value4: 14.11, value5: 12.98, total: '79.98' },
  { name: '塘下村', value1: 9.16, value2: 20.84, value3: 20.73, value4: 14.27, value5: 10.94, total: '75.94' },
  { name: '郭溪社区', value1: 9.23, value2: 20.77, value3: 21.11, value4: 11.89, value5: 11.65, total: '74.65' },
  { name: '郭溪村', value1: 9.04, value2: 22.11, value3: 23.94, value4: 14.56, value5: 14.18, total: '83.83' },
  { name: '三合村', value1: 8.89, value2: 22.09, value3: 21.81, value4: 14.11, value5: 12.98, total: '79.98' },
  { name: '塘下村', value1: 9.16, value2: 20.84, value3: 20.73, value4: 14.27, value5: 10.94, total: '75.94' },
  { name: '郭溪社区', value1: 9.23, value2: 20.77, value3: 21.11, value4: 11.89, value5: 11.65, total: '74.65' },
  { name: '郭溪村', value1: 9.04, value2: 22.11, value3: 23.94, value4: 14.56, value5: 14.18, total: '83.83' },
  { name: '三合村', value1: 8.89, value2: 22.09, value3: 21.81, value4: 14.11, value5: 12.98, total: '79.98' },
  { name: '塘下村', value1: 9.16, value2: 20.84, value3: 20.73, value4: 14.27, value5: 10.94, total: '75.94' },
  { name: '郭溪社区', value1: 9.23, value2: 20.77, value3: 21.11, value4: 11.89, value5: 11.65, total: '74.65' },
])


</script>

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

  // :deep(.ep-table .cell) {
  //   padding: 0 6px;
  // }

  .table-wrap {
    margin: -19px -10px -10px -10px;
    height: calc(100% + 19px + 10px);
  }
}
</style>