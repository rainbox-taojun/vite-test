<script setup>
const select1 = ref(0)
const options1 = ref([
  { label: '温州市', value: 0 }
])

const select2 = ref(0)
const options2 = ref([
])
</script>

<template>
  <div class="area-select">
    <select
      v-model="select1"
      class="select_1"
    >
      <option
        v-for="item in options1"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>

    <select
      v-model="select2"
      class="select_2"
      placeholder="部门/区县/街道"
    >
      <option
        v-for="item in options2"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.area-select {
  .select_1 {
    font-size: 16px;
    font-family: TRENDS;
    color: #FFFFFF;
    background: none;
    border: 0;
    outline: none;
  }

  .select_2 {
    width: 150px;
    height: 28px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #FFFFFF;
    background: rgba(0, 11, 58, 0.5000);
    border: 0;
    outline: none;
  }
}
</style>