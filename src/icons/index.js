import { createVNode } from 'vue'
import * as Icons from '@element-plus/icons-vue'

export default {
  install: (app, options) => {
    // 创建Icon组件
    const Icon = (props) => {
      const { icon } = props
      return createVNode(Icons[icon])
    }
    // 注册Icon组件
    app.component('Icon', Icon)
  }
}
