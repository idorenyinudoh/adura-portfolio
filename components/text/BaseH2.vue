<script setup lang="ts">
const props = defineProps({
  text: String
})
</script>

<template>
  <h2 class="my-12 md:my-14 lg:my-16 xl:my-20 font-medium text-adura-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
    {{ props.text }}
  </h2>
</template>