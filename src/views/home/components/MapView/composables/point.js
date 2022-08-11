import { useMapMarker } from '@/composables'
import Store from '../store'
import { loadGeoJsonFile, multiarr } from '../tools'

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
    const markers = map.value.getAllOverlays('marker')
    map.value.remove(markers)
    pointList.value = []
  }

  // 创建点
  const createPoint = async (map) => {
    if (mapStore.district.name) {
      pointList.value = []
      const fileName = (mapStore.level === 'district' ? 'map_' : 'grid_') + mapStore.getDistrictNamePinying() + '.js'
      const data = await loadGeoJsonFile(fileName)//获取到文件内数据

      const mapPolygon = map.value.getAllOverlays('polygon') // 获取地图上多边形

      data
        .features?.filter(item => {
          const position = item.properties?.center ? item.properties?.center : getTheAreaCenter(item.geometry.coordinates)

          item.position = position

          return (position && mapPolygon.some(item => {
            try {
              return AMap.GeometryUtil.isPointInRing(position, item.getPath())
            } catch (e) {
              return false
            }
          }))
        })
        .map(item => {
          const marker = createMarker(map, {
            position: item.position,
            title: item.properties.name,
            content: getMarker(item.properties.name),
          })
          pointList.value.push(marker)
        })
    }
  }

  const getMarker = (name) => {
    return `<div class="marker-route marker-marker-bus-from">
      <span>${name}</span>
    </div>`
  }

  const getTheAreaCenter = (lnglatarr) => {
    let arr = lnglatarr
    // console.log(multiarr(arr), arr)
    if (multiarr(arr) > 2) {
      arr = arr.flat(multiarr(arr) - 2)
    } else if (multiarr(arr) === 2) {
      arr = arr.flat(2)
    } else {
      return false
    }

    var total = arr.length
    var X = 0,
      Y = 0,
      Z = 0
    arr.map((item) => {
      var lng = (item[0] * Math.PI) / 180
      var lat = (item[1] * Math.PI) / 180
      var x, y, z
      x = Math.cos(lat) * Math.cos(lng)
      y = Math.cos(lat) * Math.sin(lng)
      z = Math.sin(lat)
      X += x
      Y += y
      Z += z
    })
    X = X / total
    Y = Y / total
    Z = Z / total
    var Lng = Math.atan2(Y, X)
    var Hyp = Math.sqrt(X * X + Y * Y)
    var Lat = Math.atan2(Z, Hyp)
    if (!Lng || !Lat) {
      return false
    } else {
      return new AMap.LngLat((Lng * 180) / Math.PI, (Lat * 180) / Math.PI)
    }
  }

  const mapEvent = map => {
    let oldCenter = []
    let oldZoom

    map.value.on('movestart', () => {
      oldCenter = map.value.getCenter()
    })

    map.value.on('zoomstart', () => {
      oldZoom = map.value.getZoom()
    })

    // 中心点移动
    map.value.on('moveend', () => {
      const newCenter = map.value.getCenter()

      if (oldCenter.lat !== newCenter.lat || oldCenter.lng !== mapStore.center.lng || map.value.getZoom() !== oldZoom) {
        delPoint(map) // 删除旧的
        createPoint(map)
      }
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