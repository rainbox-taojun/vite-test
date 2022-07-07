<script setup name="App">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider
    namespace="ep"
    :locale="zhCn"
  >
    <router-view />
  </el-config-provider>
</template>



