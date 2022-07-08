<script setup name="GovLeadersPop">
// 智能要素弹出窗
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const visible = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <Popup
    v-model="visible"
    title="智能要素"
  />
</template>