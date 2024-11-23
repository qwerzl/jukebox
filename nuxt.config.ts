// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/ionic',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/fonts',
    '@pinia/nuxt'
  ],
  ssr: false
})
