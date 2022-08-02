<script setup name="Home">
import MapView from './components/MapView/index.vue'

import LeftBar from './components/Sidebar/LeftBar.vue'
import RightBar from './components/Sidebar/RightBar.vue'

import CitySigns from './components/CitySigns.vue'
import Assessment from './components/Assessment/index.vue'
import ScenarioApp from './components/ScenarioApp.vue'
import MissionStatus from './components/MissionStatus/index.vue'
import EventHot from './components/EventHot.vue'
import SmartElement from './components/SmartElement/index.vue'
import GovLeaders from './components/GovLeaders/index.vue'
import EconomicEcology from './components/EconomicEcology.vue'
import LawInfo from './components/LawInfo.vue'
import PublicService from './components/PublicService.vue'
</script>

<template>
  <div class="home bigscreen">
    <MapView class="map" />

    <LeftBar>
      <aside class="left">
        <GovLeaders />
        <EconomicEcology />
        <LawInfo />
        <PublicService />

      </aside>
    </LeftBar>

    <RightBar>
      <template v-slot:center>
        <section class="center">
          <CitySigns />
          <Assessment />
          <ScenarioApp />
        </section>
      </template>

      <template v-slot:right>
        <aside class="right">
          <MissionStatus />
          <EventHot />
          <SmartElement />
        </aside>
      </template>
    </RightBar>
  </div>
</template>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .map {
    width: 100%;
    height: 100%;
  }

  .left {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 28% 28% 20% 24%;
    grid-gap: 0px;
    height: 100%;
  }

  .right {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, calc(33.3% - 40px / 3));
    grid-gap: 20px;
    height: 100%;
  }

  .center {
    display: grid;
    grid-template-columns: 100%;
    ;
    grid-template-rows: calc(30% - 40px / 3) calc(30% - 40px / 3) calc(40% - 40px / 3);
    grid-gap: 20px;
    height: 100%;
    overflow: hidden;
  }
}
</style>
