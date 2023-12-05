<script setup lang="ts">
const route = useRoute()
const store = usePreloadImagesStore()
const { imagesHaveLoaded } = storeToRefs(store)
const isIndexPage = computed(() => route.path === '/')
const isShotsPage = computed(() => route.path === '/shots')

onMounted(() => {
  if (!imagesHaveLoaded.value) {
    loadAssets()
  }
})
</script>

<template>
  <Preloader v-if="!imagesHaveLoaded" />
  <div
    v-else
    :class="[
      'px-[8.3vw]',
      'xl:px-[120px]',
      isIndexPage ? 'pt-16' : 'pt-[calc(64px+2.5rem)]',
      isIndexPage ? 'md:pt-24' : 'md:pt-[calc(73px+4rem)]',
      isIndexPage ? 'lg:pt-32' : 'lg:pt-[calc(93px+5rem)]',
      'pb-14',
      'lg:pb-32'
    ]">
    <TheHeader v-if="!isIndexPage" />
    <NuxtPage />
    <TheMenu />
    <TheFooter v-if="!isIndexPage && !isShotsPage" />
  </div>
</template>