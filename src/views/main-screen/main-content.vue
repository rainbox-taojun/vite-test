<script setup name="温州主屏">
  import PartyContent from './components/party-content.vue'
</script>

<template>
  <div class="gov-leaders bigscreen">
    <div class="left">
      <PanelV3 class="header-title" title="党建统领">
        <party-content />
      </PanelV3>
      <PanelV3 class="header-title" title="大综合一体化">
        <div class="organization-content">
          <h1>大综合一体化</h1>
        </div>
      </PanelV3>
      <PanelV3 class="header-title" title="四治融合">
        <div class="organization-content">
          <h1>四治融合</h1>
        </div>
      </PanelV3>
      <PanelV3 class="header-title" title="共同富裕基本单元">
        <div class="organization-content">
          <h1>共同富裕基本单元</h1>
        </div>
      </PanelV3>
    </div>
    <div class="center"> 中间地图 </div>
    <div class="right">
      <PanelV3 class="header-title" title="县级中心运行质效">
        <div class="organization-content">
          <h1>县级中心运行质效</h1>
        </div>
      </PanelV3>
      <PanelV3 class="header-title" title="基层治理四平台运行质效">
        <div class="organization-content">
          <h1>基层治理四平台运行质效</h1>
        </div>
      </PanelV3>
      <PanelV3 class="header-title" title="网格智治运行质效">
        <div class="organization-content">
          <h1>网格智治运行质效</h1>
        </div>
      </PanelV3>
      <PanelV3 class="header-title" title="应用贯通">
        <div class="organization-content">
          <h1>应用贯通</h1>
        </div>
      </PanelV3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .gov-leaders {
    position: relative;
    padding: 19px 8px 20px 8px;
    display: grid;
    grid-template-columns: 33% auto 33%;
    grid-template-rows: 100%;
    grid-template-areas: 'left center right';
    grid-gap: 16px 30px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .left {
      grid-area: left;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 20% 20% 30% 30%;
      width: 100%;
      height: 100%;
    }

    .right {
      grid-area: right;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 20% 20% 40% 20%;
      width: 100%;
      height: 100%;
    }

    .center {
      grid-area: center;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 60% 40%;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>
