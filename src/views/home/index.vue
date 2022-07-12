<script setup name="Home">
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
import MapView from './components/MapView/index.vue'
</script>

<template>
  <div class="home bigscreen">
    <aside class="left">
      <CitySigns />
      <Assessment />
      <ScenarioApp />
    </aside>
    <section class="center">
      <GovLeaders />
      <EconomicEcology />
      <LawInfo />
      <PublicService />
      <MapView class="map" />
    </section>
    <aside class="right">
      <MissionStatus />
      <EventHot />
      <SmartElement />
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 21vw auto 21vw;
  grid-template-rows: 100%;
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 7, 46, 1);

  &>.left,
  &>.right {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, calc(33.3% - 40px / 3));
    grid-gap: 20px;
    height: 100%;
  }

  &>.center {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 10px));
    ;
    grid-template-rows: calc(30% - 40px / 3) calc(30% - 40px / 3) calc(40% - 40px / 3);
    grid-gap: 20px;
    height: 100%;
    overflow: hidden;

    .map {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
}
</style>
