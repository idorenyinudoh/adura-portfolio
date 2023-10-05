<script setup lang="ts">
const props = defineProps({
  text: String
})
</script>

<template>
  <h1 class="font-monument-extended font-extrabold text-adura-black uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
    {{ props.text }}
  </h1>
</template>