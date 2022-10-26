import { wgs84tobd09 } from './WGS84tobaidu'
import { ElMessage, ElMessageBox, ElLoading } from 'element-plus'
import axios from 'axios'
export let map
export const initMap = () => {
  // 百度地图API功能
  map = new BMap.Map('mapContent', { enableMapClick: false }) // 创建Map实例
  map.centerAndZoom(new BMap.Point(120.621536, 27.973782), 12) // 初始化地图,设置中心点坐标和地图级别

  map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放

  let bottom_left_control = new BMap.ScaleControl({
    anchor: BMAP_ANCHOR_BOTTOM_LEFT
  }) // 左上角，添加比例尺
  map.addControl(bottom_left_control)
  // 添加带有定位的导航控件
  let navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
  })
  map.addControl(navigationControl)
  map.setMapType(BMAP_SATELLITE_MAP)
  map.setCurrentCity('温州市')
}

/**
 * 添加学区面
 * @param feature 面信息
 * @param schoolStatus 预警信息
 */
let polygonList = []
let seletePolyon = {}
let seleteColor_ = ''
export function addArea(result) {
  let feature = result.features[0] //取第一个要素
  if (!feature) return
  let geometry = feature.geometry //取要素的几何对象
  let properties = feature.properties //取要素的属性信息
  let coordinates
  let pointArr = []
  if (geometry.type == 'MultiPolygon') {
    //多面 房屋面一般不会出现空洞等现象 如果有需要另做处理
    coordinates = geometry.coordinates[0][0]
  } else if (geometry.type == 'Polygon') {
    coordinates = geometry.coordinates[0]
  }
  let labelName = properties.name
  let centerPos = wgs84tobd09(properties.center.lng, properties.center.lat)
  var opts = {
    position: new BMap.Point(centerPos[0], centerPos[1]) // 指定文本标注所在的地理位置
  }
  var label = new BMap.Label(labelName, opts)
  // 自定义文本标注样式
  label.setStyle({
    color: 'white',
    padding: '10px',
    fontSize: '14px',
    height: '30px',
    lineHeight: '30px',
    fontFamily: '微软雅黑',
    backgroundColor: '00000000',
    border: 'none',
    padding: '3px'
  })
  //判断面颜色
  let color0 = 'rgba(0,181,120,0)'
  let color1 = 'rgba(30, 144, 255,0.36)'
  let color2 = 'rgba(30, 144, 255,0.15)'
  //添加学区面
  let pList = []
  coordinates.map((item) => {
    let temp = wgs84tobd09(item[0], item[1])
    pList.push(new BMap.Point(temp[0], temp[1]))
  })
  let polygon = new BMap.Polygon(pList, {
    strokeColor: '#4fb2ff',
    strokeWeight: 2,
    strokeOpacity: 0.8,
    strokeStyle: 'solid',
    fillColor: color1
  })
  label.addEventListener('click', function (e) {
    if (properties.level == 'grid') {
      ElMessage.info('该区域没有下级边界了')
    } else {
      loadData(properties.adcode)
    }
  })
  polygon.addEventListener('click', function (e) {
    // console.log(properties)
    if (properties.level == 'grid') {
      ElMessage.info('该区域没有下级边界了')
    } else {
      loadData(properties.adcode)
    }
  })

  polygon.addEventListener('mouseover', function (e) {
    //点击标注图标后会触发此事件
    if (!isEmptyObject(seletePolyon)) {
      seletePolyon.setFillColor(seleteColor_)
      seletePolyon.setStrokeColor('#4fb2ff')
    }
    // console.log(polygon);
    polygon.setFillColor(color2)
    seletePolyon = polygon
    seleteColor_ = color1
    // console.log(polygon);
    //  showInfo();
  })
  map.addOverlay(label)
  map.addOverlay(polygon) //向地图添加面
  polygonList.push(polygon)
}
export function addOutArea(result) {
  let feature = result.features[0] //取第一个要素
  if (!feature) return
  let geometry = feature.geometry //取要素的几何对象
  let properties = feature.properties //取要素的属性信息
  let coordinates
  let pointArr = []
  if (geometry.type == 'MultiPolygon') {
    //多面 房屋面一般不会出现空洞等现象 如果有需要另做处理
    coordinates = geometry.coordinates[0][0]
  } else if (geometry.type == 'Polygon') {
    coordinates = geometry.coordinates[0]
  }
  //判断面颜色
  let color0 = 'rgba(0,181,120,0)'
  //添加学区面
  let pList = []
  coordinates.map((item) => {
    let temp = wgs84tobd09(item[0], item[1])
    pList.push(new BMap.Point(temp[0], temp[1]))
  })
  let polygon = new BMap.Polygon(pList, {
    strokeColor: '#4fb2ff',
    strokeWeight: 2,
    strokeOpacity: 0.8,
    strokeStyle: 'solid',
    fillColor: color0
  })
  map.addOverlay(polygon) //向地图添加面
  polygonList.push(polygon)
  map.setViewport(pList)
}

export const loadData = async (orgcode) => {
  let res = await axios.get('/basic/driver/map/list', {
    params: { orgcode }
  })
  let result = res.data
  map.clearOverlays() //清除所有覆盖物
  if (result.data.length) {
    let resData = JSON.parse(result.data[0].geoJson) || []
    resData.map((it, index) => {
      if (index) {
        addArea(it)
      } else {
        addOutArea(it)
      }
    })
  } else {
    ElMessage.info('未找到该区域')
  }
}

// 判断对象为空
export const isEmptyObject = (obj) => {
  for (var key in obj) {
    return false
  }
  return true
}

export const queryInitOrgCode = (name) => {
  if (!name) {
    return '1.1.14.'
  } else {
    return new Promise(async (resolve, reject) => {
      let res = await axios.get('/basic/driver/map/list', {
        params: { name }
      })
      let result = res.data
      let orgCode = ''
      if (result.data.length) {
        orgCode = result.data[0].orgcode
      } else {
        ElMessage.info('未找到该区域')
        orgCode = '1.1.14.'
      }
      resolve(orgCode)
    })
  }
}
