<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const locale = useState<string>('ko')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = useAppConfig() as AppConfigInput

useHead({
  titleTemplate: 'Nuxt3 Project',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt3 Project'
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: 'Nuxt3 Project'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Nuxt3 Project / Search'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'maintained by our users.'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'http://localhost:8080/css/images/logo.png'
    },
    { hid: 'og:url', property: 'og:url', content: process.env.CLIENT_URL }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css'
    },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap'
    }
  ]
})
</script>

<template>
  <div>
    <!--    <NuxtWelcome />-->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
