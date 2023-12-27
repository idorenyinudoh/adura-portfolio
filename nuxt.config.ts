// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/style/index.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-gtag',
    'nuxt-simple-sitemap'
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
  },
  app: {
    head: {
      meta: [
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site:name',
          content: 'Aduragbemi Abiola'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name:'twitter:creator',
          content: '@aduragbemi_aa'
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'preconnect',
          href: 'https://res.cloudinary.com'
        },
        {
          rel: 'preconnect',
          href: 'https://google-analytics.com'
        },
        {
          rel: 'preconnect',
          href: 'https://googletagmanager.com'
        }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
})
