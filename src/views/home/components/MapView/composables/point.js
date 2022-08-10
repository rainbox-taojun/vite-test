import wenzhouGeo from '@/assets/geoJson/Wenzhou'
import { useMapMarker } from '@/composables'
import Store from '../store'
import { loadGeoJsonFile, getTheAreaCenter } from '../tools'

const { createMarker } = useMapMarker()

export function usePoint () {
  const mapStore = Store

  const pointList = ref([]) // 点列表

  const initPoint = (map) => {
    createPoint(map) // 创建点
    mapEvent(map)
  }

  // 删除当前显示在地图上标记点
  const delPoint = map => {
    pointList.value.map(item => {
      item.setMap(null);
    })
  }

  // 创建点
  const createPoint = async (map) => {
    if (mapStore.district.name) {
      pointList.value = []
      const fileName = (mapStore.level === 'district' ? 'map_' : 'grid_') + mapStore.getDistrictNamePinying() + '.js'
      const data = await loadGeoJsonFile(fileName)//获取到文件内数据
      data.features.map(item => {
        console.log(item.properties)
        const center = item.properties?.center ? item.properties?.center : getTheAreaCenter(item.geometry.coordinates)
        const marker = createMarker(map, center)
        pointList.value.push(marker)
      })
    }
  }

  const mapEvent = map => {
    // 中心点移动
    map.value.on('moveend', () => {
      delPoint(map) // 删除旧的
      createPoint(map)
    })
  }

  // 多边形显示
  const showPoint = () => {
    pointList.value.map(Point => {
      Point.show()
    })
  }

  // 多边形隐藏
  const hidePoint = () => {
    pointList.value.map(Point => {
      Point.hide()
    })
  }

  return {
    initPoint,
    showPoint,
    hidePoint
  }
}