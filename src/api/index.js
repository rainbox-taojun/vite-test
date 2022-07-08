import request from '@/utils/request'

// 城市体征
export function getCitySigns() {
  return request({
    url: '/city/city_features',
    method: 'post'
  })
}

// 考核评价
export function getAssessment() {
  return request({
    url: '/assessment/index',
    method: 'post',
  })
}

// 党政统领
export function getGovLeaders() {
  return request({
    url: '/dltj/index',
    method: 'post'
  })
}

// 平安法制
export function getLawInfo() {
  return request({
    url: '/safety/index',
  })
}

// 经济生态
export function getEconomic() {
  return request({
    url: '/economic',
  })
}


// 公共服务
export function getPublicService() {
  return request({
    url: '/safety/index',
  })
}

