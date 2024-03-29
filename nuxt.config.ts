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
    '@mdi/font/css/materialdesignicons.min.css',
    'ag-grid-community/styles/ag-grid.css',
    'ag-grid-community/styles/ag-theme-quartz.css',
    'primevue/resources/themes/aura-dark-blue/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['vuetify', 'echarts', 'zrender', 'tslib', 'ag-grid-vue3']
  },
  components: true,
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-tiptap-editor',
    'dayjs-nuxt',
    'nuxt-lodash',
    'nuxt-primevue',
    'nuxt-typed-router'
  ],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  plugins: [{ src: '~/plugins/echarts.ts', mode: 'client' }],
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false
      }
    }
  },
  tiptap: {
    prefix: 'Tiptap',
    lowlight: {
      theme: 'github-dark'
    }
  }
})
