<script setup>
// 场景应用
const currentTab = ref('leader')
const tabs = ref([
  { label: '党政统领', key: 'leader' },
  { label: '经济生态', key: 'economic' },
  { label: '平安法治', key: 'law' },
  { label: '公共服务', key: 'public' },
])

const list = computed(() => {
  switch (currentTab.value) {
    case 'leader':
      return [
        { label: '1. 政务督查“掌上钉”', link: 'https://dingdingducha.wenzhou.gov.cn/dbyw.html#/daping' }
      ]
    case 'economic':
      return [
        { label: "惠企政策“直通车”", link: 'https://reward.wenzhou.gov.cn/app/dashboard/wznew_dashboard' },
        { label: "经济一张图", link: 'https://sourcelayer.wzcitybrain.com/economic/#/Economic' },
        { label: "温州金融综合服务平台", link: 'https://www.wzjrfw.com/big/bigIndex' },
        { label: "大建大美城市建设平台", link: 'https://wzdjdm.wzcitybrain.com:8888/html/overview/index.html?accessToken=eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnRfaWQiOiIzNjMzODMiLCJyb2xlX25hbWUiOiLln47luILlpKfohJEiLCJ1c2VyX2lkIjoiMTI4MDM4NjI4ODU4MTA5OTUyMSIsInJvbGVfaWQiOiIxMjcwMjM5NjcyODYyOTUzNDc0IiwidXNlcl9uYW1lIjoiZGpkbSIsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJkZXB0X2lkIjoiMTI2OTkxMjkxMzEyNjg1MDU2MiIsImFjY291bnQiOiJkamRtIiwiZXhwIjoxNjU3NjIzMDAwfQ.1LrIjiE1J7uc3dlCug86M1CAbFru2_256nCU2AsN5aU&userName=%E5%9F%8E%E5%B8%82%E5%A4%A7%E8%84%91' },
        { label: "科企通·科技服务一线牵", link: 'https://dn.wzkj.gov.cn/innovation/pages/policy/policy-dp-index' }
      ]
    case 'law':
      return [
        { label: '温州城市综合管理服务平台', link: 'https://wzzhcg.wzcitybrain.com/#/app/facility_s2' },
        { label: '违停预警“8分钟”', link: 'https://wzsfj.fykjlw.com:82/um3/index.html?sceneId=4a8c505633f24e60957b5d90535bd5af' },
        { label: '鹿城区智慧应急一张图', link: 'https://map.wzsafety.gov.cn:9005/#/state' },
        { label: '“温警在线”健康码核验数据驾驶舱', link: 'https://healthcode.wzga.gov.cn/HCNavi' }
      ]
    case 'public':
      return [
        { label: '运营智管监控平台', link: 'https://wzdxnx.wzcitybrain.com/znyyjkpt/#/' },
        { label: '疫情防控作战图', link: 'https://sourcelayer.wzcitybrain.com:8015/#/' },
        { label: '温州医疗机构医疗行为智能监管平台', link: 'https://yljgyylxwznjgpt.wenzhou.gov.cn/invs/invs_home_page.do' },
        { label: '全域文旅大数据平台', link: 'https://sjzx-citybrain.wenzhou.gov.cn/#/ControlChart' }
      ]
  }
})

const jumpTo = (link) => {
  window.open(link, '_blank')
}
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
          @click="() => jumpTo(item.link)"
        >
          <h2>{{ item.label }}</h2>
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
        cursor: pointer;

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