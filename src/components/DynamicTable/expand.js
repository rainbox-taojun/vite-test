/**
 * 展开行
 */
import { h } from 'vue'
const expand = (props, context) => {
  const params = {
    row: props.row,
    index: props.index
  }
  if (props.column) params.column = props.column
  if (props['expand-columns']) params.expandColumns = props['expand-columns']
  if (props.render) {
    return props.render(h, params)
  }

  return h(
    'el-form',
    {
      'label-position': 'left',
      inline: true
    },
    params.expandColumns.map(item => {
      return h(
        'div',
        { class: 'el-form-item' },
        [
          h('label', { class: 'el-form-item__label', style: 'color:#99a9bf;width: 90px;' }, item.label),
          h('span', { class: 'el-form-item__content' }, params.row[item.key])
        ]
      )
    })
  )
}

export default expand
