// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'vuetify/lib/styles/main.sass',
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
