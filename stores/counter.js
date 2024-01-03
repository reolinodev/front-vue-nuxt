import { defineStore } from 'pinia'

export const counterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }
  const doubleCount = computed(() => count.value * 2)

  return { count, increment, doubleCount }
})
