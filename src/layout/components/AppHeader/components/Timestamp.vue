<script setup>
import { parseTime } from '@/utils'

// 时间戳
const time = ref(new Date())
const timestamp = computed(() => {
  return parseTime(time.value, '{y}.{m}.{d} {h}:{i}:{s} 星期{a}')
})
const looper = ref(null)

onMounted(() => {
  looper.value = setInterval(() => {
    time.value = new Date()
  }, 500)
})

onUnmounted(() => {
  clearInterval(time.value)
})
</script>

<template>
  <div class="timestamp">{{ timestamp }}</div>
</template>

<style lang="scss" scoped>
.timestamp {
  padding-top: 1.5vh;
  display: flex;
  align-items: center;
  width: 12vw;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #00FFFF;
  line-height: 19px;
}
</style>
