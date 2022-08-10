class Store {
  constructor() {
    this.center = null // 中心点
    this.level = 'district' // 当前层级 district street grid
    this.zoom = null// 缩放等级
    this.district = null// 当前行政区
  }

  static getInstance () {
    if (!this.instance) {
      this.instance = new Store()
    }
    return this.instance
  }

  /**
   * 判断center是否在某个多边形中
   * @param {Array<Latlng>} path 多边形的路径
   * @returns {Boolean} 是或否
   */
  checkCenterInPolygon (path) {
    return AMap.GeometryUtil.isPointInRing(this.center, path)
  }
}

export default new Store.getInstance()