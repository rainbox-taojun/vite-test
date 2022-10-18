<script setup name="Overwatch">
import { useAutoScroll } from '@/composables'

const list = ref([
  { adressDetail: '郭溪村', address: '瓯海区郭溪街道', date: '2022-09-30 12:00:00', content: '开展“走心洗楼”回头看活动。' },
  { adressDetail: '三合村', address: '瓯海区郭溪街道', date: '2022-09-30 12:00:00', content: '开展“走心洗楼”回头看活动。' },
  { adressDetail: '塘下村', address: '瓯海区郭溪街道', date: '2022-09-30 12:00:00', content: '开展“走心洗楼”回头看活动。' },
  { adressDetail: '郭溪社区', address: '瓯海区郭溪街道', date: '2022-09-30 12:00:00', content: '开展“走心洗楼”回头看活动。' },
  { adressDetail: '郭溪村', address: '瓯海区郭溪街道', date: '2022-09-30 12:00:00', content: '开展“走心洗楼”回头看活动。' },
  { adressDetail: '三合村', address: '瓯海区郭溪街道', date: '2022-09-30 12:00:00', content: '开展“走心洗楼”回头看活动。' },
  { adressDetail: '塘下村', address: '瓯海区郭溪街道', date: '2022-09-30 12:00:00', content: '开展“走心洗楼”回头看活动。' },
  { adressDetail: '郭溪社区', address: '瓯海区郭溪街道', date: '2022-09-30 12:00:00', content: '开展“走心洗楼”回头看活动。' },
])

useAutoScroll('.overwatch .list-wrap', '.overwatch .list-wrap>.list', 50)
</script>

<template>
  <div class="overwatch">
    <header>动态瞭望</header>
    <main>
      <header>
        <div class="day data-bar">
          <div class="label">今日发布量</div>
          <div class="value">
            <CountTo :endVal="235" />
          </div>
        </div>
        <div class="month data-bar">
          <div class="label">本月发布量</div>
          <div class="value">
            <CountTo :endVal="6815" />
          </div>
        </div>
      </header>
      <main class="list-wrap">
        <ul class="list">
          <li v-for="(item, index) in list">
            <div class="number">{{index}}</div>
            <div class="title">
              <span class="focus">{{item.adressDetail}}</span>
              <el-divider direction="vertical" />
              <span>{{item.address}}</span>
            </div>
            <div class="content">{{item.content}}</div>
            <div class="date">{{item.date}}</div>
          </li>
        </ul>
      </main>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.overwatch {
  height: 100%;

  &>header {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    height: 35px;
    font-size: 24px;
    font-family: PangMenZhengDao;
    color: #FFFFFF;
    line-height: 27px;
    letter-spacing: 2px;
    background-image: url(@/assets/villages-towns/panel-header-aligncenter_bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  &>main {
    padding: 19px 10px 10px 10px;
    height: calc(100% - 45px); // header 35 margin-bottom 10
    overflow: hidden;
    background-image: linear-gradient(rgba(52, 169, 255, 0.2300), rgba(2, 72, 123, 0));

    &>header {
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      height: 15%;

      .data-bar {
        padding: 0 20px 0 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(50% - 9px);
        height: 100%;
        background-image: url(@/assets/villages-towns/day-databar_bg.png);
        background-size: 100% 100%;

        &.month {
          background-image: url(@/assets/villages-towns/month-databar_bg.png);
        }

        .label {
          font-size: 14px;
          color: #FFFFFF;
          line-height: 14px;
        }

        .value {
          font-size: 18px;
          font-family: Arial-BoldMT, Arial;
          color: #07FFFF;
        }
      }
    }

    .list-wrap {
      height: calc(85% - 8px);
      overflow: hidden;
    }

    .list {
      list-style-type: none;
      margin: 0;
      padding: 0;


      li {
        padding: 13px 20px;
        display: grid;
        grid-template-columns: 40px auto 124px;
        grid-template-rows: 20px 16px;
        grid-template-areas:
          'number title date'
          'number content content';
        grid-gap: 6px 20px;
        background-image: url(@/assets/villages-towns/ow-list_bg.png);
        background-size: 100% 100%;

        .number {
          grid-area: number;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-family: zihun181hao-feichibiaotiti, zihun181hao;
          font-weight: normal;
          color: #FFFFFF;
          line-height: 22px;
          background-image: url(@/assets/villages-towns/ow-list-number_bg.png);
          background-size: 100% 100%;
        }

        .title {
          grid-area: title;
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #fff;
          line-height: 20px;

          .focus {
            color: #FFC24A;
          }
        }

        .date {
          grid-area: date;

          height: 16px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 16px;
        }

        .content {
          grid-area: content;

          height: 16px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          color: rgba(255, 255, 255, 0.8);
          line-height: 16px;
          overflow: hidden;
        }
      }
    }
  }
}
</style>