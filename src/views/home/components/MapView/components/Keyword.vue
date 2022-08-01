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
    <ul class="nav">
      <li
        v-for="(item, index) in options"
        :class="{ active: item.name === selected, ['nav-item-' + (index + 1)]: true }"
        class="nav-item"
        @click="selected = item.name"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.keyword {
  position: absolute;
  bottom: 15px;
  left: 375px;

  .nav {
    list-style-type: none;
    display: flex;
    height: 36px;
    z-index: 101;

    .nav-item {
      margin-left: 5px;
      padding-right: 16.5px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 86px;
      height: 41px;
      color: #fff;
      font-size: 14px;
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;

      &-1 {
        background-image: url(@/assets/map-nav-1.png);

        &.active {
          background-image: url(@/assets/map-nav-1_active.png);
        }
      }

      &-2 {
        background-image: url(@/assets/map-nav-2.png);

        &.active {
          background-image: url(@/assets/map-nav-2_active.png);
        }
      }

      &-3 {
        background-image: url(@/assets/map-nav-3.png);

        &.active {
          background-image: url(@/assets/map-nav-3_active.png);
        }
      }

      &-4 {
        background-image: url(@/assets/map-nav-4.png);

        &.active {
          background-image: url(@/assets/map-nav-4_active.png);
        }
      }

      &-5 {
        background-image: url(@/assets/map-nav-5.png);

        &.active {
          background-image: url(@/assets/map-nav-5_active.png);
        }
      }

      &-6 {
        background-image: url(@/assets/map-nav-6.png);

        &.active {
          background-image: url(@/assets/map-nav-6_active.png);
        }
      }

      &-7 {
        background-image: url(@/assets/map-nav-7.png);

        &.active {
          background-image: url(@/assets/map-nav-7_active.png);
        }
      }
    }
  }
}
</style>
