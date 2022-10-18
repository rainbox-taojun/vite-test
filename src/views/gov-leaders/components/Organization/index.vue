<script setup name="Organization">
import BaseInfo from './components/BaseInfo.vue'
import MenberLeft from './components/MenberLeft.vue'
import MenberRight from './components/MenberRight.vue'
import PublicInfo from './components/PublicInfo.vue'
</script>

<template>
  <PanelV3
    class="organization"
    title="组织概况"
  >
    <div class="organization-content">
      <BaseInfo />

      <MenberLeft />
      <MenberRight />

      <PublicInfo />
    </div>
  </PanelV3>
</template>

<style lang="scss" scoped>
.organization {
  .organization-content {
    display: grid;
    grid-template-columns: repeat(2, calc((100% - 10px) / 2));
    grid-template-rows: repeat(3, calc((100% - 20px) / 3));
    grid-gap: 10px;
    height: 100%;
  }
}
</style>