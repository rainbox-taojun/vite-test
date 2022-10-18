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

    <div class="left">
      <Organization />
      <AppealUp />
      <PolicyDecision />
      <AppealDown />
    </div>
    <div class="center">
      <MapView class="map" />
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
    grid-template-columns: repeat(2, calc(50% - 20px / 2));
    grid-template-rows: 50% 30% 20%;
    grid-gap: 0 20px;
    width: 100%;
    height: 100%;
  }

  .right {
    grid-area: right;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: calc(53% - 20px) calc(30% - 10px) calc(17% - 10px);
    grid-gap: 20px;
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
