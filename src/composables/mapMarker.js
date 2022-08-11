import img from '@/assets/marker_bg.png'

export function useMapMarker () {
  // 创建多边形区域
  const createMarker = (map, data, callback = () => { }) => {
    let marker = new AMap.Marker({
      content: data.content,  // 自定义点标记覆盖物内容
      position: data.position, // 基点位置
      offset: new AMap.Pixel(-17, -42) // 相对于基点的偏移位置
    });
    map.value.add(marker)
    return marker
  }

  return {
    createMarker
  }
}