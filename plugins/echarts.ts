import * as echarts from 'echarts'

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('$echarts', echarts)
})
