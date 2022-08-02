<script setup name="GovLeaders">
// 党政统领
import { getGovLeaders } from '@/api'
import GovLeadersPop from './components/GovLeadersPop.vue'
import { usePie3d } from '../../composables/pie3d'

const dialogVisible = ref(false)
const eduData = ref([
  { name: '公务员总人数', value: '32094', unit: '人' },
  { name: '党员总数', value: '51454', unit: '人' },
  { name: '党员平均年龄', value: '41.79', unit: '岁' },
])
const postionData = ref({})
const colorList = ['rgba(29, 180, 255, 0.9)', 'rgba(83, 45, 255, 0.9)', 'rgba(255, 194, 0, 0.9)', 'rgba(83, 221, 128, 0.9)']

const getData = async () => {
  const res = await getGovLeaders()
  if (res.code === 200) {
    // eduData.value = res.data.chart4
    postionData.value = res.data.chart2.map(item => {
      return {
        ...item,
        value: Number.parseFloat(item.value)
      }
    })
  }
}

const getPrettyPercentage = (num) => {
  return Number.parseFloat(num * 100).toFixed(2) + '%'
}

onMounted(async () => {
  await getData()
  usePie3d('gov-leaders-chart', postionData.value, colorList)
})
</script>

<template>
  <PanelV1
    title="党建统领"
    class="gov-leaders"
  >
    <template v-slot:title-right>
      <div class="link">更多></div>
    </template>

    <div class="content-wrap">
      <CardV1 class="card-1">
        <div class="left">
          <h3 class="title">{{ eduData[0].name }}</h3>
          <div class="icon"></div>
          <div class="value">
            {{ eduData[0].value }}
            <span>{{ eduData[0].unit }}</span>
          </div>
        </div>

        <div class="right">
          <div class="chart-wrap">
            <div
              class="chart-box"
              id="gov-leaders-chart"
            />

            <ul class="legend-list">
              <li v-for="(item, index) in postionData">
                <span
                  class="circle"
                  :style="{ backgroundColor: colorList[index] }"
                />
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </CardV1>

      <CardV1 class="card-2">
        <div class="left">
          <h3 class="title">{{ eduData[1].name }}</h3>
          <div class="icon"></div>
          <div class="value">
            {{ eduData[1].value }}
          </div>
        </div>

        <div class="right">
          <h3 class="title">{{ eduData[2].name }}</h3>
          <div class="icon"></div>
          <div class="value">
            {{ eduData[2].value }}
          </div>
        </div>
      </CardV1>
    </div>
  </PanelV1>

  <GovLeadersPop v-model="dialogVisible" />
</template>

<style lang="scss" scoped>
.gov-leaders {
  :deep(.card-1) {
    margin-bottom: 8px;
    padding: 14px;
    display: flex;
    height: 11.5vh;

    .left {
      padding-right: 17px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 35%;
      height: 100%;
      border-right: 1px solid rgba(255, 255, 255, 0.2);

      .title {
        margin-top: 7px;
        margin-bottom: 9px;
        height: 17px;
        font-family: PangMenZhengDao;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0px;
        color: #10F3F7;
      }

      .icon {
        margin-bottom: 15px;
        width: 42px;
        height: 31px;
        background-image: url(@/assets/icon-people.png);
        background-size: 100% 100%;
      }

      .value {
        height: 22px;
        font-family: PangMenZhengDao;
        font-size: 18px;
        font-weight: normal;
        line-height: 22px;
        letter-spacing: 0px;
        color: #FFFFFF;

        &>span {
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }

    .right {
      width: 65%;
      height: 100%;
    }
  }

  :deep(.card-2) {
    padding: 10px 0;
    display: flex;
    height: 6.5vh;

    .left {
      border-right: 1px solid rgba(255, 255, 255, 0.2);

      .icon {
        background-image: url(@/assets/icon-tg.png);
      }
    }

    .right {
      .icon {
        background-image: url(@/assets/icon-cake.png);
      }
    }

    .left,
    .right {
      display: grid;
      grid-template-columns: 54px auto;
      grid-template-rows: 14px 17px;
      grid-gap: 8px 6px;
      grid-template-areas:
        'icon name'
        'icon value';
      align-content: center;
      width: 50%;
      height: 100%;


      .title {
        grid-area: name;
        margin: 0;
        height: 14px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0px;
        color: #FFFFFF;
      }

      .icon {
        grid-area: icon;
        margin-bottom: 15px;
        width: 100%;
        height: 100%;
        background-size: auto 100%;
        background-position: right;
        background-repeat: no-repeat;
      }

      .value {
        grid-area: value;
        height: 22px;
        height: 17px;
        font-family: PangMenZhengDao;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0px;
        color: #FFFFFF;
      }
    }
  }

  .content-wrap {
    padding: 0px 16px 0 4px;

    .chart-wrap {
      margin-bottom: 11px;
      display: flex;
      width: 100%;
      height: 100%;

      .chart-box {
        width: 50%;
        height: 100%;
      }

      .legend-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 50%;
        height: 100%;

        li {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #FFFFFF;

          .circle {
            margin-right: 4px;
            width: 12px;
            height: 12px;
            border-radius: 6px;
          }
        }
      }
    }
  }
}
</style>