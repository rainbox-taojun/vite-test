import { useMapPolygon, useMapMarker } from '@/composables'
import wenzhouGeo from '@/assets/geoJson/Wenzhou'
import { districtNameToPinying, loadGeoJsonFile, getTheAreaCenter } from '../tools'

import Store from '../store'

const { createPolygon } = useMapPolygon()
const { createMarker } = useMapMarker()

const typeRange = [
  { name: 'district', min: 0, max: 12.99 },
  { name: 'street', min: 13, max: 14.99 },
  { name: 'grid', min: 15, max: 99 }
]

export function useAreaAndPoint () {
  const currentCenter = ref('') // 当前中心点
  const currentLevel = ref('district') // 当前层级 district street grid
  const currentZoom = ref() // 缩放等级
  const currentDistrict = ref({}) // 当前行政区
  const currentSubArea = ref({}) // 当前所在行政区下的子区域
  const polygonList = ref([]) // 多边形列表（某个行政区可能会存在多个多边形）
  const pointList = ref([]) // 点列表

  // 初始化
  const initAreas = (map) => {
    currentCenter.value = map.value.getCenter()//获取当前地图中心
    currentZoom.value = map.value.getZoom() //获取当前地图级别
    checkDistrict(map) // 获取当前行政区
    createAreas(map) // 创建区域多边形
    createPoint(map) // 创建点
    mapEvent(map)
  }

  // 删除当前显示在地图上的多边形 和 标记点
  const delAreasAndPoint = map => {
    polygonList.value.map(polygon => {
      polygon.destroy()
    })

    pointList.value.map(item => {
      item.setMap(null);
    })
  }

  // 判断是那个行政区
  const checkDistrict = map => {
    wenzhouGeo.features.map(item => {
      if (item.geometry.coordinates.some(path => checkCenterInPolygon(path))) {
        currentDistrict.value = item.properties
      }
    })
  }

  // 创建多边形
  const createAreas = map => {
    if (currentLevel.value === 'district') {
      createLevel1(map)
    } else if (currentLevel.value === 'street') {
      const fileName = 'map_' + districtNameToPinying(currentDistrict.value.name) + '.js' // 准备导入的文件名称
      createLevel2or3(map, fileName)
    } else {
      const fileName = 'grid_' + districtNameToPinying(currentDistrict.value.name) + '.js' // 准备导入的文件名称
      createLevel2or3(map, fileName)
    }
  }

  // 创建点
  const createPoint = async (map) => {
    if (currentDistrict.value.name) {
      pointList.value = []
      const fileName = (currentLevel.value === 'district' ? 'map_' : 'grid_') + districtNameToPinying(currentDistrict.value.name) + '.js'
      const data = await loadGeoJsonFile(fileName)//获取到文件内数据
      data.features.map(item => {
        console.log(item.properties)
        const center = item.properties?.center ? item.properties?.center : getTheAreaCenter(item.geometry.coordinates)
        const marker = createMarker(map, center)
        pointList.value.push(marker)
      })
    }
  }

  const findArea = (arr, name) => {
    return arr.features.find(item => item.properties.name === name)
  }

  // 创建level-1 区县多边形
  const createLevel1 = map => {
    findArea(wenzhouGeo, currentDistrict.value.name)
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
      if (item.geometry.coordinates.some(path => checkCenterInPolygon(path))) {
        currentSubArea.value = item.properties
        coordinates = item.geometry.coordinates
      }
    })
    polygonList.value = []
    delAreasAndPoint(map) // 删除旧的
    coordinates.map(item => {
      const polygon = createPolygon(map, item)
      polygonList.value.push(polygon)
    })
  }

  // 判断中心点是否在多边形中
  const checkCenterInPolygon = path => {
    return AMap.GeometryUtil.isPointInRing(currentCenter.value, path);
  }



  const mapEvent = map => {
    // 中心点移动
    map.value.on('moveend', () => {
      const oldCenter = currentCenter.value
      currentCenter.value = map.value.getCenter()

      if (oldCenter.lat !== currentCenter.value.lat || oldCenter.lng !== currentCenter.value.lng) {
        delAreasAndPoint(map) // 删除旧的
        checkDistrict(map) // 得到新的中心点所在行政区数据
        createAreas(map)
        createPoint(map)
      }
    })

    // 缩放
    map.value.on('zoomend', () => {
      currentZoom.value = map.value.getZoom() //获取当前地图级别

      const newType = typeRange.find(item => currentZoom.value >= item.min && currentZoom.value < item.max)

      currentLevel.value = newType.name
    })
  }

  // 多边形显示
  const showAreas = () => {
    polygonList.map(polygon => {
      polygon.show()
    })
  }

  // 多边形隐藏
  const hideAreas = () => {
    polygonList.map(polygon => {
      polygon.hide()
    })
  }

  return {
    initAreas,
    showAreas,
    hideAreas
  }
}