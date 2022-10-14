<script setup name="PeoplesLivelihood">
import PieChart from './components/PeoplesLivelihoodPieChart.vue'
import List from './components/PeoplesLivelihoodList.vue'

const data = ref([15, 5, 12, 7, 8, 9, 11, 15, 19, 3, 7, 8])
const y = ref(['安全生产', '生态环境', '卫生健康', '消防安全', '质量监管', '城市管理', '扫黄打非', '食药安全', '文教体育', '优抚安置', '治安隐患', '工商监管'])
const suggestions = ref([
  {
    name: '张**',
    content: '建议关注村社孤寡老人，出台政策添加保障'
  },
  {
    name: '张**',
    content: '建议关注村社留守儿童'
  },
  {
    name: '张**',
    content: '建议关注村社孤寡老人，出台政策添加保障'
  },
  {
    name: '张**',
    content: '建议关注村社孤寡老人，出台政策添加保障'
  },
  {
    name: '张**',
    content: '建议关注村社孤寡老人，出台政策添加保障'
  }
])

const chartData = computed(() => {
  return y.value.map((item, index) => {
    return {
      value: data.value[index],
      name: item,
    }
  })
})
</script>

<template>
  <PanelV3
    class="peoples-livelihood"
    title="民生实事"
  >
    <div class="content-wrap">
      <PieChart
        :data="chartData"
        class="chart"
      />
      <List
        :data="suggestions"
        class="list"
      />
    </div>
  </PanelV3>
</template>

<style lang="scss" scoped>
.peoples-livelihood {

  .content-wrap {
    padding: 10px 10px 5px 18px;
    display: flex;
    height: 100%;

    .chart {
      width: 70%;
    }

    .list {
      width: 30%;
    }
  }
}
</style>