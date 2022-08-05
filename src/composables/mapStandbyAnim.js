/*
 * @Author: 陶俊 
 * @Date: 2022-08-03 10:03:48 
 * @Last Modified by: 陶俊
 * @Last Modified time: 2022-08-04 16:14:49
 */
import { useEventListener } from './index'

/**
 * 地图待机旋转动画
 * @param {*} map 高德地图实例对象
 * @param {Number} pitch 俯仰角度
 * @param {Number} speed 动画速度
 */
export function useMapStandbyAnim (map, config = {
  pitch: 45,
  speed: 500,
  startTime: 10000
}) {
  const defaultPitch = ref() // 默认俯仰角度
  const defaultRotation = ref() // 默认角度
  const timer = ref(null)
  const animator = ref(null)

  // 旋转地图动画
  const mapAnim = () => {
    defaultPitch.value = map.value.getPitch()
    defaultRotation.value = map.value.getRotation()

    map.value.setPitch(config.pitch, false, 1500)
    animator.value = setInterval(() => {
      let currentRotation = map.value.getRotation()
      currentRotation += 1
      if (currentRotation >= 360) {
        currentRotation = 0
      }
      map.value.setRotation(currentRotation, currentRotation == 0, config.speed)
    }, config.speed)
  }

  // 取消动画播放，将状态置为默认
  const cancelAnima = () => {
    clearTimeout(timer.value)
    clearInterval(animator.value)
    if (map.value) {
      map.value.setPitch(defaultPitch.value)
      map.value.setRotation(defaultRotation.value)
    }
  }

  // 在一个变量的时间后，开始播放旋转动画
  const startAnim = () => {
    timer.value = setTimeout(() => {
      mapAnim()
    }, config.startTime)
  }

  // 检测鼠标事件，只要鼠标一段时间不动，就开始播放动画
  useEventListener(window, 'mousemove', (event) => {
    cancelAnima()
    startAnim()
  })
}