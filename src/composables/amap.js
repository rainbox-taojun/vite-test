/**
 * 高德地图简单封装
 */
import AMapLoader from '@amap/amap-jsapi-loader'
import { onBeforeMount } from 'vue'

export function useAMap ({
  container = 'container',  // 地图容器
  callback = () => { },      // 初始化后的回调
  ...mapConfig              // 其他配置
}) {
  const map = shallowRef(null)

  const createMap = () => {

    AMapLoader.load({
      key: import.meta.env.VITE_APP_MAP_KEY,                // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0',                                        // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: mapConfig.plugins || [''],                   // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap) => {
      map.value = new AMap.Map(container, {                  //设置地图容器id
        viewMode: mapConfig.viewMode || '3D',               //是否为3D地图模式
        zoom: mapConfig.zoom || 5,                          //初始化地图级别
        center: mapConfig.center || [105.602725, 37.076636], //初始化地图中心点位置
        ...mapConfig
      })
      callback()
    }).catch(e => {
      console.log(e)
    })
  }

  onBeforeMount(() => {
    window._AMapSecurityConfig = {
      securityJsCode: 'ab6716d65754422ff0c996ec43000d17'
      // serviceHost: '/_AMapService',
    }
  })

  onMounted(() => {
    createMap()
  })

  return { map }
}



