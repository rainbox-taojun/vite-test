<script setup>
// 场景应用
import { useEcharts } from '@/composables'

const list = ref([
  { label: '接入场景数', value: '89' },
  { label: '协同单位数', value: '71' }
])

const options = computed(() => {
  const colorList = ['#002f73', '#228f80', '#45c4e4'];
  return {
    tooltip: {
      trigger: 'item',
      borderColor: '#0c2e36',
      textStyle: {
        color: '#fff',
      },
      formatter: '{b}: {c}%'
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
      icon: "circle",
      selectedMode: false,
      textStyle: {
        color: '#fff'
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['60%', '90%'],
        center: ['20%', '50%'],
        itemStyle: {
          normal: {
            color: function (params) {
              return colorList[params.dataIndex];
            },
          },
        },
        label: {
          show: false,
          position: 'center',
          color: function (params) {
            return colorList[params.dataIndex];
          },
          formatter: '{b}：{d}%\n',
        },
        data: [
          { value: 20, name: '县级' },
          { value: 20, name: '市级' },
          { value: 60, name: '省级' },
        ],
      },
    ],
  }
})

const { refreshChart } = useEcharts('app-panel-chart', options.value)
</script>

<template>
  <div class="app-panel">
    <header>
      <div class="title-icon"></div>
      <h5>场景应用</h5>
    </header>

    <main>
      <div
        class="chart-box"
        id="app-panel-chart"
      />

      <ul class="list">
        <li v-for="item in list">
          <div class="label">{{ item.label }}</div>
          <div class="value">
            <span class="light">{{ item.value }}</span> 个
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-panel {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgba(8, 40, 100, 0.6000);

  header {
    padding: 18px 20px;
    display: flex;
    align-items: center;
    height: 52px;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2000);

    .title-icon {
      margin-right: 10px;
      width: 18px;
      height: 18px;
      background-image: url(@/assets/seven-questions-title-icon.png);
      background-size: 100% 100%;
    }

    h5 {
      margin: 0;
      padding: 0;
    }
  }

  main {
    padding: 18px 25px;
    display: flex;
    height: calc(100% - 52px);

    .chart-box {
      margin-right: 30px;
      width: 225px;
      height: 100%;
    }

    .list {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      width: 60px;

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 50%;

        .label {
          margin-bottom: 4px;
          height: 16px;
          font-size: 12px;
          color: #FFFFFF;
          line-height: 16px;
        }

        .value {
          height: 19px;
          font-size: 14px;
          color: #FFFFFF;
          line-height: 19px;

          .light {
            color: rgba(50, 197, 255, 1);
          }
        }
      }
    }
  }
}
</style>