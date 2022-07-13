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

const data = ref([
  {
    "area": "鹿城区",
    "qustion": "1",
    "a": "782",
    "b": "9",
    "c": "1%",
    "d": "485",
    "e": "389",
    "f": "80%",
    "g": "2"
  },
  {
    "area": "龙湾区",
    "qustion": "2",
    "a": "307",
    "b": "3",
    "c": "1%",
    "d": "264",
    "e": "242",
    "f": "92%",
    "g": "1"
  },
  {
    "area": "瓯海区",
    "qustion": "3",
    "a": "246",
    "b": "246",
    "c": "100%",
    "d": "314",
    "e": "277",
    "f": "88%",
    "g": "3"
  },
  {
    "area": "洞头区",
    "qustion": "0",
    "a": "272",
    "b": "14",
    "c": "5%",
    "d": "177",
    "e": "166",
    "f": "94%",
    "g": "0"
  },
  {
    "area": "乐清市",
    "qustion": "7",
    "a": "705",
    "b": "34",
    "c": "5%",
    "d": "1881",
    "e": "1751",
    "f": "93%",
    "g": "10"
  },
  {
    "area": "瑞安市",
    "qustion": "1",
    "a": "864",
    "b": "147",
    "c": "17%",
    "d": "1208",
    "e": "1109",
    "f": "92%",
    "g": "1"
  },
  {
    "area": "永嘉县",
    "qustion": "2",
    "a": "318",
    "b": "27",
    "c": "8%",
    "d": "609",
    "e": "570",
    "f": "94%",
    "g": "2"
  },
  {
    "area": "文成县",
    "qustion": "0",
    "a": "110",
    "b": "26",
    "c": "24%",
    "d": "257",
    "e": "216",
    "f": "84%",
    "g": "1"
  },
  {
    "area": "平阳县",
    "qustion": "4",
    "a": "247",
    "b": "247",
    "c": "100%",
    "d": "864",
    "e": "816",
    "f": "94%",
    "g": "6"
  },
  {
    "area": "泰顺县",
    "qustion": "2",
    "a": "64",
    "b": "57",
    "c": "89%",
    "d": "398",
    "e": "398",
    "f": "100%",
    "g": "4"
  },
  {
    "area": "苍南县",
    "qustion": "2",
    "a": "492",
    "b": "416",
    "c": "85%",
    "d": "1072",
    "e": "997",
    "f": "93%",
    "g": "2"
  },
  {
    "area": "龙港市",
    "qustion": "\\",
    "a": "309",
    "b": "309",
    "c": "100%",
    "d": "328",
    "e": "327",
    "f": "100%",
    "g": "17"
  },
  {
    "area": "海经区",
    "qustion": "0",
    "a": "5",
    "b": "5",
    "c": "100%",
    "d": "20",
    "e": "20",
    "f": "100%",
    "g": "0"
  }
])
</script>

<template>
  <Popup
    v-model="visible"
    title="任务贯通使用情况晾晒"
  >
    <div class="more-pop">
      <el-table
        :data="data"
        border
        style="width: 100%;"
      >
        <el-table-column
          prop="area"
          label="县(市、区)"
          width="150"
        />
        <el-table-column
          prop="qustion"
          label="七张问题清单 （乡镇活跃账户总数）"
          width="120"
        />
        <el-table-column
          label="e行在线"
          style="--ep-text-color-secondary: rgba(204,241,255,0.8000);"
        >
          <el-table-column
            prop="a"
            label="应认领量"
            width="120"
          />
          <el-table-column
            prop="b"
            label="已认领量"
            width="120"
          />
          <el-table-column
            prop="c"
            label="认领率"
            width="120"
          />
        </el-table-column>
        <el-table-column
          label="社区矫正"
          style="--ep-text-color-secondary: rgba(204,241,255,0.8000);"
        >
          <el-table-column
            prop="d"
            label="应认领量"
            width="120"
          />
          <el-table-column
            prop="e"
            label="已认领量"
            width="120"
          />
          <el-table-column
            prop="f"
            label="认领率"
            width="120"
          />
        </el-table-column>
        <el-table-column
          prop="g"
          label="防台防汛"
          width="150"
        />
      </el-table>
    </div>
  </Popup>
</template>

<style lang="scss">
.more-pop {
  height: 100%;
  overflow: auto;

  --ep-fill-color-light: #073164 !important;
  --ep-border-color-lighter: rgba(0, 0, 0, 0.2500) !important;
  --ep-fill-color-blank: rgba(8, 40, 100, 0.6000);
  --ep-text-color-regular: #fff;
  --ep-text-color-secondary: #CCF1FF;
  ;
}
</style>