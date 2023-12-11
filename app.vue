<script setup lang="ts">
const route = useRoute()
const store = usePreloadImagesStore()
const { imagesHaveLoaded } = storeToRefs(store)
const isIndexPage = computed(() => route.path === '/')

onMounted(() => {
  if (!imagesHaveLoaded.value) {
    loadAssets()
  }
})
</script>

<template>
  <div>
    <Preloader v-if="!imagesHaveLoaded" />
    <div v-else
      :class="[
        'px-[8.3vw] xl:px-[120px] pb-14 lg:pb-32',
        isIndexPage ? 'pt-16' : 'pt-[calc(64px+2.5rem)]',
        isIndexPage ? 'md:pt-24' : 'md:pt-[calc(73px+4rem)]',
        isIndexPage ? 'lg:pt-32' : 'lg:pt-[calc(93px+5rem)]'
      ]"
    >
      <NuxtPage />
      <TheMenu />
    </div>
  </div>
</template>