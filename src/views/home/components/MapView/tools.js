

export const loadGeoJsonFile = async name => {
  try {
    const areaJson = import.meta.glob("@/assets/geoJson/*.js")
    const keys = Object.keys(areaJson)
    const key = keys.filter((key) => {
      let k = key.replace('../../../../assets/geoJson/', '')
      return k === name
    })[0]

    const data = await areaJson[key]()//获取到文件内数据

    return data.default
  } catch (e) {
    return {}
  }
}

export const getTheAreaCenter = (lnglatarr) => {
  var total = lnglatarr.length
  var X = 0,
    Y = 0,
    Z = 0
  lnglatarr.flat(2).map((item) => {
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
  return new AMap.LngLat((Lng * 180) / Math.PI, (Lat * 180) / Math.PI)
}