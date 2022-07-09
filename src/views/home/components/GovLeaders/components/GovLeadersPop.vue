<script setup name="GovLeadersPop">
// 党政统领弹出窗
import SevenQuestions from './SevenQuestions.vue'
import EventPanel from './EventPanel.vue'
import AppPanel from './AppPanel.vue'
import Developing from './Developing.vue'
import Democratic from './Democratic.vue'
import Social from './Social.vue'
import Medical from './Medical.vue'

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
    title="党建统领"
  >
    <div class="gov-leaders-pop">
      <el-row
        :gutter="20"
        class="top-row"
      >
        <el-col :span="8">
          <SevenQuestions />
        </el-col>
        <el-col :span="8">
          <EventPanel />
        </el-col>
        <el-col :span="8">
          <AppPanel />
        </el-col>
      </el-row>

      <el-row
        :gutter="10"
        class="center-row"
      >
        <el-col :span="6">
          <Developing />
        </el-col>
        <el-col :span="6">
          <Democratic />
        </el-col>
        <el-col :span="6">
          <Social />
        </el-col>
        <el-col :span="6">
          <Medical />
        </el-col>
      </el-row>

      <div
        :gutter="20"
        class="bottom-row"
      >

      </div>
    </div>
  </Popup>
</template>

<style lang="scss" scoped>
.gov-leaders-pop {
  display: flex;
  flex-direction: column;
  height: 100%;

  .top-row {
    margin-bottom: 14px;
    display: flex;
    height: 190px;
  }

  .center-row {
    flex: 1;
    margin-bottom: 14px;
    display: flex;
  }

  .bottom-row {
    display: flex;
    height: 115px;
  }
}
</style>