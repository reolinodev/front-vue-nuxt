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
    transpile: ['vuetify']
  },
  components: true,

  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],

  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
})
