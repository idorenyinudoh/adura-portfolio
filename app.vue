<script setup lang="ts">
import { gsap } from 'gsap'
import type { TransitionProps } from 'nuxt/dist/app/compat/capi';
import SplitType from 'split-type'

const route = useRoute()
const store = usePreloadImagesStore()
const { imagesHaveLoaded } = storeToRefs(store)

const currentRoute = computed(() => route.path)

const lines = [
  // 'It might not look like it but this is actually the end of this lin',
  // '\'Time waits for no man\' - A man who had time',
  // 'I have a thing for fishes when they\'re not in water',
  'I host a podcast called \'Shaking Tables with AA\'',
  'There are plenty of fish in the sea, but you know what else there is? Trash',
  'It costs $0 to be kind, but apparently, wickedness has a zero-dollar price tag too',
  'What doesn\'t kill you makes you stronger, or maybe just gives you a good story for parties',
  'What goes around comes around, or so they say, but my karma seems to be stuck in traffic',
  'Honesty is the best policy, unless it involves your opinion of their haircut',
  'Actions speak louder than words, but have you tried yelling?',
  'Love conquers all, except when faced with a spider. No love there',
  'When one door closes, another opens, or you could just install a revolving door',
  'Two wrongs don\'t make a right, but three lefts do',
  'Silence is golden, but duct tape is silver',
  'Curiosity killed the cat, satisfaction brought it back — with eight more lives',
  'People who live in glass houses shouldn\'t throw stones, or parties',
  'If at first you don\'t succeed, skydiving is not for you',
  'Where there\'s smoke, there\'s fire. And probably barbecue',
  'The grass is always greener on the other side, until you have to mow it',
  'Laughter is the best medicine, unless you\'re laughing for no reason — then you might need medicine',
  'An apple a day keeps the doctor away, but if the doctor is cute, forget the fruit',
  'Daily standups: where everyone stands, but no one truly understands',
  'Beta testing: because real users are just too mainstream',
  'Iterate, iterate, iterate... or just keep staring at the same wireframe',
  'Design sprints: turning indecision into a week-long group therapy session',
  'Minimum Viable Product: because who needs maximum viability anyway?',
  'Empathy maps: helping you feel sorry for the users who never asked for this',
  'Product-market fit: more like product-market \'we\'ll figure it out eventually.\''
]

const madText = ref()
const activeMadTextIndex = ref(Math.floor(Math.random() * (lines.length)))

watch(currentRoute, () => {
  activeMadTextIndex.value = Math.floor(Math.random() * (lines.length))
})

const transitionObject: TransitionProps = {
  mode: 'out-in',
  css: false,
  appear: true,
  onBeforeLeave() {
    gsap.set('.page-transition', { display: 'flex' })
    madText.value.$el.innerHTML = lines[activeMadTextIndex.value]
    SplitType.create('.page-transition p', { types: 'lines,words', tagName: 'span' })
    gsap.set('.page-transition p .line', { opacity: 0 })
  },
  onLeave(el, done) {
    const tl = gsap.timeline({ onComplete: done })
    tl.to('.page-transition', { top: 0, duration: 2, ease: 'expo.inOut' }, '-0.5')
    .fromTo('.page-transition p .line', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 2, ease: 'power4.out' }, '-=0.9')
    .to('.bodyyy', { opacity: 0, duration: .5, ease: 'none' }, '-=0.9')
    .to('.page-transition', { top: '-100%', duration: 1.5, ease: 'expo.inOut' }, '+=0.5')
    .to('.page-transition p .word', { opacity: 0, stagger: 0.05, duration: 1, ease: 'power4.out' }, '-=1.5')
  },
  onAfterLeave() {
    gsap.to('.bodyyy', { opacity: 1, duration: .5, ease: 'power4.out' })
    gsap.set('.page-transition', { display: 'none', top: '100%' })
    SplitType.clearData()
  }
}

useNuxtApp().hook('page:transition:finish', () => {
  window.scrollTo(0, 0)
})

onMounted(() => {
  if (!imagesHaveLoaded.value) {
    loadAssets()
  }
})
</script>

<template>
  <div>
    <Preloader v-if="!imagesHaveLoaded" />
    <div :class="['bodyyy px-[8.3vw] xl:px-[120px] pt-[calc(64px+2.5rem)] md:pt-[calc(73px+4rem)] lg:pt-[calc(93px+5rem)] pb-14 lg:pb-32', { 'hidden': !imagesHaveLoaded }]">
      <NuxtPage :transition="transitionObject" />
      <TheMenu />
    </div>
    <div class="page-transition fixed z-[60] top-full left-0 w-full h-full px-[5%] bg-adura-black hidden items-center justify-center">
      <BaseP ref="madText" class="clip-path text-white text-center" />
    </div>
  </div>
</template>