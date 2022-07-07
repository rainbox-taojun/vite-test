<script setup>
// 考核评价
import { getAssessment } from '@/api'

const list = ref([])

const getList = async () => {
  const res = await getAssessment()
  if (res.code === 200) {
    list.value = res.data
  }
}

onMounted(() => {
  // getList()
})
</script>

<template>
  <PanelV1
    title="考核评价"
    class="assessment"
  >
    <template v-slot:title-right>
      <router-link to="/">全部></router-link>
    </template>

    <ul class="list">
      <li class="list-item">
        <h2 class="title">市民政局</h2>

        <div class="tag"></div>

        <div class="line">
          <h4 class="subtitle">创建省级引领型农村社区42个</h4>
          <div class="percentage">
            已完成<span class="value">50</span>%
          </div>
          <div class="bar-box">
            <div
              class="bar"
              :style="{ width: '50%' }"
            />
          </div>
        </div>
        <div class="line">
          <h4 class="subtitle">市级完善型农村社区58个</h4>
          <div class="percentage">
            已完成<span class="value">100</span>%
          </div>
          <div class="bar-box">
            <div
              class="bar"
              :style="{ width: '100%' }"
            />
          </div>
        </div>
      </li>
    </ul>
  </PanelV1>
</template>

<style lang="scss" scoped>
.assessment {
  .list {
    list-style-type: none;
    margin: 10px;
    padding: 0;

    .list-item {
      position: relative;
      padding: 7px 10px;
      background: #082864;

      .title {
        margin: 0;
        margin-bottom: 6px;
        height: 22px;
        font-size: 16px;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 22px;

        &::before {
          content: ' ';
          margin-right: 10px;
          display: inline-block;
          width: 6px;
          height: 12px;
          background: linear-gradient(180deg, #00ECFF 0%, #005BFF 100%);
          ;
        }
      }

      .tag {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(@/assets/assessment-tag_normal.png);

        &.error {
          background-image: url(@/assets/assessment-tag_error.png);
        }
      }

      .line {
        display: grid;
        grid-template-columns: auto 80px;
        grid-template-rows: 20px 10px;
        grid-template-areas:
          'title percentage'
          'bar bar';
        row-gap: 8px;
        height: 37px;

        .subtitle {
          grid-area: title;
          margin: 0;
          font-size: 14px;
          color: #FFFFFF;
          line-height: 20px;
        }

        .percentage {
          grid-area: percentage;
          text-align: right;
          font-size: 14px;
          color: #FFFFFF;
          line-height: 20px;

          &.value {
            color: #409EFF;
          }
        }

        .bar-box {
          grid-area: bar;
          display: flex;
          justify-content: flex-start;
          height: 10px;
          background: rgba(136, 174, 255, 0.2000);
          border-radius: 6px;

          .bar {
            height: 10px;
            background: linear-gradient(270deg, #61FFEE 0%, #0A6DFF 100%);
            ;
            border-radius: 6px;
          }
        }
      }
    }
  }
}
</style>