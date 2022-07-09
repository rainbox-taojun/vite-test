<script setup>
// 党建统领详情-党建发展
import { getDevelopment } from '@/api'

const activeName = ref('') // 当前展开项
const list = ref([]) // 列表数据
const charts = ref([]) // 图表数据
const chartsRefs = ref()

const total = computed(() => list.value.length + charts.value.length)

const getData = async () => {
  const res = await getDevelopment()
  if (res.code === 200) {
    list.value = res.data.list
    charts.value = res.data.chart
  }
}

const chartTemp = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show: true,
    top: 'bottom',
    left: 'right',
    data: [],
    padding: [0, 5],
    textStyle: {
      color: '#fff'
    },
  },
  series: [
    {
      name: '',
      type: 'pie',
      center: ['50%', '25%'],
      radius: ['20%', '40%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontWeight: 'bold',
          formatter: function (name) {
            return name
          },
        }
      },
      labelLine: {
        show: false
      },
      data: []
    }
  ]
}

const getChartsOption = (index) => {
  const option = JSON.parse(JSON.stringify(chartTemp))
  option.series[0].data = charts.value[index].list
  option.legend.data = charts.value[index].list
  return option
}

onMounted(() => {
  getData()
})

const handleOpen = (activeNames) => {
  if (activeNames !== '') {
    chartsRefs.value[activeNames].handleRender()
  }
}
</script>

<template>
  <div class="developing">
    <header>
      <h5>党建发展</h5>

      <div class="count"><span>{{ total }}</span> 个</div>
    </header>

    <main>
      <el-collapse
        v-model="activeName"
        accordion
        @change="handleOpen"
      >
        <template v-for="(item, index) in charts">
          <el-collapse-item
            :name="index"
            :title="item.name"
          >
            <div :style="{ width: '100%', height: '250px' }">
              <ChartRender
                ref="chartsRefs"
                :option="getChartsOption(index)"
              />
            </div>
          </el-collapse-item>
        </template>
      </el-collapse>

      <ul class="list">
        <li
          v-for="item in list"
          class="list-item"
        >
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }}</div>
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.developing {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 360px;
  background: rgba(8, 40, 100, 0.6000);

  header {
    position: relative;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    height: 52px;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2000);

    .count {
      position: absolute;
      right: 20px;

      span {
        color: #50EAFF;
      }
    }

    &::before {
      margin-right: 11px;
      content: ' ';
      display: inline-block;
      width: 3px;
      height: 14px;
      background: #50EAFF;
    }

    h5 {
      margin: 0;
      padding: 0;
    }
  }

  main {
    padding: 11px 14px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 52px);

    overflow: auto;

    .ep-collapse {
      width: 100%;
      border: 0;

      :deep(.ep-collapse-item__header) {
        color: #FFFFFF;
        border: 0;
        background-color: unset;
      }

      :deep(.ep-collapse-item__wrap) {
        background-color: unset;
        border: 0;
      }
    }

    .list {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 24px;
        font-size: 14px;
        color: #FFFFFF;

        .value {
          color: #50EAFF;
        }
      }
    }
  }
}
</style>