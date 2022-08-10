import { useMapPolygon, useMapMarker } from '@/composables'
import wenzhouGeo from '@/assets/geoJson/Wenzhou'
import { loadGeoJsonFile } from '../tools'

import Store from '../store'

const { createPolygon } = useMapPolygon()

export function useArea () {
  const mapStore = Store

  const currentSubArea = ref({}) // 当前所在行政区下的子区域
  const polygonList = ref([]) // 多边形列表（某个行政区可能会存在多个多边形）

  // 初始化
  const initAreas = (map) => {
    mapStore.center = map.value.getCenter()//获取当前地图中心
    mapStore.zoom = map.value.getZoom() //获取当前地图级别
    checkDistrict(map) // 获取当前行政区
    createAreas(map) // 创建区域多边形
    mapEvent(map)
  }

  // 删除当前显示在地图上的多边形 和 标记点
  const delAreas = map => {
    polygonList.value.map(polygon => {
      polygon.destroy()
    })
  }

  // 判断是那个行政区
  const checkDistrict = map => {
    wenzhouGeo.features.map(item => {
      if (item.geometry.coordinates.some(path => mapStore.checkCenterInPolygon(path))) {
        mapStore.district = item.properties
      }
    })
  }

  // 创建多边形
  const createAreas = map => {
    if (mapStore.level === 'district') {
      createLevel1(map)
    } else if (mapStore.level === 'street') {
      const fileName = 'map_' + mapStore.getDistrictNamePinying() + '.js' // 准备导入的文件名称
      createLevel2or3(map, fileName)
    } else {
      const fileName = 'grid_' + mapStore.getDistrictNamePinying() + '.js' // 准备导入的文件名称
      createLevel2or3(map, fileName)
    }
  }

  const findArea = (arr, name) => {
    return arr.features.find(item => item.properties.name === name)
  }

  // 创建level-1 区县多边形
  const createLevel1 = map => {
    findArea(wenzhouGeo, mapStore.district.name)
      .geometry
      .coordinates
      .map(item => {
        const polygon = createPolygon(map, item)
        polygonList.value.push(polygon)
      })
  }

  const createLevel2or3 = async (map, fileName) => {
    const data = await loadGeoJsonFile(fileName)//获取到文件内数据

    let coordinates = []

    data.features.map(item => {
      // 配对地图中心点在哪个多边形内
      if (item.geometry.coordinates.some(path => mapStore.checkCenterInPolygon(path))) {
        currentSubArea.value = item.properties
        coordinates = item.geometry.coordinates
      }
    })
    polygonList.value = []
    delAreas(map) // 删除旧的
    coordinates.map(item => {
      const polygon = createPolygon(map, item)
      polygonList.value.push(polygon)
    })
  }

  const mapEvent = map => {
    // 中心点移动
    map.value.on('moveend', () => {
      const oldCenter = mapStore.center
      mapStore.center = map.value.getCenter()

      if (oldCenter.lat !== mapStore.center.lat || oldCenter.lng !== mapStore.center.lng) {
        delAreas(map) // 删除旧的
        checkDistrict(map) // 得到新的中心点所在行政区数据
        createAreas(map)
      }
    })

    // 缩放
    map.value.on('zoomend', () => {
      mapStore.zoom = map.value.getZoom() //获取当前地图级别
    })
  }

  // 多边形显示
  const showAreas = () => {
    polygonList.value.map(polygon => {
      polygon.show()
    })
  }

  // 多边形隐藏
  const hideAreas = () => {
    polygonList.value.map(polygon => {
      polygon.hide()
    })
  }

  return {
    initAreas,
    showAreas,
    hideAreas
  }
}