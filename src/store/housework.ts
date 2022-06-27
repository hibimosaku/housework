import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    count: 10,
  }),
  getters: {
    tenfold() {
      return this.count * 10
    },
  },
  actions: {
    increment() {
      this.count++
    },
  },
})