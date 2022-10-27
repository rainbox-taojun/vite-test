<script setup name="AppHeader">
import Timestamp from './components/Timestamp.vue'
import UserMenu from './components/UserMenu.vue'
import { useEventListener } from '@/composables'

const route = useRoute()
const currentRoute = computed(() => route.path.value)
const leftRoutes = ref([
  { path: '/gov-leaders', name: '党建统领', target: '_self' },
  { path: 'http://59.202.23.34:8186/tq-bigscreen-web/#/share/1573918951371907073?token=eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbl91c2VyX2lkIjoxLCJ0b2tlbl9jcmVhdGVfdGltZSI6MTY2NDE2NjMwNDIyMiwic3ViIjoiamRlbmciLCJ0b2tlbl91c2VyX25hbWUiOiJqZGVuZyIsImV4cCI6MTY2NDI1MjcwNCwidG9rZW5fdGVuYW50X2lkIjoiMDAwMDAwIiwidG9rZW5fdXNlcl9wYXNzd29yZCI6IiQyYSQxMCRjWnRXYVJ5MU13UGZUSll3UmQzcTRPN2ZMT3NSZTNYbEc5VDhqSVQvU1Q4bHFVdXMvV2ZmSyJ9.fk77AxbFUt0DOERDKhO-1z3dXvzxu9s3HeR7fz8SIKI1NT2yp-9GYn6zFEa9N0l7XTIy3g0T_Bc4e0Z-JNvfLg&shareToken=none', name: '经济生态', target: '_blank' },
])
const rightRoutes = ref([
  { path: '', name: '平安法治' },
  { path: 'https://wzdxst-citybrain.wenzhou.gov.cn/shareScreen/eyJzY3JlZW5JZCI6NzMzfQ==', name: '公共服务', target: '_self' },
])

const home = ref('https://wzdxst-citybrain.wenzhou.gov.cn/shareScreen/eyJzY3JlZW5JZCI6NzIzfQ==')

// title缩放控制
const screenWidth = ref(document.body.clientWidth)
const titleScaleX = computed(() => screenWidth.value / 1920)

useEventListener(window, 'resize', () => {
  screenWidth.value = document.body.clientWidth
})

const jumpTo = (path, target) => {
  if (!path || path === '/gov-leaders') return
  window.open(path, target)
}
</script>

<template>
  <div class="app-header">
    <Timestamp />
    <div class="left-menu">
      <div
        v-for="item in leftRoutes"
        :key="item.path"
        class="menu-item"
        :class="{ active: route.path === item.path }"
        @click="jumpTo(item.path, item.target)"
      >
        <span class="menu-item-text">{{ item.name }}</span>
      </div>
    </div>
    <div
      class="title"
      @click="jumpTo(home, '_self')"
    >
      <span>
        郭溪街道综合信息指挥平台
      </span>
    </div>
    <div class="right-menu">
      <div
        v-for="item in rightRoutes"
        :key="item.path"
        class="menu-item"
        :class="{ active: route.path === item.path }"
        @click="jumpTo(item.path, item.target)"
      >
        <span class="menu-item-text">{{ item.name }}</span>
      </div>
    </div>
    <UserMenu />
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/villages-towns/header_bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .left-menu,
  .right-menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .menu-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 128.46px;
      height: 28.75px;
      font-size: 18px;
      font-family: PangMenZhengDao;
      color: #FFFFFF;
      line-height: 21px;
      background-image: url(@/assets/villages-towns/header-tab_bg.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center center;
      cursor: pointer;
      transition: transform 0.3s ease-out;

      &.active {
        background-image: url(@/assets/villages-towns/header-tab-active_bg.png);
      }

      &:hover {
        transform: translateY(-5px);
      }

      &:first-child {
        margin-right: 34px;
      }
    }
  }

  .right-menu .menu-item {
    transform: scaleX(-1);

    &:hover {
      transform: scaleX(-1) translateY(-5px);
    }
  }

  .right-menu .menu-item .menu-item-text {
    transform: scaleX(-1);
  }

  .user-menu {
    justify-content: flex-end;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    width: 25%;
    transform-origin: center center;

    span {
      height: 100%;
      font-weight: bolder;
      font-style: oblique;
      color: rgb(255, 255, 255);
      font-size: 32px;
      line-height: 42px;
      text-indent: 1px;
      background: linear-gradient(#fff, #ABE4FF);
      color: transparent;
      -webkit-background-clip: text;
    }
  }
}
</style>