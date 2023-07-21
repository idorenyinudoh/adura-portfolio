<script setup>
import { gsap } from "gsap"
import SplitType from 'split-type'

let counter = ref(0)

const emits = defineEmits(['ready'])

const onTextEnter = (el, done) => {
  const split = new SplitType(el, {
    types: 'words, chars'
  })
  const chars = split.chars
  gsap.set(el, { autoAlpha: 1 })
  gsap.fromTo(chars, { y: 100, opacity: 0 }, {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1.5,
    ease: 'power4.out',
    onComplete: done
  })
}

const onTextLeave = (el, done) => {
  gsap.fromTo(el.querySelectorAll('.char'), { y: 0 }, {
    y: -100,
    opacity: 0,
    stagger: 0.05,
    duration: 1.5,
    ease: 'power4.out',
    onComplete: done
  })
}

onMounted(() => {
  for(let i = 0; i <= 100; i++) {
    setTimeout(() => {
      counter.value = i
      if (i === 100) {
        gsap.to('.loading-screen', {
          duration: 1.5,
          opacity: 0,
          delay: 2,
          ease: 'power3.out',
          onCompleteParams: ['ready'],
          onComplete: emits
        })
      }
    }, i * 50)
  }
  SplitType.create('.counter-text', {
    types: 'words, chars',
  })
  const hangTight = new SplitType('.hang-tight', {
    types: 'words, chars',
  })
  gsap.fromTo(hangTight.chars, { opacity: 0, y: 100 }, {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1,
    delay: 0.5,
    ease: 'power4.out',
  })
})
</script>

<template>
  <div class="loading-screen h-screen w-full relative">
    <div class="fixed top-0 left-0 w-full h-full -z-10">
      <img
        class="w-full h-full object-cover"
        src="~/assets/images/landscape-background.png"
        alt="landscape background"
      />
    </div>
    <div class="relative w-full h-14 md:h-20 xl:h-24 2xl:h-32 bg-white/30">
      <div class="absolute top-0 left-0 h-full bg-adura-purple transition-all ease-linear duration-200" :style="{width: `${counter}%`}" />
    </div>
    <div class="relative font-bold text-white mt-9 ml-[8.3vw] text-8xl md:text-9xl h-24 md:h-32">
      <Transition :css="false" @enter="onTextEnter" @leave="onTextLeave">
        <p v-if="counter <= 10" class="counter-text absolute">0</p>
        <p v-else-if="counter > 10 && counter <= 20" class="counter-text absolute">10</p>
        <p v-else-if="counter > 20 && counter <= 30" class="counter-text absolute">20</p>
        <p v-else-if="counter > 30 && counter <= 40" class="counter-text absolute">30</p>
        <p v-else-if="counter > 40 && counter <= 50" class="counter-text absolute">40</p>
        <p v-else-if="counter > 50 && counter <= 60" class="counter-text absolute">50</p>
        <p v-else-if="counter > 60 && counter <= 70" class="counter-text absolute">60</p>
        <p v-else-if="counter > 70 && counter <= 80" class="counter-text absolute">70</p>
        <p v-else-if="counter > 80 && counter <= 90" class="counter-text absolute">80</p>
        <p v-else-if="counter > 90 && counter < 100" class="counter-text absolute">90</p>
        <p v-else-if="counter === 100" class="counter-text absolute">100</p>
      </Transition>
    </div>
    <p class="hang-tight font-extralight text-white/50 mt-3 md:mt-5 ml-[calc(8.3vw+12px)] text-4xl md:text-5xl">Do hang tight...</p>
  </div>
</template>

<style scoped>
.counter-text, .hang-tight {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>