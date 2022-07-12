<script setup name="DataPop">
// 智能要素-数据 弹出窗
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

const list = ref(['两新党建专题库', '儿童专题库', '城市供水安全专题库', 'E企管涉企专题库', '退役军人云服务专题库', '残疾人全周期服务一件事专题库', '应急一张图专题库', '办公用房专题库', '耕农有道专题库', '应急一张图专题库', '办公用房专题库', '耕农有道专题库'])

</script>

<template>
  <Popup
    v-model="visible"
    title="智能要素-数据"
    height="483px"
  >
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <div
          :id="titleId"
          :class="titleClass"
        >
          智能要素
          <span class="subtitle">数据</span>
        </div>
      </div>
    </template>
    <ul class="data-pop">
      <li v-for="item in list">
        {{ item }}
      </li>
    </ul>
  </Popup>
</template>

<style lang="scss" scoped>
.my-header {
  position: absolute;
  left: 0;
  top: 0;
  width: 220px;

  :deep(.ep-dialog__title) {
    width: 300px;

    &::before {
      right: 95px;
    }
  }

  .subtitle {
    position: absolute;
    right: 20px;
    z-index: 99;
  }
}

.data-pop {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: auto;



  li {
    margin-right: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    width: calc((100% - 40px) / 3);
    height: 80px;
    background-image: url(@/assets/data-pop-panel.png);
    background-size: 100% 100%;
    font-size: 18px;
    color: #fff;

    &::before {
      content: ' ';
      margin-left: 20px;
      margin-right: 10px;
      display: block;
      width: 26px;
      height: 26px;
      background-image: url(@/assets/smart-panel-header-icon.png);
      background-size: 100% 100%;
    }

    &:nth-child(3n+3) {
      margin-right: 0px;
    }
  }
}
</style>