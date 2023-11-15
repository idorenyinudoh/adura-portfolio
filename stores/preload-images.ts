export const usePreloadImagesStore = defineStore('preload-images', () => {
  const numberOfImagesToLoad = ref(0)
  const numberOfLoadedImages = ref(0)
  const imagesHaveLoaded = ref(false)

  const percentageOfLoadedImages = computed(() => {
    return ((numberOfLoadedImages.value / numberOfImagesToLoad.value) * 100).toFixed(0)
  })

  return { numberOfImagesToLoad, numberOfLoadedImages, imagesHaveLoaded, percentageOfLoadedImages }
})