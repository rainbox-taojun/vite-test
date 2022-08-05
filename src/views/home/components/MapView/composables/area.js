import { useMapPolygon } from '@/composables'
import wenzhouGeo from '@/assets/geoJson/Wenzhou'


const { createPolygon } = useMapPolygon()

export function useArea () {
  const currentLevel = ref('') // 当前层级
  const currentArea = ref('') // 当前区域
  const polygonList = ref([]) // 多边形列表

  // 创建多边形
  const createAreas = (map) => {
    wenzhouGeo.features.map(item => {
      item.geometry.coordinates.map(subitem => {
        const polygon = createPolygon(map, subitem, () => {
          clickArea(item)
        })
        polygonList.value.push(polygon)
      })
    })
  }

  const clickArea = (areaObj) => {
    currentLevel.value = areaObj.properties.currentLevel
    currentArea.value = areaObj.properties.name
    console.log(areaObj)
  }

  // 多边形显示
  const showAreas = () => {
    polygonList.value.map(item => {
      item.show()
    })
  }

  // 多边形隐藏
  const hideAreas = () => {
    polygonList.value.map(item => {
      item.hide()
    })
  }

  return {
    createAreas,
    showAreas,
    hideAreas
  }
}