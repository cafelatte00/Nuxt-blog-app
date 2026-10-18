// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'modern-normalize/modern-normalize.css', // 1番上に追加（先頭で適用させる）,
    '~/assets/css/main.css'
  ]
})
