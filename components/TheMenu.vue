<script setup>
import { gsap } from 'gsap'
import lottie from 'lottie-web'

const links = ref([
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Work',
    url: '/work'
  },
  {
    title: 'Shots',
    url: '/shots'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'My Process',
    url: '/process'
  }
])

let navIsOpen = ref(false)
const hamburger = ref(null)
const hamburgerAnimation = ref(null)
const innerWidth = ref(0)

const loadHamburgerAnimation = () => {
  hamburgerAnimation.value = lottie.loadAnimation({
    container: hamburger.value,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './json/hamburger-menu.json'
  })
  hamburgerAnimation.value.setSpeed(0.9)
}

onMounted(() => {
  loadHamburgerAnimation()
  innerWidth.value = window.innerWidth
  window.addEventListener('resize', (e) => {
    innerWidth.value = e.target.innerWidth
  }, true)
})

const showNav = () => {
  if (window.innerWidth < 1024) {
    if (navIsOpen.value === false) {
      hamburgerAnimation.value.playSegments([4, 15], true)
      navIsOpen.value = true
    } else {
      hamburgerAnimation.value.playSegments([20, 27], true)
      navIsOpen.value = false
    }
  } else {
    navIsOpen.value = true
  }
}

const onMenuButtonEnter = () => {
  if (innerWidth.value < 1024) {
    loadHamburgerAnimation()
    if (navIsOpen.value === true) {
      hamburgerAnimation.value.goToAndStop(15, true)
    }
  }
}

const onMenuButtonLeave = (el, done) => {
  gsap.to(el, {
    scale: 0.7,
    opacity: 0,
    duration: .25,
    ease: 'power4.out',
    onComplete: done
  })
}

const onNavEnter = (el, done) => {
  gsap.fromTo(el, { y: 100, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out',
    onComplete: done
  })
}

const onNavLeave = (el, done) => {
  gsap.fromTo(el, { y: 0, opacity: 1 }, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    onComplete: done
  })
}
</script>

<template>
  <Transition @leave="onMenuButtonLeave" @enter="onMenuButtonEnter">
    <button v-if="innerWidth < 1024 || (innerWidth >= 1024 && !navIsOpen)" class="fixed z-10 bottom-10 lg:bottom-8 right-10 lg:right-0 lg:left-[8.3vw] xl:left-[120px] rounded-full bg-adura-purple grid grid-rows-[max-content_max-content] justify-center content-center w-16 h-16 lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px] font-semibold text-adura-black text-sm xl:text-base lg:hover:brightness-75 transition-all duration-300 ease-linear" @click="showNav">
      <div ref="hamburger" class="lg:hidden w-6 h-6" />
      <div class="hidden lg:block">
        <div class="relative flex items-center gap-x-1.5">
          <p>Tap</p>
          <svg class="absolute left-[33px] xl:left-[40px] bottom-[7px]" width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0701 13.4299L11.0004 13.9999L8.00008 19.4999L5.00039 13.9999L1.5 13.43" stroke="#1A1A1A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 1.5V18.33" stroke="#1A1A1A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <p>For Menu</p>
      </div>
    </button>
  </Transition>
  <Transition @enter="onNavEnter" @leave="onNavLeave">
    <nav v-if="navIsOpen" class="fixed lg:z-20 bg-adura-black border border-black flex flex-col lg:flex-row gap-y-6 items-start lg:items-center justify-between w-[95.6%] h-[75vh] lg:h-max max-h-[750px] left-[2.2%] bottom-4 lg:bottom-8 rounded-[32px] px-10 py-8 xl:px-20 xl:py-10">
      <a class="bg-white flex rounded-[18px] xl:rounded-3xl px-5 py-3 lg:px-4 lg:py-2 xl:px-8 xl:py-4 items-center gap-x-2" href="mailto:abiolaaduragbemiaa@gmail.com">
        <p class="font-normal text-2xl lg:text-xl xl:text-2xl leading-[30px] text-adura-black">Get In Touch</p>
        <svg class="w-8 h-8 lg:w-7 lg:h-7 xl:w-[34px] xl:h-[34px]" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.4263 10.9894L23.0105 10.9894L23.0105 19.5737" stroke="#1A1A1A" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.9897 23.0104L22.8904 11.1098" stroke="#1A1A1A" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <ul class="flex flex-col lg:flex-row gap-y-8 gap-x-7 xl:gap-x-10">
        <li v-for="(link, index) in links" :key="index" class="font-light text-white text-3xl lg:text-xl xl:text-2xl leading-[30px] hover:text-adura-purple transition-all duration-150 ease-linear">
          <NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
        </li>
      </ul>
      <ul class="flex gap-x-3 lg:gap-x-2 xl:gap-x-4">
        <li class="bg-white flex justify-center items-center rounded-full w-10 h-10 xl:w-12 xl:h-12">
          <a href="" target="_blank">
            <svg class="w-5 h-5 xl:w-6 xl:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42924 8.96902H13.1432V10.819C13.6782 9.75502 15.0502 8.79902 17.1112 8.79902C21.0622 8.79902 22.0002 10.917 22.0002 14.803V22H18.0002V15.688C18.0002 13.475 17.4652 12.227 16.1032 12.227C14.2142 12.227 13.4292 13.572 13.4292 15.687V22H9.42924V8.96902ZM2.57024 21.83H6.57024V8.79902H2.57024V21.83ZM7.14324 4.55002C7.14339 4.88529 7.0769 5.21725 6.94763 5.5266C6.81836 5.83595 6.6289 6.11653 6.39024 6.35202C5.90664 6.83264 5.25205 7.10167 4.57024 7.10002C3.88963 7.09956 3.23656 6.83121 2.75224 6.35302C2.51446 6.11673 2.32563 5.83584 2.19659 5.52645C2.06755 5.21705 2.00082 4.88524 2.00024 4.55002C2.00024 3.87302 2.27024 3.22502 2.75324 2.74702C3.23713 2.26817 3.89048 1.99972 4.57124 2.00002C5.25324 2.00002 5.90724 2.26902 6.39024 2.74702C6.87224 3.22502 7.14324 3.87302 7.14324 4.55002Z" fill="#1A1A1A"/>
            </svg>
          </a>
        </li>
        <li class="bg-white flex justify-center items-center rounded-full w-10 h-10 xl:w-12 xl:h-12">
          <a href="" target="_blank">
            <svg class="w-5 h-5 xl:w-6 xl:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.25C6.62344 2.25 2.25 6.62344 2.25 12C2.25 17.3766 6.62344 21.75 12 21.75C17.3766 21.75 21.75 17.3766 21.75 12C21.75 6.62344 17.3766 2.25 12 2.25ZM18.4477 6.74531C19.6078 8.16328 20.3109 9.96797 20.3273 11.9344C20.0531 11.8758 17.2992 11.318 14.5289 11.6672C14.4703 11.5242 14.4117 11.3813 14.3508 11.2383C14.1773 10.8328 13.9922 10.4273 13.7977 10.0312C16.875 8.77266 18.2719 6.98437 18.4477 6.74531ZM12 3.68437C14.1164 3.68437 16.05 4.47891 17.5195 5.78203C17.3695 5.99531 16.1156 7.68047 13.1555 8.79141C11.7914 6.28359 10.2797 4.22578 10.0477 3.91641C10.6875 3.76172 11.3414 3.68437 12 3.68437ZM8.45859 4.47656C8.67891 4.77656 10.1672 6.84141 11.5453 9.29297C7.65 10.3266 4.21875 10.3125 3.84609 10.3078C4.3875 7.72266 6.12891 5.57578 8.45859 4.47656ZM3.67266 12.0117C3.67266 11.9273 3.675 11.8406 3.67734 11.7563C4.04062 11.7633 8.07656 11.8148 12.2367 10.5703C12.4758 11.0367 12.7031 11.5102 12.9117 11.9836C12.8016 12.0141 12.6914 12.0469 12.5836 12.082C8.2875 13.4742 6.00234 17.2594 5.8125 17.5805C4.48359 16.1039 3.67266 14.1516 3.67266 12.0117ZM12 20.3391C10.0734 20.3391 8.29922 19.6828 6.88828 18.5812C7.03828 18.2742 8.72344 15.0188 13.4203 13.3805L13.4742 13.3617C14.6438 16.3992 15.1266 18.9469 15.2508 19.6781C14.2234 20.1172 13.1173 20.3421 12 20.3391ZM16.6523 18.9164C16.568 18.4102 16.125 15.9727 15.0352 12.9797C17.6461 12.5625 19.9383 13.2469 20.2219 13.3359C19.8516 15.6516 18.5227 17.6531 16.6523 18.9164Z" fill="#1A1A1A"/>
            </svg>
          </a>
        </li>
        <li class="bg-white flex justify-center items-center rounded-full w-10 h-10 xl:w-12 xl:h-12">
          <a href="" target="_blank">
            <svg class="w-5 h-5 xl:w-6 xl:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8594 6.89765H19.5352V8.03202H14.8594V6.89765ZM10.1742 11.3859C11.2078 10.8914 11.7492 10.1391 11.7492 8.97655C11.7492 6.67733 10.0383 6.11952 8.0625 6.11952H2.625V17.6601H8.21484C10.3102 17.6601 12.2766 16.6523 12.2766 14.3086C12.2766 12.8601 11.5922 11.7891 10.1742 11.3859ZM5.16094 8.08827H7.53984C8.45625 8.08827 9.27891 8.34374 9.27891 9.4078C9.27891 10.3875 8.63906 10.7812 7.73203 10.7812H5.16094V8.08827ZM7.86797 15.7008H5.15859V12.5226H7.92188C9.0375 12.5226 9.74297 12.9891 9.74297 14.1703C9.74297 15.3328 8.90156 15.7008 7.86797 15.7008ZM21.3633 13.6031C21.3633 11.1305 19.9172 9.0703 17.3016 9.0703C14.7586 9.0703 13.0289 10.9851 13.0289 13.4953C13.0289 16.0969 14.6672 17.8828 17.3016 17.8828C19.2961 17.8828 20.5875 16.9851 21.2086 15.0703H19.1859C18.9656 15.7851 18.0703 16.1601 17.3742 16.1601C16.0289 16.1601 15.3258 15.3726 15.3258 14.0344H21.3469C21.3539 13.8961 21.3633 13.7508 21.3633 13.6031ZM15.3258 12.5859C15.3984 11.4867 16.132 10.8 17.2289 10.8C18.382 10.8 18.9586 11.4773 19.0594 12.5859H15.3258Z" fill="#1A1A1A"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </Transition>
</template>