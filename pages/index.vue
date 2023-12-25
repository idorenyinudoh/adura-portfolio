<script setup lang="ts">
import { gsap } from 'gsap';
import SplitType from 'split-type'

const store = usePreloadImagesStore()
const { imagesHaveLoaded } = storeToRefs(store)

useHead({
  title: 'Aduragbemi Abiola',
  meta: [
    {
      property: 'og:title',
      content: 'Aduragbemi Abiola'
    },
    {
      name: 'twitter:title',
      content: 'Aduragbemi Abiola'
    },
    {
      name: 'description',
      content: 'Aduragbemi Abiola is a product designer with over two years of experience creating user-centric digital experiences and driving business success via design.'
    },
    {
      property: 'og:description',
      content: 'Aduragbemi Abiola is a product designer with over two years of experience creating user-centric digital experiences and driving business success via design.'
    },
    {
      name: 'twitter:description',
      content: 'Aduragbemi Abiola is a product designer with over two years of experience creating user-centric digital experiences and driving business success via design.'
    },
    {
      property: 'og:url',
      content: 'https://www.adura.design'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.adura.design'
    }
  ]
})

const introAnimation = () => {
  const splitFirstName = SplitType.create('.first-name',{
    types: 'words,chars',
    tagName: 'span'
  })
  const splitLastName = SplitType.create('.last-name',{
    types: 'words,chars',
    tagName: 'span'
  })
  const splitExplanation = SplitType.create('.explanation span',{
    types: 'lines,words',
    tagName: 'span'
  })

  const tl = gsap.timeline({
    onComplete: () => {
      splitFirstName.revert()
      splitLastName.revert()
      splitExplanation.revert()
    }
  })

  tl.fromTo(splitFirstName.chars, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 2, ease: 'power4.out' })
  .fromTo(splitLastName.chars, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 2, ease: 'power4.out' }, '-=2.2')
  .fromTo('.last-name + svg', { y: -20, x: -20, rotate: -10 }, { y: 0, x: 0, rotate: 0, opacity: 1, duration: 1.5, ease: 'elastic.inOut' }, '-=1.5')
  .fromTo('.last-name + svg + span', { scaleX: '140%', scaleY: '140%' }, { scaleX: '100%', scaleY: '100%', opacity: 1, duration: .5, ease: 'power4.in' }, '-=1.2')
  .to('.location', { opacity: 1, duration: .5, ease: 'power4.in' }, '-=1')
  .fromTo(splitExplanation.lines, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 2, ease: 'power4.out' }, '<')
}

definePageMeta({
  scrollToTop: false,
})

onMounted(() => {
  const homeContainer = document.querySelector('.home-container')!

  const targets = gsap.utils.toArray([
    homeContainer.querySelector('.last-name + svg'),
    homeContainer.querySelector('.last-name + svg + span'),
    homeContainer.querySelector('.location'),
  ])
  gsap.set(targets, { opacity: 0 })

  if (imagesHaveLoaded.value) {
    introAnimation()
  } else {
    watch(imagesHaveLoaded, (hasLoaded) => {
      if (hasLoaded) {
        introAnimation()  
      }
    })
  }
})
</script>

<template>
  <div class="home-container main -mt-10 before:fixed before:inset-0 before:-z-10">
    <header>
      <h1 class="font-extrabold font-monument-extended text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
        <span class="first-name clip-path">ADURAGBEMI</span>
        <span class="flex">
          <span class="last-name clip-path w-max">ABIOLA</span>
          <svg class="hidden sm:block scale-50 md:scale-[.8] lg:scale-100 -ml-[35px] md:-ml-[30px] -mt-[7px] md:-mt-[1px] lg:mt-1 -z-[1]" width="79" height="30" viewBox="0 0 79 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M73.5496 13.2547C73.6077 12.0534 73.6421 10.8096 73.7639 9.56206C73.8435 8.8612 73.943 8.11589 74.2221 7.47188C74.6002 6.58389 75.4106 6.06973 76.3209 6.35773C76.9205 6.55003 77.5368 7.13395 77.8233 7.68838C78.1345 8.30713 78.1899 9.08939 78.155 9.81013C77.9904 14.1545 77.8696 18.497 77.5519 22.8479C77.3929 25.274 75.6095 26.5926 73.3242 25.9057C71.2603 25.2748 69.2708 24.3355 67.3441 23.3281C64.5215 21.8578 61.7789 20.2097 59.0163 18.606C58.7921 18.4848 58.6898 18.1405 58.5028 17.8651C59.227 15.8508 60.8974 15.4742 62.7287 15.7881C63.9869 16.0177 65.2164 16.5971 66.4002 17.135C67.5622 17.6738 68.6651 18.3676 69.7196 18.9546C70.5889 18.2853 70.0419 17.7856 69.7609 17.3617C66.4159 12.3829 61.5913 9.16737 56.3527 6.51445C55.3447 5.99089 54.1311 5.78123 52.9868 5.65581C40.1392 4.33098 28.0154 6.61504 16.7699 13.0463C11.9388 15.8248 8.68236 20.0834 6.10593 24.8797C5.63846 25.7279 5.64129 26.8176 5.37617 27.7879C5.13198 28.7356 4.43006 29.2233 3.49184 29.3071C2.40152 29.4191 1.30608 28.8993 1.00278 27.9532C0.748795 27.1359 0.556666 26.2287 0.697131 25.4162C0.868292 24.2973 1.21249 23.1274 1.76089 22.1232C4.882 16.2356 9.02693 11.2415 15.0455 8.06348C23.2485 3.724 31.9319 0.88964 41.2918 0.554644C45.6652 0.38936 50.0148 0.181489 54.3827 0.910062C57.0303 1.36349 59.4361 2.30678 61.6238 3.78248C65.3893 6.30226 69.0073 8.95912 71.8964 12.4972C72.1727 12.8123 72.5346 13.0802 72.8737 13.3272C72.9639 13.3887 73.1579 13.315 73.5496 13.2547Z" fill="#B0ABCB"/>
          </svg>
          <span class="hidden sm:block h-max self-center px-2.5 md:px-[18px] lg:px-6 py-[2px] md:py-1 -ml-[33px] lg:-ml-[30px] -mb-[10px] md:-mb-[15px] lg:-mb-5 lg:leading-[30px] rounded-2xl bg-adura-purple text-adura-black text-xs md:text-base font-satoshi font-normal">Product Designer</span>
        </span>
      </h1>
      <div class="location flex items-center gap-x-3 md:gap-x-4 lg:gap-x-[18px] mt-4 xl:mt-6">
        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9999 11.1917C9.43584 11.1917 10.5999 10.0276 10.5999 8.59167C10.5999 7.15573 9.43584 5.99167 7.9999 5.99167C6.56396 5.99167 5.3999 7.15573 5.3999 8.59167C5.3999 10.0276 6.56396 11.1917 7.9999 11.1917Z" stroke="white" stroke-width="0.833333"/>
          <path d="M1.2023 6.40834C2.84396 -0.808331 13.5356 -0.799998 15.169 6.41667C16.1273 10.65 13.494 14.2333 11.1856 16.45C9.51063 18.0667 6.86063 18.0667 5.1773 16.45C2.8773 14.2333 0.243963 10.6417 1.2023 6.40834Z" stroke="white" stroke-width="0.833333"/>
        </svg>
        <p class="text-white font-light text-sm md:text-base lg:text-lg xl:text-2xl">Lagos, Nigeria.</p>
      </div>
    </header>
    <main>
      <p class="explanation clip-path flex flex-col gap-y-[30px] text-white text-base md:text-lg lg:text-2xl font-normal mt-12 lg:mt-16 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[75vw]">
        <span>Welcome to my portfolio exhibition. In here, you'll find my process (how I solve real-world problems using design), testimonials from past and/or current clients and a gallery to some of my past work, shots and case studies.</span>
        <span>I've always imagined my life to be a movie and so, I decided to make an exhibit of a portfolio. I hope you enjoy.</span>
      </p>
    </main>
    <!-- <button class="w-2 h-2 bg-white/50 hover:bg-white transition-all rounded-full block ml-auto mr-[15%] mt-[8%] animate-pulse" />
    <p class="text-white">Here's a picture I took of my university in my final days as an undergraduate as some form of totem to remind me where I'm coming from and how far I've come.</p> -->
  </div>
</template>

<style scoped>
.main::before {
  background: linear-gradient(rgb(0 0 0 / 85%), rgb(0 0 0 / 85%)), url(https://res.cloudinary.com/idorenyinudoh/image/upload/adura-portfolio/landscape-background.webp);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>