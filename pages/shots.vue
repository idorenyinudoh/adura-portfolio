<script setup lang="ts">
const images = [
  {
    url: 'sign-up-page.png',
    alt: 'Sign up page design for web and mobile'
  },
  {
    url: 'credit-card-checkout.png',
    alt: 'Credit card checkout'
  },
  {
    url: 'settings-screen.png',
    alt: 'Settings screen for web'
  },
  {
    url: 'profile-menu.png',
    alt: 'Profile menu for mobile'
  },
  {
    url: 'loan-calculator.png',
    alt: 'Loan calculator for mobile'
  },
  {
    url: 'edutech-landing-page.png',
    alt: 'Edutech landing page'
  },
  {
    url: 'superhero-messaging-platform.png',
    alt: 'Superhero messaging platform'
  },
  {
    url: 'ecommerce-mobile-app.png',
    alt: 'Ecommerce mobile app'
  },
  {
    url: 'smartwatch-productivity-app.png',
    alt: 'Productivity app for smartwatch'
  },
  {
    url: 'modals-for-web.png',
    alt: 'Modals for web'
  },
  {
    url: 'spiderman-themed-toggle.png',
    alt: 'Spiderman-themed on/off toggle'
  },
  {
    url: 'share-modal.png',
    alt: 'Share modal for web podcasting platform'
  },
  {
    url: 'online-learning-app.png',
    alt: 'Online learning mobile app'
  },
  {
    url: 'interactive-music-player.png',
    alt: 'Interactive music player for mobile'
  },
  {
    url: 'podcasts-streaming-platform.png',
    alt: 'Streaming platform for podcasts'
  },
  {
    url: 'online-messaging-platform.png',
    alt: 'Online messaging platform'
  },
  {
    url: 'airpods-tracker.png',
    alt: 'AirPods tracker'
  },
  {
    url: 'real-estate-landing-page.png',
    alt: 'Real estate landing page'
  },
  {
    url: 'agricultural-produce-onboarding.png',
    alt: 'Agricultural produce app onboarding'
  },
  {
    url: 'fintech-mobile-app.png',
    alt: 'Fintech mobile app'
  },
  {
    url: 'healthcare-landing-page.png',
    alt: 'Healthcare landing page'
  },
  {
    url: 'dashboard-for-healthcare.png',
    alt: 'Dashboard for healthcare'
  },
  {
    url: 'crypto-trading-app.png',
    alt: 'Crypto-trading mobile app'
  },
  {
    url: 'food-ordering-app.png',
    alt: 'Food-ordering mobile app'
  },
  {
    url: 'party-searching-app.png',
    alt: 'Party-searching mobile app'
  },
  {
    url: 'travel-app.png',
    alt: 'Travel mobile app for Lagosians'
  },
  {
    url: 'minimalistic-hero-page.png',
    alt: 'Minimalistic hero page'
  },
  {
    url: 'skincare-ecommerce-app.png',
    alt: 'Skincare e-commerce mobile app'
  },
  {
    url: 'login-screen.png',
    alt: 'Login screen for men\'s mental health platform'
  },
  {
    url: 'podcast-listening-app.png',
    alt: 'Podcast listening mobile app'
  },
  {
    url: '404-error-page.png',
    alt: '404 error page for web'
  },
  {
    url: 'email-receipt.png',
    alt: 'Email receipt for shopping mart'
  },
  {
    url: 'movie-streaming-dashboard.png',
    alt: 'Movie streaming dashboard'
  },
  {
    url: 'flash-messages-and-toasts.png',
    alt: 'Flash messages and toasts for web'
  },
  {
    url: 'analytics-dashboard.png',
    alt: 'Analytics dashboard overview for web'
  },
  {
    url: 'fashion-landing-page.png',
    alt: 'Fashion landing page'
  },
]
</script>

<template>
  <main class="fixed inset-0 w-full h-full overflow-auto grid grid-cols-[repeat(6,_250px)] grid-rows-[repeat(6,_187.5px)] md:grid-cols-[repeat(6,_350px)] md:grid-rows-[repeat(6,_262.5px)] xl:grid-cols-[repeat(6,_400px)] xl:grid-rows-[repeat(6,_300px)] gap-4 xl:gap-6">
    <ShotFigure v-for="(image, index) in images" :key="index" :="image" />
  </main>
</template>