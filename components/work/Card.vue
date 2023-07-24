<script setup>
const props = defineProps({
  title: String,
  desc: String,
  img: String,
  url: String,
  position: Number
})

const imageURL = computed(() => {
  return new URL(`../../assets/images/projects/${props.img}`, import.meta.url).href
})
</script>

<template>
  <article class="lg:w-4/5 xl:w-full grid md:grid-cols-[1fr_215px] lg:grid-cols-[1fr_255px] gap-x-2 md:gap-x-4 xl:gap-x-6 items-end">
    <div class="p-4 rounded-[32px] bg-adura-black">
      <div class="image-container">
        <img class="rounded-2xl border border-solid border-adura-black" :src="imageURL" alt="">
      </div>
      <div class="my-4 lg:my-6 flex justify-between items-center">
        <div class="text-white">
          <p class="text-lg sm:text-2xl font-medium">{{ props.title }}</p>
          <p class="text-sm sm:text-base lg:leading-7">{{ props.desc }}</p>
        </div>
        <a class="w-12 h-12 rounded-full bg-white flex justify-center items-center" href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M12.5684 7.98596L24.0141 7.98596L24.0141 19.4317" stroke="#1A1A1A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.98633 24.0139L23.8538 8.14638" stroke="#1A1A1A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
    <p class="hidden md:block text-adura-black font-bold md:text-[150px] lg:text-[174px] md:leading-[100px] lg:leading-[120px]">{{ props.position < 10 ? `0${props.position}` : props.position }}</p>
  </article>
</template>