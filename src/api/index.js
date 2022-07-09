import request from '@/utils/request'

// 城市体征
export function getCitySigns () {
  return request({
    url: '/city/city_features',
  })
}

// 考核评价
export function getAssessment () {
  return request({
    url: '/assessment/index',
  })
}

// 党政统领
export function getGovLeaders () {
  return request({
    url: '/dltj/index',
  })
}

// 平安法制
export function getLawInfo () {
  return request({
    url: '/safety/index',
  })
}

// 经济生态
export function getEconomic () {
  return request({
    url: '/economic',
  })
}


// 公共服务
export function getPublicService () {
  return request({
    url: '/public/service',
  })
}


// 事件热榜
export function getEventHot () {
  return request({
    url: '/evt/getWorkOrderSecondByKeyword',
  })
}

// 关键词获取
export function getKeywords () {
  return request({
    url: '/evt/getWorkOrderKeywords',
  })
}

// 获取热力图
export function getHeatmap (keyword) {
  return request({
    url: `/evt/getWorkOrderLocation?keyword=${keyword}`,
  })
}

// 党建统领详情-党建发展
export function getDevelopment () {
  return request({
    url: `/dltj/development`,
  })
}

// 党建统领详情-民主党派
export function getDemocratic () {
  return request({
    url: `/dltj/democratic`,
  })
}

// 基层智治系统双月工作任务进度表
export function getDoubleMoon () {
  return request({
    url: `/assessment/schedule`,
  })
}
