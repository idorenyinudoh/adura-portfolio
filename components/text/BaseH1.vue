<script setup lang="ts">
const props = defineProps({
  text: String
})
</script>

<template>
  <h1 class="md:mr-[5vw] xl:mr-[12vw] font-bold text-adura-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
    {{ props.text }}
  </h1>
</template>