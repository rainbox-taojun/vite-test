<script setup>
// 场景应用
const currentTab = ref('leader')
const tabs = ref([
  { label: '党政统领', key: 'leader' },
  { label: '经济生态', key: 'economic' },
  { label: '平安法治', key: 'law' },
  { label: '公共服务', key: 'public' },
])

const list = ref([
  { label: '文成生态环保', tag: '市监管局' },
  { label: '文成生态环保', tag: '市监管局' },
  { label: '文成生态环保', tag: '市监管局' },
  { label: '文成生态环保', tag: '市监管局' }
])
</script>

<template>
  <PanelV1
    title="场景应用"
    class="scenario-app"
  >
    <template v-slot:title-right>
      <router-link to="/">全部></router-link>
    </template>

    <div class="wrap">
      <nav class="tabs">
        <ul>
          <template v-for="item in tabs">
            <li
              :class="{ active: currentTab === item.key }"
              @click="currentTab = item.key"
            >
              {{ item.label }}
            </li>
            <el-divider direction="vertical" />
          </template>

        </ul>
      </nav>

      <ul class="list">
        <li
          v-for="item in list"
          class="list-item"
        >
          <h2>{{ item.label }}</h2>
          <div class="tag">{{ item.tag }}</div>
        </li>
      </ul>
    </div>
  </PanelV1>
</template>

<style lang="scss" scoped>
.scenario-app {
  .wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;

    .tabs {
      margin: 8px 18px;
      height: 24px;
      background-image: url(@/assets/scenario-app-nav_bg.png);
      background-size: 100% 100%;

      ul {
        margin: 0;
        padding: 3px 1.5vw;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 18px;

        .ep-divider:last-child {
          display: none;
        }

        li {
          opacity: .7;
          box-sizing: border-box;
          cursor: pointer;
          // overflow: hidden;
          // text-overflow: ellipsis;
          // white-space: nowrap;

          &.active {
            opacity: 1;
          }
        }
      }
    }

    .list {
      list-style-type: none;
      margin: 0px;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      height: calc(100% - 24px);
      overflow-y: auto;
      overflow-x: hidden;

      .list-item {
        margin-left: 18px;
        margin-right: 0;
        margin-bottom: 9px;
        padding: 13px 20px;
        width: calc(50% - 4.5px - 18px);
        height: 94px;
        background-image: url(@/assets/scenario-app-card_bg.png);
        background-size: 100% 100%;

        &:nth-child(even) {
          margin-left: 9px;
          margin-right: 18px;
        }

        &>h2 {
          margin: 0;
          font-size: 16px;
          color: #FFFFFF;
          line-height: 20px;
        }

        .tag {
          padding: 2px 8px;
          width: fit-content;
          height: 20px;
          font-size: 12px;
          color: #A3E5FF;
          background: rgba(50, 197, 255, 0.1000);
          border-radius: 2px;
          border: 1px solid rgba(50, 197, 255, 0.6000);
        }
      }
    }
  }
}
</style>