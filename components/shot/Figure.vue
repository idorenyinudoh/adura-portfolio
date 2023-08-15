<script setup lang="ts">
const props = defineProps({
  url: String,
  alt: String
})

const innerWidth = ref(0)

onMounted(() => {
  innerWidth.value = window.innerWidth
  window.addEventListener('resize', () => {
    innerWidth.value = window.innerWidth
  }, true)
})

const figureIsHoveredOn = ref(false)
const toggleFigureIsHoveredOn = () => {
  figureIsHoveredOn.value = !figureIsHoveredOn.value
}
</script>

<template>
  <figure class="relative lg:cursor-pointer" @pointerenter="toggleFigureIsHoveredOn" @pointerleave="toggleFigureIsHoveredOn">
    <NuxtImg provider="cloudinary" :src="`/shots/${props.url}`" :alt="props.alt?.toLowerCase()" class="rounded-lg w-full h-full object-cover transition-all duration-200 ease-linear lg:hover:brightness-75" />
    <Transition name="caption">
      <figcaption v-if="figureIsHoveredOn && innerWidth >= 1024" class="absolute left-6 bottom-2 z-10 text-white font-normal leading-7">
        {{ props.alt }}
      </figcaption>
    </Transition>
  </figure>
</template>

<style scoped>
.caption-enter-active,
.caption-leave-active {
  transition: opacity 200ms linear;
}
.caption-enter-from,
.caption-leave-to {
  opacity: 0;
}
</style>