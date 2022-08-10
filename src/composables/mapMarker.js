export function useMapMarker () {
  // 创建多边形区域
  const createMarker = (map, data, callback = () => { }) => {
    let marker = new AMap.Marker({
      map: map.value,
      draggable: true,
      position: data
    });

    return marker
  }

  return {
    createMarker
  }
}