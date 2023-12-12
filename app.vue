<script setup lang="ts">
const store = usePreloadImagesStore()
const { imagesHaveLoaded } = storeToRefs(store)

onMounted(() => {
  if (!imagesHaveLoaded.value) {
    loadAssets()
  }
})
</script>

<template>
  <div>
    <Preloader v-if="!imagesHaveLoaded" />
    <div v-else class="bodyyy px-[8.3vw] xl:px-[120px] pt-[calc(64px+2.5rem)] md:pt-[calc(73px+4rem)] lg:pt-[calc(93px+5rem)] pb-14 lg:pb-32">
      <NuxtPage />
      <TheMenu />
    </div>
  </div>
</template>