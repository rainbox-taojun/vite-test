import { h } from 'vue'
const cell = (props, context) => {
  const params = {
    row: props.row,
    index: props.index
  }
  if (props.column) params.column = props.column

  return props.render(h, params)
}

export default cell

