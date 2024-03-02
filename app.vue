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
    madText.value.innerHTML = lines[activeMadTextIndex.value]
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
    <AppPreloader v-if="!imagesHaveLoaded" />
    <div :class="['bodyyy px-[8.3vw] xl:px-[120px] pt-[calc(64px+2.5rem)] md:pt-[calc(73px+4rem)] lg:pt-[calc(93px+5rem)] pb-14 lg:pb-32', { 'hidden': !imagesHaveLoaded }]">
      <NuxtPage :transition="transitionObject" />
      <TheMenu />
    </div>
    <div class="page-transition fixed z-[60] top-full left-0 w-full h-full px-[5%] bg-adura-black hidden items-center justify-center">
      <p ref="madText" class="base-text clip-path !text-white text-center" />
    </div>
    <div id="awwwards" class="fixed z-[999] -translate-y-2/4 top-2/4 left-0">
      <a href="https://www.awwwards.com/sites/aduragbemi-abiola" target="_blank">
        <svg width="53.08" height="171.358">
          <path class="js-color-bg" fill="white" d="M0 0h53.08v171.358H0z" />
          <g class="js-color-text" fill="black">
            <path d="M20.048 153.585v-2.002l6.752-3.757h-6.752v-1.9h10.23v2.002l-6.752 3.757h6.752v1.9zM29.899 142.382a3.317 3.317 0 0 1-1.359 1.293c-.575.297-1.223.446-1.944.446-.721 0-1.369-.149-1.944-.446a3.317 3.317 0 0 1-1.359-1.293c-.331-.564-.497-1.232-.497-2.003 0-.769.166-1.437.497-2.002a3.332 3.332 0 0 1 1.359-1.294c.575-.297 1.224-.445 1.944-.445.722 0 1.369.148 1.944.445a3.326 3.326 0 0 1 1.359 1.294c.33.565.496 1.233.496 2.002.001.77-.166 1.438-.496 2.003m-1.703-3.348c-.435-.331-.967-.497-1.601-.497s-1.167.166-1.601.497c-.434.332-.65.78-.65 1.345s.217 1.014.65 1.346c.434.33.967.496 1.601.496s1.166-.166 1.601-.496c.434-.332.649-.78.649-1.346.001-.565-.215-1.013-.649-1.345M22.912 134.996v-1.812h1.185c-.43-.283-.752-.593-.973-.929-.219-.336-.329-.732-.329-1.19 0-.479.127-.902.38-1.272.254-.37.635-.633 1.141-.79-.478-.262-.851-.591-1.118-.985a2.221 2.221 0 0 1-.402-1.265c0-.682.2-1.218.599-1.607.4-.391.957-.585 1.668-.585h5.218v1.812H25.37c-.682 0-1.023.303-1.023.907 0 .467.264.85.789 1.146.527.299 1.286.446 2.28.446h2.865v1.813H25.37c-.682 0-1.023.303-1.023.906 0 .468.275.851.826 1.147.551.298 1.352.446 2.404.446h2.704v1.812h-7.369zM21.626 122.457c-.225.224-.502.336-.833.336s-.608-.112-.833-.336a1.128 1.128 0 0 1-.336-.833c0-.331.111-.609.336-.833.225-.225.502-.336.833-.336s.608.111.833.336c.225.224.337.502.337.833 0 .332-.112.608-.337.833m1.286-1.739h7.366v1.813h-7.366v-1.813zM22.912 118.668v-1.812h1.185a3.348 3.348 0 0 1-.951-1.009 2.434 2.434 0 0 1-.351-1.272c0-.681.19-1.229.57-1.644.38-.414.931-.621 1.651-.621h5.263v1.812h-4.722c-.418 0-.727.096-.92.285-.195.19-.293.447-.293.769 0 .302.116.58.351.833.233.254.577.458 1.03.613.453.156.992.234 1.615.234h2.938v1.812h-7.366zM29.833 109.129a3.33 3.33 0 0 1-1.432 1.169 4.535 4.535 0 0 1-1.805.373 4.537 4.537 0 0 1-1.807-.373c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.771.183-1.413.549-1.93a3.28 3.28 0 0 1 1.382-1.141 4.221 4.221 0 0 1 1.709-.364h.746v5.071c.447-.02.838-.183 1.168-.49.332-.307.498-.724.498-1.248 0-.41-.093-.754-.277-1.031-.186-.278-.473-.529-.863-.753l.542-1.462c.69.303 1.224.724 1.592 1.265.371.541.556 1.235.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.52-.262.258-.395.61-.395 1.06 0 .428.137.784.409 1.067.272.282.604.458.994.525v-3.172zM29.833 100.878c-.375.531-.852.921-1.432 1.169a4.552 4.552 0 0 1-3.612 0c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.77.183-1.412.549-1.93a3.278 3.278 0 0 1 1.382-1.14 4.222 4.222 0 0 1 1.709-.365h.746v5.072a1.794 1.794 0 0 0 1.168-.49c.332-.307.498-.724.498-1.249 0-.41-.093-.753-.277-1.031-.186-.277-.473-.528-.863-.753l.542-1.462c.69.302 1.224.724 1.592 1.265.371.541.556 1.234.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.573c-.41.088-.746.261-1.009.519-.262.258-.395.611-.395 1.06 0 .429.137.784.409 1.067.272.282.604.458.994.526v-3.172zM35.481 16.926l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.781-14.969h3.713l2.673 10.276 2.524-10.276h3.445l2.524 10.276 2.674-10.276zM37.979 27.083c1.426 0 2.495 1.068 2.495 2.495 0 1.425-1.069 2.495-2.495 2.495-1.425 0-2.495-1.07-2.495-2.495-.001-1.427 1.07-2.495 2.495-2.495" />
          </g>
        </svg>
      </a>
    </div>
  </div>
</template>