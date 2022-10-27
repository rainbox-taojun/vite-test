import request from '@/utils/request'

export function getMapList (params) {
  return request({
    url: '/basic/driver/map/list',
    params
  })
}