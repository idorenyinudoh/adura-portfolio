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
        {
          name: 'msapplication-TileColor',
          content: '#FFFFFF'
        },
        {
          name: 'msapplication-TileImage',
          content: '/ms-icon-144x144.png'
        },
        {
          name: 'theme-color',
          content: '#FFFFFF'
        }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '57x57',
          href: '/apple-icon-57x57.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '60x60',
          href: '/apple-icon-60x60.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/apple-icon-72x72.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '76x76',
          href: '/apple-icon-76x76.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/apple-icon-114x114.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/apple-icon-120x120.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/apple-icon-144x144.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/apple-icon-152x152.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-icon-180x180.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-icon-192x192.png'
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
          sizes: '96x96',
          href: '/favicon-96x96.png'
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
