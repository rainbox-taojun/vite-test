const focus = {
  mounted (el) {
    if (el.tagName === 'INPUT') {
      el.focus()
    } else {
      const target = el.querySelector('input')
      if (target) {
        target.focus()
      }
    }
  }
}
export const name = 'focus'
export default focus