<script setup lang="ts">
const currentTime = ref(new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Lagos', timeStyle: 'short' }))
const currentHour = computed(() => parseInt(currentTime.value.split(':')[0]) < 10 ? `0${currentTime.value.split(':')[0]}` : currentTime.value.split(':')[0])
const currentMinutes = computed(() => currentTime.value.split(':')[1].split(' ')[0])
const timeOfDay = computed(() => currentTime.value.split(':')[1].split(' ')[1])

let intervalId: NodeJS.Timeout

onMounted(() => {
  intervalId = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Lagos', timeStyle: 'short' })
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-adura-black text-sm md:text-base lg:text-xl font-normal text-white px-[8.3vw] xl:px-[120px] py-5 md:py-6 lg:py-8 flex flex-row justify-between items-center">
    <div class="flex flex-row items-center gap-x-1">
      <p>
        <span>Lagos, </span>
        <span class="hidden md:inline">Nigeria</span>
        <span class="md:hidden">NG</span>
      </p>
      <span>|</span>
      <p>
        <span>{{ currentHour }}</span>
        <span class="blink">:</span>
        <span>{{ currentMinutes }}</span>
        <span>{{ timeOfDay }}</span>
      </p>
    </div>
    <NuxtLink
      to="https://drive.google.com/file/d/1YML4GsP38Ajj8c7xopaviRAqsYeYNsh7/view?usp=sharing"
      class="relative border-b border-solid border-white w-max before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-[1px] before:bg-adura-black before:scale-x-0 before:origin-[100%] hover:before:scale-x-100 hover:before:origin-[0] before:transition-transform before:duration-300 before:ease-linear hover:before:ease-out"
      target="_blank"
    >
      Resumé
    </NuxtLink>
  </header>
</template>

<style scoped>
.blink {
  animation: blink 1.5s linear infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>