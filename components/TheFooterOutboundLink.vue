<script setup lang="ts">
const props = defineProps<{
  url: string
  title: string
}>()
</script>

<template>
  <a :href="props.url" target="_blank" class="px-4 sm:px-6 xl:px-8 py-2 sm:py-3 xl:py-4 border border-solid border-white rounded-[48px] h-max flex justify-between items-center hover:brightness-[.6] transition-all duration-300 ease-linear">
    <p class="text-sm md:text-base lg:text-xl text-white font-normal">
      {{ props.title }}
    </p>
    <svg class="w-5 h-5 sm:w-7 sm:h-7" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.8379 11.7129L23.4222 11.7129L23.4222 20.2972" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.4014 23.7324L23.302 11.8318" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</template>