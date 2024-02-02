// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@/assets/css/app.css',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify', 'echarts', 'zrender', 'tslib']
  },
  components: true,

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-tiptap-editor'
  ],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  plugins: [{ src: '~/plugins/echarts.ts', mode: 'client' }],
  tiptap: {
    prefix: 'Tiptap', // prefix for Tiptap imports, composables not included
    lowlight: {
      theme: 'github-dark' // default theme
    }
  }
})
