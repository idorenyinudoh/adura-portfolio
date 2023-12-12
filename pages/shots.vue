<script setup>
definePageMeta({
  scrollToTop: false
})

const images = [
  {
    url: 'sign-up-page',
    alt: 'Sign up page design for web and mobile'
  },
  {
    url: 'credit-card-checkout',
    alt: 'Credit card checkout'
  },
  {
    url: 'settings-screen',
    alt: 'Settings screen for web'
  },
  {
    url: 'profile-menu',
    alt: 'Profile menu for mobile'
  },
  {
    url: 'loan-calculator',
    alt: 'Loan calculator for mobile'
  },
  {
    url: 'edutech-landing-page',
    alt: 'Edutech landing page'
  },
  {
    url: 'superhero-messaging-platform',
    alt: 'Superhero messaging platform'
  },
  {
    url: 'ecommerce-mobile-app',
    alt: 'Ecommerce mobile app'
  },
  {
    url: 'smartwatch-productivity-app',
    alt: 'Productivity app for smartwatch'
  },
  {
    url: 'modals-for-web',
    alt: 'Modals for web'
  },
  {
    url: 'spiderman-themed-toggle',
    alt: 'Spiderman-themed on/off toggle'
  },
  {
    url: 'share-modal',
    alt: 'Share modal for web podcasting platform'
  },
  {
    url: 'online-learning-app',
    alt: 'Online learning mobile app'
  },
  {
    url: 'interactive-music-player',
    alt: 'Interactive music player for mobile'
  },
  {
    url: 'podcasts-streaming-platform',
    alt: 'Streaming platform for podcasts'
  },
  {
    url: 'online-messaging-platform',
    alt: 'Online messaging platform'
  },
  {
    url: 'airpods-tracker',
    alt: 'AirPods tracker'
  },
  {
    url: 'real-estate-landing-page',
    alt: 'Real estate landing page'
  },
  {
    url: 'agricultural-produce-onboarding',
    alt: 'Agricultural produce app onboarding'
  },
  {
    url: 'fintech-mobile-app',
    alt: 'Fintech mobile app'
  },
  {
    url: 'healthcare-landing-page',
    alt: 'Healthcare landing page'
  },
  {
    url: 'dashboard-for-healthcare',
    alt: 'Dashboard for healthcare'
  },
  {
    url: 'crypto-trading-app',
    alt: 'Crypto-trading mobile app'
  },
  {
    url: 'food-ordering-app',
    alt: 'Food-ordering mobile app'
  },
  {
    url: 'party-searching-app',
    alt: 'Party-searching mobile app'
  },
  {
    url: 'travel-app',
    alt: 'Travel mobile app for Lagosians'
  },
  {
    url: 'minimalistic-hero-page',
    alt: 'Minimalistic hero page'
  },
  {
    url: 'skincare-ecommerce-app',
    alt: 'Skincare e-commerce mobile app'
  },
  {
    url: 'login-screen',
    alt: 'Login screen for men\'s mental health platform'
  },
  {
    url: 'podcast-listening-app',
    alt: 'Podcast listening mobile app'
  },
  {
    url: '404-error-page',
    alt: '404 error page for web'
  },
  {
    url: 'email-receipt',
    alt: 'Email receipt for shopping mart'
  },
  {
    url: 'movie-streaming-dashboard',
    alt: 'Movie streaming dashboard'
  },
  {
    url: 'flash-messages-and-toasts',
    alt: 'Flash messages and toasts for web'
  },
  {
    url: 'analytics-dashboard',
    alt: 'Analytics dashboard overview for web'
  },
  {
    url: 'fashion-landing-page',
    alt: 'Fashion landing page'
  },
  {
    url: 'window-illustration',
    alt: 'Window view illustration'
  },
  {
    url: 'fraud-detection-dashboard',
    alt: 'Fraud detection dashboard'
  },
  {
    url: 'pos-terminal-illustration',
    alt: 'POS terminal illustration'
  },
  {
    url: 'ikoyi-bridge-illustration',
    alt: 'Ikoyi bridge illustration'
  },
  {
    url: 'calendar-icon-illustration',
    alt: 'Calendar icon illustration'
  },
  {
    url: 'building-illustration',
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