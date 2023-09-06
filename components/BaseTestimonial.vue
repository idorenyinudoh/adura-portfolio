<script setup lang="ts">
defineProps({
  headshot: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: false
  },
  testimonial: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="px-6 md:px-10 lg:px-12 xl:px-14 pt-5 md:pt-9 lg:pt-11 xl:pt-12 py-8 md:py-11 lg:py-14 xl:py-16 border border-solid border-[rgba(26,26,26,0.50)] rounded-[32px] w-[360px] sm:w-[480px] md:w-[720px] lg:w-[800px] xl:w-[960px]">
    <div class="flex items-center gap-x-3 lg:gap-x-4">
      <img :src="headshot" width="72" alt="" class="w-12 md:w-14 lg:w-20 rounded-full border border-solid border-[#D3D0D0]">
      <div>
        <p class="text-adura-black text-sm md:text-base lg:text-xl font-bold">{{ name }}</p>
        <div class="md:mt-0.5 flex gap-x-1.5 md:gap-x-2 items-center">
          <p class="text-adura-black text-xs md:text-sm lg:text-base font-normal">{{ position }}</p>
          <svg v-if="company" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.21875" cy="2.39453" r="2" fill="#BBBBBB"/>
          </svg>
          <p v-if="company" class="text-adura-black text-xs md:text-sm lg:text-base font-normal">{{ company }}</p>
        </div>
      </div>
    </div>
    <p class="mt-5 lg:mt-7 xl:mt-8 text-adura-black text-sm md:text-base lg:text-xl font-normal">{{ testimonial }}</p>
  </div>
</template>