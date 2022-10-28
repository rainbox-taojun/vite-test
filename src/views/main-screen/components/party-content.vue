<template>
  <div class="party-content">
    <dl class="left-con">
      <div class="party-num">
        <div class="line"></div>
        <div class="line tow"></div>
        <div class="line three"></div>
        <ul
          ><li>党员 <span>1814</span></li
          ><li>党总支 <span class="second">2630</span></li
          ><li>党支部 <span>32002</span></li></ul
        >
      </div>
    </dl>
    <dl class="rigth-con">
      <div class="zheng-shi">
        <img src="../images/icon1.png" /> 正式党员 <p class="num-font pl50">497995</p></div
      >
      <div class="zheng-shi bian-zhi">
        <p> <img src="../images/icon1.png" /> 编制周转池 <span class="num-font">542</span></p>
        <p class="pl50">占比<span class="num-font"> 87.9%</span></p>
      </div>
    </dl>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .party-content {
    display: flex;
    width: 100%;
    dl {
      flex: 1;
    }
    .rigth-con {
      display: flex;
      div {
        flex: 1;
        margin-right: 15px;
      }
    }
    .num-font {
      font-size: 18px;
      color: #0fffff;
    }
    .party-num {
      position: relative;
      background: url('../images/xingzhuang1.png') no-repeat 0 50%;
      height: 100px;
      .line {
        width: 80px;
        height: 1px;
        position: absolute;
        top: 15px;
        left: 160px;
        background: #0fffff;
        &.tow {
          top: 48px;
          left: 165px;
        }
        &.three {
          top: 82px;
          left: 170px;
        }
      }
      li {
        line-height: 33px;
        margin-left: 70px;
        span {
          padding-left: 150px;
          color: #0fffff;
          font-size: 18px;
          &.second {
            padding-left: 140px;
          }
        }
      }
    }
    .zheng-shi {
        margin-top: 20px;
      width: 190px;
      height: 78px;
      padding: 10px;
      .pl50 {
        padding-left: 50px;
      }
      img {
        margin-right: 10px;
        vertical-align: middle;
      }
      background: linear-gradient(180deg, rgba(52, 176, 255, 0.3) 0%, rgba(0, 173, 255, 0) 100%);
      border-radius: 4px;
      opacity: 1;
      border: 1px solid;
      border-image: radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1 1;
    }
  }
</style>

<style></style>
