<script setup lang="ts">
const props = defineProps({
  text: String
})
</script>

<template>
  <h2 class="mt-24 mb-12 md:mt-32 md:mb-16 lg:mt-40 lg:mb-20 font-monument-extended font-normal text-adura-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
    {{ props.text }}
  </h2>
</template>