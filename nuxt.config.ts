// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/style/index.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-gtag'
  ],
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/idorenyinudoh/image/upload/adura-portfolio/'
    }
  },
  build: {
    transpile: [
      'gsap'
    ]
  }
})
