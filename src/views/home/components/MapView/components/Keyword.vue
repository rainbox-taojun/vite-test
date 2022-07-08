<script setup>
// 关键词选择
import { getKeywords } from '@/api'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const selected = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  }
}) // 当前选择
const options = ref([]) // 下拉列表

// 获取列表
const getOptions = async () => {
  const res = await getKeywords()
  if (res.code === 200) {
    options.value = res.data
    selected.value = options.value[0]?.name
  }
}

onMounted(() => {
  getOptions()
})
</script>

<template>
  <div class="keyword">
    <div class="label">关键词</div>
    <select v-model="selected">
      <option
        v-for="item in options"
        :value="item.name"
      >
        {{ item.name }}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.keyword {
  position: absolute;
  top: 15px;
  right: 17px;
  display: flex;
  height: 36px;
  z-index: 101;

  .label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 79px;
    height: 100%;
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF;
    border-top-left-radius: 79px;
    border-bottom-left-radius: 79px;
    background: linear-gradient(180deg, rgba(64, 148, 255, 1) 0%, rgba(0, 93, 155, 1) 100%);
  }

  &>select {
    padding-left: 14px;
    padding-right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 135px;
    height: 100%;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    border: 0;
    outline: 0;
    border-top-right-radius: 79px;
    border-bottom-right-radius: 79px;
    background: rgba(0, 46, 132, 0.8000);
  }
}
</style>
