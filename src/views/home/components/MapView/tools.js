export const districtNameToPinying = name => {
  const obj = [
    { name: '鹿城区', pinying: 'LuCheng' },
    { name: '龙湾区', pinying: 'LongWan' },
    { name: '浙南', pinying: 'ZheNan' },
    { name: '瓯海区', pinying: 'OuHai' },
    { name: '瓯江口', pinying: 'OuJiangKou' },
    { name: '洞头区', pinying: 'DongTou' },
    { name: '永嘉县', pinying: 'YongJia' },
    { name: '平阳县', pinying: 'PingYang' },
    { name: '苍南县', pinying: 'CangNan' },
    { name: '龙港市', pinying: 'LongGang' },
    { name: '文成县', pinying: 'WenCheng' },
    { name: '泰顺县', pinying: 'TaiShun' },
    { name: '瑞安市', pinying: 'RuiAn' },
    { name: '乐清市', pinying: 'YueQing' },
  ]

  return obj.find(item => item.name === name).pinying
}

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