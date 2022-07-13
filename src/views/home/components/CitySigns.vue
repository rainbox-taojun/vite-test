<script setup>
// 城市体征
// import { getCitySigns } from '@/api'
import air from '@/assets/city-icon_air.png'
import changyou from '@/assets/city-icon_changyou.png'
import gdp from '@/assets/city-icon_gdp.png'
import jiaotong from '@/assets/city-icon_jiaotong.png'
import pingan from '@/assets/city-icon_pingan.png'
import zhian from '@/assets/city-icon_zhian.png'

const list = ref([
  { img: zhian, name: '治安评估指数', value: '96.0', tag: '优秀' },
  { img: jiaotong, name: '交通运行指数', value: '1.3', tag: '畅行' },
  { img: gdp, name: 'GDP增速', value: '6.1', tag: '中速增长' },
  { img: air, name: '实时空气质量', value: '26.0', tag: '良好' },
  { img: pingan, name: '平安治理指数', value: '94.6', tag: '平安' },
  { img: changyou, name: '畅游指数', value: '26.0', tag: '宜游' },
  { img: jiaotong, name: '智控指数', value: '93.63', tag: '第八名' },
  { img: gdp, name: '民营经济健康指数', value: '90.3', tag: '健康' },
])

// const getList = async () => {
//   const res = await getCitySigns()
//   if (res.code === 200) {
//     list.value = res.data
//   }
// }

// onMounted(() => {
//   getList()
// })

const currentScroll = ref(0)
const handleScroll = () => {
  currentScroll.value += 1
  const box = document.querySelector('.city-signs > main')
  const step = list.value.length / 2
  let distance = box.offsetHeight / step
  if (currentScroll.value >= step) {
    currentScroll.value = 0
  }
  box.scrollTo(0, currentScroll.value * distance)
}

onMounted(() => {
  handleScroll()
  setInterval(() => {
    handleScroll()
  }, 5000)
})
</script>

<template>
  <PanelV1
    title="城市体征"
    class="city-signs"
  >
    <ul
      class="list"
      ref="listRef"
    >
      <li
        v-for="item in list"
        class="list-item"
      >
        <div
          class="icon"
          :style="{ backgroundImage: `url(${item.img})` }"
        />
        <div
          class="name"
          :title="item.name"
        >
          {{ item.name }}
        </div>
        <div class="value">{{ item.value }}</div>
        <div class="tag">{{ item.tag }}</div>
      </li>
    </ul>
  </PanelV1>
</template>

<style lang="scss" scoped>
:deep(.city-signs > main) {
  scroll-behavior: smooth;
}

.city-signs {


  .list {
    list-style-type: none;
    margin: 10px 18px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    .list-item {
      margin-bottom: 12px;
      padding: 11px 10px;
      display: grid;
      grid-template-columns: 60px auto;
      grid-template-rows: 19px 24px 20px;
      grid-template-areas:
        'icon name'
        'icon value'
        'icon tag';
      column-gap: 14px;
      width: calc(50% - 6px);
      height: 83px;
      background: #082864;

      &:nth-child(even) {
        margin-left: 12px;
      }

      .icon {
        grid-area: icon;
        background-size: contain;
        background-repeat: no-repeat;
      }

      .name {
        grid-area: name;
        height: 19px;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 19px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .value {
        grid-area: value;
        height: 24px;
        font-size: 18px;
        color: #FFFFFF;
        line-height: 24px;
      }

      .tag {
        grid-area: tag;
        padding: 3px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        height: 20px;
        font-size: 12px;
        color: #38F7A4;
        background: #065361;
        border-radius: 2px;
      }
    }
  }
}
</style>