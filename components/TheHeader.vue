<script setup lang="ts">
const formatHour = (hour: number) => {
  if (hour > 12) {
    return hour - 12
  } else if (hour === 0) {
    return 12
  }
  return hour
}

const currentHour = ref(formatHour(new Date().getHours()))
const currentMinutes = ref(new Date().getMinutes())
const timeOfDay = ref('AM')


watchEffect(() => {
  setInterval(() => {
    const actualCurrentHour = new Date().getHours()
    currentHour.value = formatHour(actualCurrentHour)
    currentMinutes.value = new Date().getMinutes()
    
    if (actualCurrentHour < 12) {
      timeOfDay.value = 'AM'
    } else {
      timeOfDay.value = 'PM'
    }
  }, 1000)
})
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-50 bg-adura-black text-sm md:text-base lg:text-xl font-normal text-white px-[8.3vw] xl:px-[120px] py-5 md:py-6 lg:py-8 flex flex-row justify-between items-center">
    <div class="flex flex-row items-center gap-x-1">
      <p>
        <span>Lagos, </span>
        <span class="hidden md:inline">Nigeria</span>
        <span class="md:hidden">NG</span>
      </p>
      <span>|</span>
      <p>
        <span v-if="currentHour < 10">0</span>
        <span>{{ currentHour }}</span>
        <span class="blink">:</span>
        <span v-if="currentMinutes < 10">0</span>
        <span>{{ currentMinutes }}</span>
        <span>{{ timeOfDay }}</span>
      </p>
    </div>
    <p class="hidden md:block">Listening to: Human by Jon Bellion</p>
    <a href="" class="border-b border-solid border-white w-max">Resumé</a>
  </div>
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