export function useMapPolygon () {
  // 创建多边形区域
  const createPolygon = (map, data, callback = () => { }) => {
    let polygon = new AMap.Polygon({
      path: data,
      fillColor: '#44D775',
      strokeOpacity: 1,
      fillOpacity: 0.2,
      strokeColor: '#1ED869',
      strokeWeight: 1,
      strokeStyle: 'solid',
      strokeDasharray: [5, 5],
    })
    polygon.on('mouseover', () => {
      polygon.setOptions({
        fillOpacity: 0.7,
        fillColor: '#7bccc4'
      })
    })
    polygon.on('mouseout', () => {
      polygon.setOptions({
        fillOpacity: 0.2,
        fillColor: '#44D775'

      })
    })
    polygon.on('click', () => {
      callback()
    })
    map.value.add(polygon)

    return polygon
  }

  return {
    createPolygon
  }
}