<script setup lang="ts">
const props = defineProps({
  title: String,
  url: String
})
</script>

<template>
  <a :href="props.url" target="_blank" class="px-4 py-2 sm:px-7 sm:py-4 xl:px-8 xl:py-6 border border-solid border-black rounded-[48px] h-max flex justify-between items-center hover:bg-adura-purple hover:border-transparent transition-all duration-300 ease-linear">
    <p class="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-[30px] text-adura-black font-normal">
      {{ props.title }}
    </p>
    <svg class="w-4 h-4 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9.42773 5.98926L18.012 5.98926L18.012 14.5735" stroke="#1A1A1A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.99121 18.0103L17.8918 6.10965" stroke="#1A1A1A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</template>