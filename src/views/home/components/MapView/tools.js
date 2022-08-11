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

export const multiarr = (arr) => {
  let a = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      a++
      arr = arr[i]
      multiarr(arr)
    }
  }
  return a
}