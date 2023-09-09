<script setup lang="ts">
// import { gsap } from 'gsap'
// import SplitType from 'split-type'

const props = defineProps({
  headshot: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: false
  },
  testimonial: {
    type: String,
    required: true
  },
  devPitch: {
    type: String,
    required: false
  },
  devImage: {
    type: String,
    required: false
  }
})

// const onTextEnter = (el: HTMLElement, done: any) => {
//   if (!el.querySelector('.char')) {
//     SplitType.create(el, {
//       types: 'words, chars'
//     })
//   }

//   gsap.fromTo(el.querySelectorAll('.char'), { y: 15, opacity: 0 }, {
//     y: 0,
//     opacity: 1,
//     stagger: 0.05,
//     duration: 1.5,
//     delay: 10,
//     ease: 'power4.out',
//     onComplete: done
//   })
// }

// const onTextLeave = (el: HTMLElement, done: any) => {
//   if (!el.querySelector('.char')) {
//     SplitType.create(el, {
//       types: 'words, chars'
//     })
//   }
//   const tl = gsap.timeline()
//   tl.fromTo(el.querySelectorAll('.word'), { y: 0 }, {
//     y: -15,
//     opacity: 0,
//     stagger: 0.05,
//     duration: 1.5,
//     ease: 'power4.out',
//     // onComplete: done
//   })

//   if (pitchIsVisible.value) {
//     const parentElement = el?.parentElement
//     let eventualBackgroundSize: number = 0

//     switch (parentElement?.offsetWidth) {
//       case 360:
//         eventualBackgroundSize = 150
//         break
//       case 480:
//         eventualBackgroundSize = 125
//         break
//       default:
//         eventualBackgroundSize = 100
//         break
//     }

//     tl.set(parentElement, {
//       backgroundAttachment: 'fixed',
//       backgroundPositionX: 'center',
//       backgroundPositionY: 'center',
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: '85%',
//       // onComplete: done
//     })
//     .to(parentElement, {
//       duration: 3,
//       borderColor: '#1A1A1A',
//       backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 39.92%), url("extra-image.jpg")',
//       backgroundSize: eventualBackgroundSize,
//       ease: 'power4.out',
//       onComplete: done
//     })
//     // .to(, {
//     //   duration: 3,
//     //   backgroundSize: 'cover',
//     //   ease: 'power4.out',
//     //   onComplete: done
//     // })
//   }
// }

// const pitchIsVisible = ref(false)
// const timeout = ref(0)

// const showPitch = () => {
//   timeout.value = setTimeout(() => {
//     pitchIsVisible.value = true
//   }, 3000)
// }
// const hidePitch = () => {
//   clearTimeout(timeout.value)
//   pitchIsVisible.value = false
// }
</script>

<template>
  <div class="px-6 md:px-10 lg:px-12 xl:px-14 pt-5 md:pt-9 lg:pt-11 xl:pt-12 py-8 md:py-11 lg:py-14 xl:py-16 border border-solid border-[rgba(26,26,26,0.50)] rounded-[32px] w-[360px] sm:w-[480px] md:w-[720px] lg:w-[800px] xl:w-[960px]">
    <div class="flex items-center gap-x-3 lg:gap-x-4">
      <NuxtImg provider="cloudinary" :src="`/headshots/${props.headshot}`" :alt="`${props.headshot.split('-').join(' ')}'s headshot'`" class="w-12 md:w-14 lg:w-20 rounded-full border border-solid border-[#D3D0D0]" />
      <div>
        <p class="text-adura-black text-sm md:text-base lg:text-xl font-bold">{{ props.name }}</p>
        <div class="md:mt-0.5 flex gap-x-1.5 md:gap-x-2 items-center">
          <p class="text-adura-black text-xs md:text-sm lg:text-base font-normal">{{ props.position }}</p>
          <svg v-if="props.company" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.21875" cy="2.39453" r="2" fill="#BBBBBB"/>
          </svg>
          <p v-if="props.company" class="text-adura-black text-xs md:text-sm lg:text-base font-normal">{{ props.company }}</p>
        </div>
      </div>
    </div>
    <p class="mt-5 lg:mt-7 xl:mt-8 text-adura-black text-sm md:text-base lg:text-xl font-normal">{{ props.testimonial }}</p>
    <!-- <Transition @enter="onTextEnter" @leave="onTextLeave">
      <p v-if="props.devPitch && pitchIsVisible" class="absolute w-[310px] sm:w-[430px] md:w-[638px] lg:w-[702px] xl:w-[846px] mt-5 lg:mt-7 xl:mt-8 text-white text-sm md:text-base lg:text-xl font-normal line-clamp-[11] sm:line-clamp-[8] md:line-clamp-6 lg:line-clamp-[7] xl:line-clamp-6" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);">{{ props.devPitch }}</p>
      <p v-else class="mt-5 lg:mt-7 xl:mt-8 text-adura-black text-sm md:text-base lg:text-xl font-normal line-clamp-[11] sm:line-clamp-[8] md:line-clamp-6 lg:line-clamp-[7] xl:line-clamp-6" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);">{{ props.testimonial }}</p>
    </Transition> -->
  </div>
</template>

<!-- <style scoped>
.dev-pitch-container {
  border-color: #1A1A1A;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 39.92%), url('extra-image.jpg');
  background-attachment: fixed;
  background-position-x: right;
  background-position-y: top;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 250ms ease-in-out;
}
</style> -->