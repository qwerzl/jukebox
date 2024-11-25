import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/ionic',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@vueuse/motion/nuxt'
  ],

  vite: {
    server: {
      watch: {
        ignored: [
          '**/ios/**',
          '**/android/**'
        ],
      }
    }
  },
  ssr: false
})