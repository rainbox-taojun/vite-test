<script setup name="PolicyDecision">
import { useAutoScroll } from '@/composables'

const list = ref([
  { label: '1村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' },
  { label: '2村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' },
  { label: '3村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' },
  { label: '4村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' },
  { label: '5村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' },
  { label: '6村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' },
  { label: '7村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' },
  { label: '8村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' },
  { label: '9村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' },
  { label: '10村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' },
  { label: '11村社孤寡老人养老问题解决', date: '2022-09-30', content: '内容占位内容占位内容占位内容占位内容占位' }
])

useAutoScroll('.policy-decision > main', '.policy-decision .list', 50)
</script>

<template>
  <PanelV3
    class="policy-decision"
    title="议事决策"
    size="small"
  >
    <ul class="list">
      <li v-for="item in list">
        <div class="label">{{item.label}}</div>
        <div class="date">{{item.date}}</div>
        <div class="content">{{item.content}}</div>
      </li>
    </ul>
  </PanelV3>
</template>

<style lang="scss" scoped>
.policy-decision {
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;

  .list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 10px;
      padding: 10px;
      font-family: PingFangSC-Medium, PingFang SC;
      background-image: url(@/assets/villages-towns/policy-decision-card_bg.png);
      background-size: 100% 100%;

      .label {
        margin-bottom: 8px;
        height: 14px;
        font-size: 14px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 14px;
      }

      .date {
        height: 14px;
        font-size: 12px;
        color: #FFFFFF;
        line-height: 14px;
      }

      .content {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
        line-height: 14px;
      }
    }
  }
}
</style>