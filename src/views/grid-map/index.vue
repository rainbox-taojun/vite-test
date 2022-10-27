<template>
  <div class="container">
    <div id="mapContent"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { ElMessage, ElMessageBox, ElLoading } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import {
  initMap,
  loadData,
  queryInitOrgCode,
} from "@/utils/map";
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  let orgCode = await queryInitOrgCode(route.query.name);
  // console.log("orgCode", orgCode);
  initMap('mapContent');
  loadData(orgCode);
});
</script>
  
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

#mapContent {
  width: 100%;
  height: 100%;
}
</style>
  