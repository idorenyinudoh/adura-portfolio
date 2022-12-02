// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/style/index.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  build: {
    transpile: [
      'gsap'
    ]
  }
})
