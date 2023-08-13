<script setup>
// import { gsap } from 'gsap'

const links = ref([
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Shots',
    url: '/shots'
  },
  {
    title: 'Projects',
    url: '/projects'
  },
  {
    title: 'Meet Adura',
    url: '/about'
  }
])
</script>

<template>
  <nav class="fixed bottom-6 md:bottom-10 xl:bottom-16 left-0 right-0 mx-auto w-max bg-adura-black border-[.5px] border-[#9E9E9E] rounded-[96px]">
    <ul class="max-[350px]:p-1 p-2 md:p-4 flex max-[350px]:gap-x-0 gap-x-1 md:gap-x-4 xl:gap-x-6">
      <li v-for="(link, index) in links" :key="index">
        <NuxtLink :to="link.url"
          class="block max-[350px]:px-3 px-4 md:px-8 py-2 md:py-4 rounded-[72px] font-normal text-white/50 hover:text-white bg-transparent hover:bg-[#D1D1D11A] text-sm sm:text-base md:text-xl xl:text-2xl transition-all duration-200 ease-linear">
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>