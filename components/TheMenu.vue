<script setup lang="ts">
import { gsap } from 'gsap'

const store = usePreloadImagesStore()
const { imagesHaveLoaded } = storeToRefs(store)

const links = ref([
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Shots',
    url: '/shots'
  },
  {
    title: 'Projects',
    url: '/projects'
  },
  {
    title: 'Meet Adura',
    url: '/about'
  }
])

let intervalId: NodeJS.Timeout

const introAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      document.querySelector('.toast > p')?.classList.add('bounce')
      
      clearTimeout(intervalId)

      intervalId = setTimeout(() => {
        gsap.to('.toast', {
          opacity: 0,
          duration: 1,
          ease: 'power4.out'
        })

        clearTimeout(intervalId)
        document.querySelector('.toast > p')?.classList.remove('bounce')
      }, 1000 * 60 * 2)
    }
  })

  tl.to('.toast', {
    opacity: 1,
    duration: .5,
    ease: 'power4.out'
  })
  .fromTo('.toast > p', {
    y: 20,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 2,
    ease: 'power4.out'
  }, '-=.5')
}

onMounted(() => {
  gsap.set('.toast', { opacity: 0 })

  if (imagesHaveLoaded.value) {
    intervalId = setTimeout(() => {
      introAnimation()
    }, 1000 * 60 * 5)
  } else {
    watch(imagesHaveLoaded, (hasLoaded) => {
      if (hasLoaded) {
        intervalId = setTimeout(() => {
          introAnimation()
        }, 1000 * 60 * 5)
      }
    })
  }
})
</script>

<template>
  <nav class="fixed z-10 bottom-6 md:bottom-10 xl:bottom-16 left-0 right-0 mx-auto w-max bg-adura-black border-[.5px] border-[#9E9E9E] rounded-[96px] transition-opacity duration-300 ease-linear hover:!opacity-100">
    <div class="toast absolute -top-16 sm:-top-11 md:-top-12 left-[50%] right-0 w-max -translate-x-[50%]">
      <p class="px-4 py-1.5 text-center bg-adura-black rounded-[96px] text-white text-sm md:text-base">
        Drowning in a sea of creativity? 
        <br class="sm:hidden">
        <NuxtLink
          to="mailto:abiolaaduragbemiaa@gmail.com?cc=idorenyinudoh10@outlook.com&subject=Hey, I really like your portfolio&body=Let's talk about making those waves!"
          class="relative border-b border-solid border-white hover:border-white/10 before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-[1px] before:bg-adura-black before:scale-x-0 before:origin-[100%] hover:before:scale-x-100 hover:before:origin-[0] before:transition-transform before:duration-300 before:ease-linear hover:before:ease-out transition-all duration-300 ease-linear"
        >
          Let's make waves together!
        </NuxtLink>
      </p>
    </div>
    <ul class="max-[350px]:p-1 p-2 md:p-4 flex max-[350px]:gap-x-0 gap-x-1 md:gap-x-4 xl:gap-x-6">
      <li v-for="(link, index) in links" :key="index">
        <NuxtLink
          :to="link.url"
          class="block max-[350px]:px-3 px-4 md:px-8 py-2 md:py-4 rounded-[72px] font-normal text-white/50 bg-transparent text-sm sm:text-base md:text-xl xl:text-2xl transition-all duration-200 ease-linear"
        >
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  font-weight: 500;
  color: theme('colors.adura-black');
  background-color: #E6E6E6;
}
li a:not(.router-link-exact-active):hover {
  color: theme('colors.white');
  background-color: #D1D1D11A;
}
.bounce {
  animation: bounce 3s ease-in-out forwards 2s infinite;
}
.bounce:hover {
  animation-play-state: paused;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>