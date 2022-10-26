<script setup name="GovLeaders">
import MapView from './components/MapView/index.vue'
import Organization from './components/Organization/index.vue'
// import Appeal from './components/Appeal/index.vue'
// import PolicyDecision from './components/PolicyDecision.vue'
import ProblemWarning from './components/ProblemWarning/index.vue'
import PeoplesLivelihood from './components/PeoplesLivelihood/index.vue'
import CadreEvaluation from './components/CadreEvaluation.vue'
import CadreAnalysis from './components/CadreAnalysis/index.vue'
import Overwatch from './components/Overwatch.vue'
import ActualCombat from './components/ActualCombat/index.vue'
</script>

<template>
  <div class="gov-leaders bigscreen">
    <div class="left">
      <Organization />
      <!-- <Appeal /> -->
      <CadreAnalysis />
      <CadreEvaluation />
    </div>
    <div class="center">
      <MapView class="map" />
      <Overwatch />
    </div>
    <div class="right">
      <ProblemWarning />
      <PeoplesLivelihood />
      <!-- <PolicyDecision />  -->
      <ActualCombat />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gov-leaders {
  position: relative;
  padding: 19px 8px 20px 8px;

  display: grid;
  grid-template-columns: 27% auto 27%;
  grid-template-rows: 100%;
  grid-template-areas:
    'left center right';
  grid-gap: 16px 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;



  .left {
    grid-area: left;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 25% 25%;
    width: 100%;
    height: 100%;
  }

  .right {
    grid-area: right;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 25% 25%;
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
