<script setup lang="ts">
import { gsap } from "gsap"
import SplitType from 'split-type'

const route = useRoute()
const store = usePreloadImagesStore()
const counter = computed(() => parseInt(store.percentageOfLoadedImages))

const onCounterEnter = (el: Element, done: () => void) => {
  const split = new SplitType(el as HTMLElement, {
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

const onCounterLeave = (el: Element, done: () => void) => {
  gsap.fromTo(el.querySelectorAll('.char'), { y: 0 }, {
    y: -100,
    opacity: 0,
    stagger: 0.05,
    duration: 1.5,
    ease: 'power4.out',
    onComplete: done
  })
}

const onQuirkyTextEnter = (el: Element, done: () => void) => {
  const split = new SplitType(el as HTMLElement, {
    types: 'words, chars'
  })
  const chars = split.chars
  gsap.fromTo(chars, { opacity: 0, y: 100 }, {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1,
    delay: 0.5,
    ease: 'power4.out',
    onComplete: done
  })
}

const onQuirkyTextLeave = (el: Element, done: () => void) => {
  gsap.fromTo(el, { y: 0 }, {
    y: -100,
    opacity: 0,
    stagger: 0.05,
    duration: 1,
    ease: 'power4.out',
    onComplete: done
  })
}

watch(counter, () => {
  if (counter.value === 100) {
    if (route.name === 'index') {
      gsap.to(gsap.utils.toArray(['.loader', '.counter-container', '.hang-tight']), {
        opacity: 0,
        stagger: 0.05,
        duration: 1.5,
        delay: 3,
        ease: 'power4.out',
        onComplete: () => {
          store.imagesHaveLoaded = true
        }
      })
    } else {
      gsap.to('.loading-screen', {
        duration: 1.5,
        opacity: 0,
        delay: 3,
        ease: 'power3.out',
        onComplete: () => {
          store.imagesHaveLoaded = true
        }
      })
    }
  }
})
</script>

<template>
  <div class="loading-screen before:fixed before:inset-0 before:-z-10" :style="{ '--percent': `${counter}%` }">
    <div class="loader relative w-full h-14 md:h-20 lg:h-24 bg-white/30">
      <div class="absolute top-0 left-0 h-full bg-adura-purple transition-all ease-linear duration-200" :style="{ width: `${counter}%` }" />
    </div>
    <div class="counter-container relative font-normal font-monument-extended text-white mt-9 ml-[8.3vw] xl:ml-[120px] text-6xl md:text-7xl lg:text-8xl leading-[50px] md:leading-[61px] lg:leading-[81px] h-[50px] md:h-[60px] lg:h-[71px]">
      <Transition :css="false" @enter="onCounterEnter" @leave="onCounterLeave">
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
    <div class="relative">
      <Transition :css="false" @enter="onQuirkyTextEnter" @leave="onQuirkyTextLeave">
        <p v-if="counter > 0 && counter <= 60" class="absolute hang-tight font-normal text-white/50 mx-[8.3vw] xl:mx-[120px] mt-2 lg:mt-5 text-xl md:text-2xl lg:text-3xl">Beauty, they say, is in the eye of the beholder.</p>
        <p v-else-if="counter >= 60" class="absolute hang-tight font-normal text-white/50 mx-[8.3vw] xl:mx-[120px] mt-2 lg:mt-5 text-xl md:text-2xl lg:text-3xl">With all due respect, please behold.</p>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.loading-screen::before {
  background: linear-gradient(rgb(0 0 0 / calc(100% - var(--percent)/6.67)), rgb(0 0 0 / calc(100% - var(--percent)/6.67))), url(https://res.cloudinary.com/idorenyinudoh/image/upload/adura-portfolio/landscape-background);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.counter-text {
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 90%);
}
.hang-tight {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>