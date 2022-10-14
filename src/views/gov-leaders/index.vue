<script setup name="GovLeaders">
import MapView from './components/MapView/index.vue'
import Organization from './components/Organization/index.vue'
import AppealUp from './components/AppealUp.vue'
import AppealDown from './components/AppealDown.vue'
import PolicyDecision from './components/PolicyDecision.vue'
import ProblemWarning from './components/ProblemWarning/index.vue'
import PeoplesLivelihood from './components/PeoplesLivelihood/index.vue'
import CadreEvaluation from './components/CadreEvaluation.vue'
import Overwatch from './components/Overwatch.vue'
</script>

<template>
  <div class="gov-leaders bigscreen">
    <MapView class="map" />

    <div class="left">
      <Organization />
      <AppealUp />
      <PolicyDecision />
      <AppealDown />
    </div>
    <div class="center-bottom">
      <Overwatch />
    </div>
    <div class="right">
      <ProblemWarning />
      <PeoplesLivelihood />
      <CadreEvaluation />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gov-leaders {
  position: relative;
  padding: 2.9vh 1vw 1.8vh 1vw;

  display: grid;
  grid-template-columns: 27vw auto 27vw;
  grid-template-rows: repeat(2, calc((100% - 16px) / 2));
  grid-template-areas:
    'left map right'
    'left center-bottom right';
  grid-gap: 16px 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .map {
    grid-area: map;

    width: 100%;
    height: 100%;
  }

  .left {
    grid-area: left;

    display: grid;
    grid-template-columns: repeat(2, calc(50% - 20px / 2));
    grid-template-rows: 50% 30% 20%;
    grid-gap: 0 20px;
    width: 27vw;
    height: 100%;
  }

  .right {
    grid-area: right;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: calc(50% - 20px) calc(30% - 10px) calc(20% - 10px);
    grid-gap: 20px;
    width: 27vw;
    height: 100%;
  }

  .center-bottom {
    grid-area: center-bottom;

    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
