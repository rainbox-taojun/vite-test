<script setup>
// 弹出窗
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '弹出窗'
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
  <el-dialog
    v-model="visible"
    :title="props.title"
    width="1180px"
    custom-class="custom-popup"
    append-to-body
    draggable
    top="10vh"
  >
    <slot />
  </el-dialog>
</template>

<style lang="scss">
.custom-popup {
  background-color: unset;
  background-image: url(@/assets/popup_bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 800px;

  .ep-dialog__header {
    position: relative;
    height: 50px;

    &:before {
      content: ' ';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
      display: block;
      width: 277px;
      height: 1px;
      border: 2px solid;
      border-image: linear-gradient(135deg, rgba(0, 118, 255, 0), rgba(255, 255, 255, 1), rgba(0, 118, 255, 0)) 4 4;
    }

    .ep-dialog__title {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      padding: 0 50px;
      display: inline-block;
      width: fit-content;
      height: 50px;
      line-height: 50px;
      font-size: 30px;
      font-family: zihun181hao-feichibiaotiti, zihun181hao;
      font-weight: normal;
      color: #FFFFFF;
      background-image: url(@/assets/popup-title_bg1.png);
      background-repeat: repeat;
      background-size: auto 100%;

      &::before {
        content: ' ';
        position: absolute;
        top: 0;
        right: 15px;
        bottom: 0;
        margin: auto;
        display: block;
        width: 20px;
        height: 18px;
        background-image: url(@/assets/popup-title-icon.png);
        background-repeat: repeat;
        background-size: 100% 100%;
      }

      &:after {
        content: ' ';
        position: absolute;
        top: 0;
        right: -49px;
        display: block;
        width: 50px;
        height: 50px;
        background-image: url(@/assets/popup-title_bg2.png);
        background-repeat: repeat;
        background-size: 100% 100%;
      }
    }
  }

  .ep-dialog__body {
    height: calc(100% - 50px);
  }
}
</style>