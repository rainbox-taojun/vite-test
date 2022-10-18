<script setup>
import AppealInfo from './AppealInfo.vue'

const data = ref({
  number1: '0496',
  number1Label: '有诉求村社数',
  number2: '0003',
  number2Label: '诉求平均办结时间(天)',
  percentage: 83.1,
  percentageLabel: '满意度'
})
</script>

<template>
  <div class="appeal-down">
    <AppealInfo
      :data="data"
      :colors="['#FFCD63', '#FF632A']"
    />
  </div>
</template>

<style lang="scss" scoped>
.appeal-down {
  padding: 19px 10px 10px 10px;
  background-image: linear-gradient(rgba(255, 139, 52, 0.2300), rgba(123, 46, 2, 0));

  :deep(.appeal-info) {
    &>main {
      .item {
        &>.label {
          background: linear-gradient(180deg, #FF8080 0%, #FFFFFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &>.value-1 {
          .card {
            background-image: url(@/assets/villages-towns/appeal-number_bg_red.png);
          }
        }
      }
    }
  }
}
</style>