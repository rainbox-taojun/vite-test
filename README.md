# 简单的几条开发约定

## 代码风格

### .vue 文件结构

.vue 文件请遵循以下结构

```
<script setup name="模块名">
</script>

<template>
</template>

<style>
</style>
```

1. 模块名要与文件名一致，使用帕斯卡命名法进行命名。
2. 当文件名为 index.vue 时，首字母小写。
3. template 标签中需要有一个父级元素，并且 class 与模块名对应，格式使用全小写使用`-`分割。

### 其他

- 建议不写分号(;)，`<style>`标签除外
- `<script>`标签中以及 js 文件中使用单引号( '' )，`<template>`标签中使用双引号( "" )

以上是 vue 官方 demo 的代码风格。~~当然不这样写我也拦不住你...~~

## 依赖自动 import

当前支持自动导入的部分：

- Vue 相关函数，如：ref, reactive, toRef 等
- Element Plus 组件
- Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
- @element-plus/icons-vue 图标（通过在 icon 组件前加 i-el 前缀，如`<i-ep-expand />`即可直接使用）
- `/src/components`目录下的组件（不包含第三级开始的子组件）

  请不要额外写多余的 import，保持页面简洁。

## 公共组件

目录：`/src/components` 业务相关的组件不要放入。

## Echarts 图表组件开发

通过`import { useEcharts } from '@/composables'`去使用

## composables

提供了几个组合式函数：

- amap.js：高德地图简单封装
- autoScroll.js：让有滚动条的内容自动滚动
- echarts.js：echarts 图表封装
- event.js：原始 js 事件监听
- mouse.js：鼠标事件监听
