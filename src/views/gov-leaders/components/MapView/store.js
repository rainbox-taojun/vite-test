const typeRange = [
  { name: 'district', min: 0, max: 12.99 },
  { name: 'street', min: 13, max: 13.99 },
  { name: 'grid', min: 14, max: 99 }
]

class Store {
  constructor() {
    this.center = [] // 中心点
    this.zoom = null// 缩放等级
    this.district = null// 当前行政区
  }

  static getInstance () {
    if (!this.instance) {
      this.instance = new Store()
    }
    return this.instance
  }

  set level (value) {
    this.level = value
  }
  get level () {
    return typeRange.find(item => this.zoom >= item.min && this.zoom < item.max).name
  }

  /**
   * 判断center是否在某个多边形中
   * @param {Array<Latlng>} path 多边形的路径
   * @returns {Boolean} 是或否
   */
  checkCenterInPolygon (path) {
    return AMap.GeometryUtil.isPointInRing(this.center, path)
  }

  /**
   * 获取区县的拼音名称
   * @returns {String} 拼音
   */
  getDistrictNamePinying () {
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

    return obj.find(item => item.name === this.district.name).pinying
  }
}

export default Store.getInstance()