// @ts-ignore
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const DarkTheme: ThemeDefinition = {
  dark: true,
  variables: {}
}

export default defineNuxtPlugin((NuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      // 테마 설정
      themes: {
        light: DarkTheme,
        variables: {}
      }
    },
    icons: {
      // 아이콘 설정
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    }
  })

  NuxtApp.vueApp.use(vuetify)
})
