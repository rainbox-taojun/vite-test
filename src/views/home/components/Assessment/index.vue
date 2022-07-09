<script setup name="Assessment">
// 考核评价
import { getAssessment } from '@/api'
import AssessmentPop from './components/AssessmentPop.vue'

const dialogVisible = ref(false)
const data = ref([
  {
    title: '市委组织部',
    list: [
      '建成1000个“共享社幸福里”示范点'
    ]
  },
  {
    title: '市司法局',
    list: [
      '创建42个省级引领农村社区',
      '创建58个市级完善型农村社区'
    ]
  },
  {
    title: '市文明中心',
    list: [
      '创成100个市级文明村',
      '创成20个文明示范村',
      '创成100个文明家庭',
      '创成10个乡风文明最美乡镇'
    ]
  },
  {
    title: '农业农村局',
    list: [
      '新建35个未来乡村',
      '培育57个未来乡村'
    ]
  },
  {
    title: '住建局',
    list: [
      '创建5家未来社区',
      '打造8个省级省级城乡风貌样板区'
    ]
  }
])

const getData = async () => {
  const res = await getAssessment()
  if (res.code === 200) {
    data.value = res.data
  }
}

onMounted(() => {
  // getData()
})
</script>

<template>
  <PanelV1
    title="考核评价"
    class="assessment"
  >
    <template v-slot:title-right>
      <div @click="dialogVisible = true">全部></div>
    </template>

    <ul class="list">
      <li
        v-for="item in data"
        class="list-item"
      >
        <h2 class="title">{{ item.title }}</h2>

        <div class="tag"></div>

        <div
          v-for="subitem in item.list"
          class="line"
        >
          <h4 class="subtitle">{{ subitem }}</h4>
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
      </li>
    </ul>
  </PanelV1>

  <AssessmentPop v-model="dialogVisible" />
</template>

<style lang="scss" scoped>
.assessment {
  .list {
    list-style-type: none;
    margin: 10px;
    padding: 0;

    .list-item {
      position: relative;
      margin-bottom: 13px;
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
        margin-bottom: 11px;
        display: grid;
        grid-template-columns: auto 80px;
        grid-template-rows: auto 10px;
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