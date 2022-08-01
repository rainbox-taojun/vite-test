import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useAppStore = defineStore('app', {
  state: () => ({
    leftBar: Cookies.get('leftBar') ? !!+Cookies.get('leftBar') : true,
    rightBar: Cookies.get('rightBar') ? !!+Cookies.get('rightBar') : true,
  }),
  actions: {
    toggleSidebar (position) {
      this[position] = !this[position]
      Cookies.set(position, this[position] ? 1 : 0)
    }
  }
})