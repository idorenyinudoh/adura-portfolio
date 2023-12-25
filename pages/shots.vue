<script setup>
useHead({
  title: 'Shots | Aduragbemi Abiola',
  meta: [
    {
      property: 'og:title',
      content: 'Shots | Aduragbemi Abiola'
    },
    {
      name: 'twitter:title',
      content: 'Shots | Aduragbemi Abiola'
    },
    {
      name: 'description',
      content: 'Illustrations and UI designs created by Aduragbemi Abiola, a product designer with over two years of experience creating user-centric digital experiences.'
    },
    {
      property: 'og:description',
      content: 'Illustrations and UI designs created by Aduragbemi Abiola, a product designer with over two years of experience creating user-centric digital experiences.'
    },
    {
      name: 'twitter:description',
      content: 'Illustrations and UI designs created by Aduragbemi Abiola, a product designer with over two years of experience creating user-centric digital experiences.'
    },
    {
      property: 'og:url',
      content: 'https://www.adura.design/shots'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.adura.design/shots'
    }
  ]
})

definePageMeta({
  scrollToTop: false
})

const images = [
  {
    url: 'sign-up-page.webp',
    alt: 'Sign up page design for web and mobile'
  },
  {
    url: 'credit-card-checkout.webp',
    alt: 'Credit card checkout'
  },
  {
    url: 'settings-screen.webp',
    alt: 'Settings screen for web'
  },
  {
    url: 'profile-menu.webp',
    alt: 'Profile menu for mobile'
  },
  {
    url: 'loan-calculator.webp',
    alt: 'Loan calculator for mobile'
  },
  {
    url: 'edutech-landing-page.webp',
    alt: 'Edutech landing page'
  },
  {
    url: 'superhero-messaging-platform.webp',
    alt: 'Superhero messaging platform'
  },
  {
    url: 'ecommerce-mobile-app.webp',
    alt: 'Ecommerce mobile app'
  },
  {
    url: 'smartwatch-productivity-app.webp',
    alt: 'Productivity app for smartwatch'
  },
  {
    url: 'modals-for-web.webp',
    alt: 'Modals for web'
  },
  {
    url: 'spiderman-themed-toggle.webp',
    alt: 'Spiderman-themed on/off toggle'
  },
  {
    url: 'share-modal.webp',
    alt: 'Share modal for web podcasting platform'
  },
  {
    url: 'online-learning-app.webp',
    alt: 'Online learning mobile app'
  },
  {
    url: 'interactive-music-player.webp',
    alt: 'Interactive music player for mobile'
  },
  {
    url: 'podcasts-streaming-platform.webp',
    alt: 'Streaming platform for podcasts'
  },
  {
    url: 'online-messaging-platform.webp',
    alt: 'Online messaging platform'
  },
  {
    url: 'airpods-tracker.webp',
    alt: 'AirPods tracker'
  },
  {
    url: 'real-estate-landing-page.webp',
    alt: 'Real estate landing page'
  },
  {
    url: 'agricultural-produce-onboarding.webp',
    alt: 'Agricultural produce app onboarding'
  },
  {
    url: 'fintech-mobile-app.webp',
    alt: 'Fintech mobile app'
  },
  {
    url: 'healthcare-landing-page.webp',
    alt: 'Healthcare landing page'
  },
  {
    url: 'dashboard-for-healthcare.webp',
    alt: 'Dashboard for healthcare'
  },
  {
    url: 'crypto-trading-app.webp',
    alt: 'Crypto-trading mobile app'
  },
  {
    url: 'food-ordering-app.webp',
    alt: 'Food-ordering mobile app'
  },
  {
    url: 'party-searching-app.webp',
    alt: 'Party-searching mobile app'
  },
  {
    url: 'travel-app.webp',
    alt: 'Travel mobile app for Lagosians'
  },
  {
    url: 'minimalistic-hero-page.webp',
    alt: 'Minimalistic hero page'
  },
  {
    url: 'skincare-ecommerce-app.webp',
    alt: 'Skincare e-commerce mobile app'
  },
  {
    url: 'login-screen.webp',
    alt: 'Login screen for men\'s mental health platform'
  },
  {
    url: 'podcast-listening-app.webp',
    alt: 'Podcast listening mobile app'
  },
  {
    url: '404-error-page.webp',
    alt: '404 error page for web'
  },
  {
    url: 'email-receipt.webp',
    alt: 'Email receipt for shopping mart'
  },
  {
    url: 'movie-streaming-dashboard.webp',
    alt: 'Movie streaming dashboard'
  },
  {
    url: 'flash-messages-and-toasts.webp',
    alt: 'Flash messages and toasts for web'
  },
  {
    url: 'analytics-dashboard.webp',
    alt: 'Analytics dashboard overview for web'
  },
  {
    url: 'fashion-landing-page.webp',
    alt: 'Fashion landing page'
  },
  {
    url: 'window-illustration.webp',
    alt: 'Window view illustration'
  },
  {
    url: 'fraud-detection-dashboard.webp',
    alt: 'Fraud detection dashboard'
  },
  {
    url: 'pos-terminal-illustration.webp',
    alt: 'POS terminal illustration'
  },
  {
    url: 'ikoyi-bridge-illustration.webp',
    alt: 'Ikoyi bridge illustration'
  },
  {
    url: 'calendar-icon-illustration.webp',
    alt: 'Calendar icon illustration'
  },
  {
    url: 'building-illustration.webp',
    alt: 'Building view illustration'
  },
]

onMounted(() => {
  const mainContainer = document.querySelector('main');
  const mainScrollWidth = mainContainer.scrollWidth;
  const mainScrollHeight = mainContainer.scrollHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const scrollTop = (mainScrollHeight - windowHeight) / 2;
  const scrollLeft = (mainScrollWidth - windowWidth) / 2;

  mainContainer.scrollTo({
    top: scrollTop,
    left: scrollLeft,
    behavior: 'smooth'
  });
})
</script>

<template>
  <div>
    <TheHeader />
    <main class="fixed inset-0 w-full h-full overflow-auto grid grid-cols-[repeat(6,_250px)] grid-rows-[repeat(6,_187.5px)] md:grid-cols-[repeat(6,_350px)] md:grid-rows-[repeat(6,_262.5px)] xl:grid-cols-[repeat(6,_400px)] xl:grid-rows-[repeat(6,_300px)] p-4 pt-[77px] md:pt-[89px] lg:pt-[109px] xl:p-6 xl:pt-[109px] gap-4 xl:gap-6">
      <BaseShot v-for="(image, index) in images" :key="index" :="image" />
    </main>
  </div>
</template>

<style scoped>
main {
  scrollbar-width: none;
}
main::-webkit-scrollbar { 
  display: none;
}
</style>