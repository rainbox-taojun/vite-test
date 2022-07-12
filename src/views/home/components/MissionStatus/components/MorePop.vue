<script setup name="MorePop">
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
    title="省定首批四个应用下贯使用情况晾晒表"
  >
    <div class="more-pop">
      <DynamicTable
        :columns="columns"
        :data="item"
        :span-method="objectSpanMethod"
      />
    </div>
  </Popup>
</template>

<style lang="scss">
.assessment-pop {
  height: 100%;
  overflow: auto;

}
</style>