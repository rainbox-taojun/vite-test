import focus, { name as focusName } from './focus'

export default {
  install: (app, options) => {
    app.directive(focusName, focus)
  }
}