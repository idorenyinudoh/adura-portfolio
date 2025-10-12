<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const store = usePreloadImagesStore()
const { imagesHaveLoaded } = storeToRefs(store)

useHead({
  title: 'Projects | Aduragbemi Abiola',
  meta: [
    {
      property: 'og:title',
      content: 'Projects | Aduragbemi Abiola'
    },
    {
      name: 'twitter:title',
      content: 'Projects | Aduragbemi Abiola'
    },
    {
      name: 'description',
      content: 'Projects worked on by Aduragbemi Abiola, a product designer with over two years of experience creating user-centric digital experiences via design.'
    },
    {
      property: 'og:description',
      content: 'Projects worked on by Aduragbemi Abiola, a product designer with over two years of experience creating user-centric digital experiences via design.'
    },
    {
      name: 'twitter:description',
      content: 'Projects worked on by Aduragbemi Abiola, a product designer with over two years of experience creating user-centric digital experiences via design.'
    },
    {
      property: 'og:url',
      content: 'https://adura.design/projects'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://adura.design/projects'
    }
  ]
})

definePageMeta({
  scrollToTop: false
})

interface Project {
  isCaseStudy: boolean
  image: string
  tags: string[]
  company: string
  title: string
  tasks: string[]
  duration: string
  description: string[]
  link: string
}

const activeTab = ref<'main' | 'side'>('main')
const videoModalOpen = ref(false)
const currentVideoUrl = ref('')

const openVideoModal = (videoUrl: string) => {
  currentVideoUrl.value = videoUrl
  videoModalOpen.value = true
}

const closeVideoModal = () => {
  videoModalOpen.value = false
  currentVideoUrl.value = ''
}

const projects: Project[] = [
  {
    isCaseStudy: false,
    image: 'interswitch.webp',
    tags: ['Healthcare', 'AI'],
    company: 'https://interswitchgroup.com',
    title: 'Interswitch',
    tasks: ['Web App', 'SaaS', 'Mobile App'],
    duration: 'Feb 2025 - Present',
    description: [
      'Interswitch is a leading African technology company, best known for powering financial transactions across the continent. Beyond payments, the company is extending its expertise in building secure, scalable, and interoperable systems into the healthcare space through its Digital Health Platform (DHP).',
      'DHP aims to create a unified ecosystem that securely stores and exchanges patient health data, integrates with electronic medical records, and enables services such as appointment booking, consultation payments, access to medications, and real-time information sharing among healthcare providers.',
    ],
    link: 'interswitch'
  },
  {
    isCaseStudy: false,
    image: 'kole.webp',
    tags: ['Construction', 'AI'],
    company: 'https://getkole.co/',
    title: 'Kólé',
    tasks: ['Website', 'Mobile App', 'Web App'],
    duration: 'Apr 2023 - Present',
    description: [
      'Kólé is dedicated to revolutionising construction planning and management in Africa. Empowering aspiring home owners and construction professionals alike with cutting-edge digital solutions that simplify and optimise every aspect of the construction journey.',
      'From scheduling to budgeting and resource allocation, Kólé streamlines your building journey, keeping your project on track and within budget.'
    ],
    link: 'kole'
  },
  {
    isCaseStudy: false,
    image: 'sciart-finance.webp',
    tags: ['Fintech', 'Investment'],
    company: 'https://sciartfinance.com/',
    title: 'Sciart Finance',
    tasks: ['Mobile App', 'Administrator Back-office'],
    duration: '4 - 5 Weeks',
    description: [
      'Sciart Finance Company Limited offers comprehensive financial and investment services as well as savings and bill payment services. They also provide context-relevant advisory services to businesses and individuals.',
      'They are a CBN-licensed finance company built for small and medium-sized businesses who are currently underserved by the traditional finance sector.'
    ],
    link: 'sciart-finance'
  },
  {
    isCaseStudy: false,
    image: 'studio-creatae.webp',
    tags: ['Design Agency'],
    company: 'https://www.linkedin.com/company/studio-creatae/',
    title: 'Studio Creatae',
    tasks: ['Website Design'],
    duration: '3 - 4 Weeks',
    description: [
      'Studio Creatae is growing brands with value based experiences - using branding and marketing communications.',
      'They focus on crafting timeless experiences that define brands while shaping brand perceptions through thoughtfully-curated experiential interactions.'
    ],
    link: 'studio-creatae'
  },
  {
    isCaseStudy: false,
    image: 'errandpay.webp',
    tags: ['Fintech'],
    company: 'https://errandpay.com/',
    title: 'ErrandPay',
    tasks: ['Mobile Apps', 'Administrator Back-office'],
    duration: 'Jul 2022 - Apr 2023',
    description: [
      'ErrandPay offers financial services to individuals and business owners to start their payment collection company in days, processing tens of millions of Naira daily with thousands of current users.',
      'They also white-label payment solutions where users can start processing payments for traders and agents, providing autonomy and customisation of services. ErrandPay also provides features including instant settlement, bill payments, commission disbursements, chargeback requests, float requests, and so on.'
    ],
    link: 'errandpay'
  },
  {
    isCaseStudy: false,
    image: 'betasms.webp',
    tags: ['Telecomms'],
    company: 'https://betasms.com/',
    title: 'BetaSMS',
    tasks: ['Administrator Back-office'],
    duration: 'Aug 2022 - Dec 2022',
    description: [
      'BetaSMS is a communication platform as a service (CPAAS) that enables businesses and individuals send bulk SMS messages to all network providers in Nigeria and international networks worldwide. BetaSMS delivers messages to all active numbers, including DND numbers with real-time delivery reports.',
      'They also provide a large selection of marketing tools to ensure your bulk SMS messages and voice SMS messages / robocalls in Nigeria is a huge success. Furthermore, BetaSMS provides users with reliable databases. They deliver messages to all countries in the world. You can now send bulk SMS to Africa, America, Asia, Europe, etc.'
    ],
    link: 'betasms'
  },
  {
    isCaseStudy: false,
    image: 'hydrogen.webp',
    tags: ['Fintech'],
    company: 'https://hydrogenpay.com/',
    title: 'Hydrogen',
    tasks: ['Administrator Back-office', 'Payment gateway'],
    duration: '3 - 4 Weeks',
    description: [
      'HydrogenPay aims at simplifying payments for African businesses and business owners. Business owners are able to collect payments, monitor transactions, confirm payments instantly, and grow their businesses with seamless payment solutions.',
    ],
    link: 'hydrogen'
  },
  {
    isCaseStudy: true,
    image: 'bridgefinance.webp',
    tags: ['Fintech'],
    company: '',
    title: 'BridgeFinance',
    tasks: ['Case Study'],
    duration: '6 - 8 Weeks',
    description: [
      'In the 2021 Fintech Times report, with respect to fintech, Nigeria\'s fintech landscape consisted of 210 to 250 fintech companies, key stakeholders (banks, telecom companies and the government), enablers and funding partners (i.e universities and research institutions, investors, incubators, technology and consumers).',
      'Thus, birthing the problem of these institutions (traditional banks, MFBs, mobile banks) wrestling for users, and while this might be a good business or profit-making strategy, it has an adverse effect on users creating problems like confusion on the path of users (as proven in Hick\'s Law) and occasional cognitive overload, to mention a few.'
    ],
    link: 'https://www.behance.net/gallery/189949861/BridgeFinance'
  }
]

const introAnimation = () => {
  gsap.set('.frames', { opacity: 0 })
  gsap.set('.frames + div', { opacity: 0 })

  const splitHeading = SplitType.create('.frames + div h1',{
    types: 'lines',
    tagName: 'span'
  })

  const tl = gsap.timeline({
    onComplete: () => {
      splitHeading.revert()
    }
  })

  tl.to('.frames', { opacity: 1, duration: 1, ease: 'power4.out' })
  .fromTo('.frames', { background: 'transparent' }, { background: 'rgb(26 26 26 / 0.8)', duration: 2, ease: 'power4.out' }, '<')
  .fromTo('.frames > div:nth-of-type(odd)', { y: '0', opacity: 0 }, { y: '-7%', opacity: 1, duration: 2, ease: 'power4.out' }, '<')
  .fromTo('.frames > div:nth-of-type(even)', { y: '-17%', opacity: 0 }, { y: '-10%', opacity: 1, duration: 2, ease: 'power4.out' }, '<')
  .to('.frames + div', { opacity: 1, duration: 1, ease: 'power4.out' }, '-=2')
  .fromTo(splitHeading.lines, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 2, ease: 'power4.out' }, '<')
}

const hideScrollIndicator = () => {
  if (window.scrollY > window.innerHeight / 4) {
    document.querySelector('.scroll-indicator')?.classList.add('opacity-0')
  }
}

onMounted(() => {
  window.addEventListener('scroll', hideScrollIndicator)

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

onUnmounted(() => {
  window.removeEventListener('scroll', hideScrollIndicator)
})
</script>

<template>
  <div>
    <TheHeader />
    <article>
      <div class="hero relative -mx-[8.3vw] xl:-mx-[120px] -mt-16 md:-mt-24 h-[80vh] md:h-[calc(100vh-173px)] xl:h-[calc(100vh-225px)] overflow-hidden">
        <div class="frames absolute w-[calc(100%+25vh)] -left-[12.5vh] -z-10 inset-0 grid grid-cols-3 gap-x-5 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 bg-adura-black/80">
          <div class="flex flex-col">
            <div v-for="(_, index) in 2" :key="index" class="scroll py-2.5 md:py-4 lg:py-5 xl:py-6 flex flex-col gap-y-5 md:gap-y-8 lg:gap-y-10 xl:gap-y-12">
              <NuxtImg src="/projects/frames/frame-1.png" alt="screenshot of kólé dashboard in a frame" />
              <NuxtImg src="/projects/frames/frame-2.png" alt="screenshot of errandpay dashboard in a frame" />
              <NuxtImg src="/projects/frames/frame-3.png" alt="screenshot of logoipsum dashboard in a frame" />
            </div>
          </div>
          <div class="flex flex-col">
            <div v-for="(_, index) in 2" :key="index" class="scroll py-2.5 md:py-4 lg:py-5 xl:py-6 flex flex-col gap-y-5 md:gap-y-8 lg:gap-y-10 xl:gap-y-12">
              <NuxtImg src="/projects/frames/frame-4.png" alt="screenshots from kólé dashboard in a frame" />
              <NuxtImg src="/projects/frames/frame-5.png" alt="screenshots from betasms dashboard in a frame" />
              <NuxtImg src="/projects/frames/frame-6.png" alt="screenshot of studio creatae's website footer in a frame" />
            </div>
          </div>
          <div class="flex flex-col">
            <div v-for="(_, index) in 2" :key="index" class="scroll py-2.5 md:py-4 lg:py-5 xl:py-6 flex flex-col gap-y-5 md:gap-y-8 lg:gap-y-10 xl:gap-y-12">
              <NuxtImg src="/projects/frames/frame-7.png" alt="screenshot of betasms dashboard in a frame" />
              <NuxtImg src="/projects/frames/frame-8.png" alt="screenshot of studio creatae's website hero in a frame" />
              <NuxtImg src="/projects/frames/frame-9.png" alt="screenshot of sciart finance's login page in a frame" />
            </div>
          </div>
        </div>
        <div class="w-full h-full flex justify-center items-center bg-adura-black/[.87]">
          <h1 class="clip-path text-white text-center mx-[15%]">RECENT WORKS OF ART</h1>
        </div>
        <div class="scroll-indicator absolute bottom-[17%] sm:bottom-[10%] md:bottom-[5%] right-[10%] md:right-[5%] w-7 h-7 md:w-10 md:h-10 border-2 border-solid border-white rounded-full flex justify-center items-center animate-bounce transition-opacity duration-300 ease-linear">
          <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="#FFF">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      <main class="pt-20 md:pt-28 lg:pt-36 pb-9 md:pb-14 lg:pb-8">
        <div class="w-max mx-auto flex gap-x-2 sm:gap-x-4 items-center p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#F9F9FA]">
          <button
            @click="activeTab = 'main'"
            :class="[
              'py-1.5 px-3 sm:py-2 sm:px-5 text-base sm:text-2xl font-medium tracking-tight transition-all duration-300',
              activeTab === 'main' ? 'text-adura-black bg-white rounded-lg' : 'text-[#BBB] bg-transparent'
            ]"
          >
            Main plot
          </button>
          <button
            @click="activeTab = 'side'"
            :class="[
              'py-1.5 px-3 sm:py-2 sm:px-5 text-base sm:text-2xl font-medium tracking-tight transition-all duration-300',
              activeTab === 'side' ? 'text-adura-black bg-white rounded-lg' : 'text-[#BBB] bg-transparent'
            ]"
          >
            Side quests
          </button>
        </div>

        <Transition name="fade" mode="out-in">
          <div v-if="activeTab === 'main'" key="main">
            <article v-for="(project, index) in projects" :key="index" class="py-10 md:py-14 lg:py-20 grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-12 lg:gap-x-20 items-center">
              <aside class="hidden md:flex rounded-2xl bg-[#C0DCB6] p-4 w-[195px] lg:w-[247px] flex-col gap-y-4">
                <div class="relative rounded-lg bg-white w-full pt-[80%]">
                  <NuxtImg class="bounce absolute bottom-[calc(22%+2px)] left-0 right-0 mx-auto w-2/5" :src="`/projects/logos/${project.image}`" :alt="`${project.title} logo`" />
                  <div class="shrink absolute bottom-[22%] left-0 right-0 mx-auto bg-[#D9D9D9]/30 w-1/2 h-[5px] rounded-[80%]" />
                </div>
                <div class="flex justify-between items-center px-3 lg:px-4 py-1.5 lg:py-2 bg-white rounded-2xl lg:rounded-[32px]">
                  <p class="text-adura-black text-xs md:text-sm lg:text-base font-normal">{{ project.tags.join(', ') }}</p>
                  <NuxtLink :to="project.company" target="_blank">
                    <svg class="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </NuxtLink>
                </div>
              </aside>
              <div class="text-sm md:text-base lg:text-xl text-adura-black font-normal">
                <h2 class="mt-0 mb-3 lg:mb-6 font-satoshi text-xl md:text-2xl lg:text-3xl font-bold">{{ project.title }}</h2>
                <p class="mb-1 lg:mb-2">{{ project.tasks.join(', ')}}</p>
                <p class="mb-4">{{ project.duration }}</p>
                <p class="py-4 border-t border-solid border-adura-black/20">
                  <template v-for="(desc, index) in project.description" :key="index">
                    <br v-if="index !== 0" />
                    <br v-if="index !== 0" />
                    <span>{{ desc }}</span>
                  </template>
                </p>
                <NuxtLink class="relative text-adura-black border-b border-solid border-adura-black font-light italic before:absolute before:-bottom-[1px] before:left-0 before:w-full before:h-[1px] before:bg-white before:scale-x-0 before:origin-[100%] hover:before:scale-x-100 hover:before:origin-[0] before:transition-transform before:duration-300 before:delay-200 before:ease-linear hover:before:ease-out" :to="project.isCaseStudy ? project.link : `/projects/${project.link}`" :target="project.isCaseStudy ? '_blank' : '_self'">
                  {{ project.isCaseStudy ? 'See case study presentation' : 'See design process' }}
                </NuxtLink>
              </div>
            </article>
          </div>

          <div v-else key="side" class="mt-8 lg:mt-16 grid grid-cols-1 grid-rows-[repeat(9,300px)] lg:grid-cols-3 lg:grid-rows-[repeat(4,400px)] 2xl:grid-rows-[repeat(4,500px)] gap-4 lg:gap-8">
          <article class="relative group rounded-2xl md:rounded-3xl lg:col-span-2 overflow-hidden">
            <img src="~/assets/images/quests/quantity.png" alt="quantity ai website mockup" class="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105">
            <div class="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-[#663F254D] backdrop-blur-sm p-4 md:p-8 flex flex-col gap-y-1.5 md:gap-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div class="-ml-1 md:-ml-2 flex flex-wrap gap-1.5 items-center">
                <h2 class="m-0 text-2xl md:text-4xl text-white">QUOTING</h2>
                <p class="rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Product design</p>
                <p class="hidden 2xl:block rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Branding</p>
                <p class="hidden 2xl:block rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Website design</p>
                <p class="hidden 2xl:block rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Framer development</p>
                <p class="2xl:hidden rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">+3</p>
              </div>
              <p class="text-base md:text-xl font-normal text-[#E0E0E0] tracking-tight">A smart quoting platform for contractors. I designed the web and mobile experience, defined user flows, and built the Framer landing page for launch.</p>
              <NuxtLink to="https://quoting.ai/" target="_blank" class="mt-auto py-1.5 md:py-2 pl-3 md:pl-4 pr-3 md:pr-3.5 rounded-2xl md:rounded-3xl w-max flex gap-x-1 md:gap-x-[5px] items-center bg-white hover:brightness-95 hover:scale-105 transition-all duration-200 ease-out">
                <p class="text-base md:text-lg font-normal text-[#848484] tracking-tight">See website</p>
                <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.998 8.05C16.998 7.78478 16.8926 7.53043 16.7051 7.34289C16.5176 7.15536 16.2632 7.05 15.998 7.05L7.99799 7C7.73277 7 7.47842 7.10536 7.29088 7.29289C7.10334 7.48043 6.99799 7.73478 6.99799 8C6.99799 8.26522 7.10334 8.51957 7.29088 8.70711C7.47842 8.89464 7.73277 9 7.99799 9H13.558L5.28799 17.29C5.19426 17.383 5.11986 17.4936 5.06909 17.6154C5.01833 17.7373 4.99219 17.868 4.99219 18C4.99219 18.132 5.01833 18.2627 5.06909 18.3846C5.11986 18.5064 5.19426 18.617 5.28799 18.71C5.38095 18.8037 5.49155 18.8781 5.61341 18.9289C5.73527 18.9797 5.86597 19.0058 5.99799 19.0058C6.13 19.0058 6.2607 18.9797 6.38256 18.9289C6.50442 18.8781 6.61502 18.8037 6.70799 18.71L14.998 10.42V16C14.998 16.2652 15.1033 16.5196 15.2909 16.7071C15.4784 16.8946 15.7328 17 15.998 17C16.2632 17 16.5176 16.8946 16.7051 16.7071C16.8926 16.5196 16.998 16.2652 16.998 16V8.05Z" fill="#AAAAAA"/>
                </svg>
              </NuxtLink>
            </div>
          </article>
          <article class="relative group rounded-2xl md:rounded-3xl overflow-hidden">
            <img src="~/assets/images/quests/sciart.png" alt="sciart app mockup" class="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105">
            <div class="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-[#255E4B4D] backdrop-blur-sm p-4 md:p-8 flex flex-col gap-y-1.5 md:gap-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div class="-ml-1 md:-ml-2 flex flex-wrap gap-1.5 items-center">
                <h2 class="m-0 text-2xl md:text-4xl text-white">SCIART</h2>
                <p class="rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Mobile app</p>
                <p class="hidden 2xl:block rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Admin dashboard</p>
                <p class="2xl:hidden rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">+1</p>
              </div>
              <p class="text-base md:text-xl font-normal text-[#E0E0E0] tracking-tight">A fintech wallet pivot. I redesigned the mobile app to clarify the brand's new direction and simplify user interaction.</p>
              <NuxtLink to="https://apps.apple.com/ng/app/sciart-finance/id6584520980" target="_blank" class="mt-auto py-1.5 md:py-2 pl-3 md:pl-4 pr-3 md:pr-3.5 rounded-2xl md:rounded-3xl w-max flex gap-x-1 md:gap-x-[5px] items-center bg-white hover:brightness-95 hover:scale-105 transition-all duration-200 ease-out">
                <p class="text-base md:text-lg font-normal text-[#848484] tracking-tight">View site</p>
                <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.998 8.05C16.998 7.78478 16.8926 7.53043 16.7051 7.34289C16.5176 7.15536 16.2632 7.05 15.998 7.05L7.99799 7C7.73277 7 7.47842 7.10536 7.29088 7.29289C7.10334 7.48043 6.99799 7.73478 6.99799 8C6.99799 8.26522 7.10334 8.51957 7.29088 8.70711C7.47842 8.89464 7.73277 9 7.99799 9H13.558L5.28799 17.29C5.19426 17.383 5.11986 17.4936 5.06909 17.6154C5.01833 17.7373 4.99219 17.868 4.99219 18C4.99219 18.132 5.01833 18.2627 5.06909 18.3846C5.11986 18.5064 5.19426 18.617 5.28799 18.71C5.38095 18.8037 5.49155 18.8781 5.61341 18.9289C5.73527 18.9797 5.86597 19.0058 5.99799 19.0058C6.13 19.0058 6.2607 18.9797 6.38256 18.9289C6.50442 18.8781 6.61502 18.8037 6.70799 18.71L14.998 10.42V16C14.998 16.2652 15.1033 16.5196 15.2909 16.7071C15.4784 16.8946 15.7328 17 15.998 17C16.2632 17 16.5176 16.8946 16.7051 16.7071C16.8926 16.5196 16.998 16.2652 16.998 16V8.05Z" fill="#AAAAAA"/>
                </svg>
              </NuxtLink>
            </div>
          </article>
          <div class="lg:col-span-3 grid grid-cols-1 grid-rows-[repeat(2,300px)] lg:grid-cols-2 lg:grid-rows-1 gap-4 lg:gap-x-8 lg:items-center">
            <article class="h-full relative group rounded-2xl md:rounded-3xl overflow-hidden">
              <img src="~/assets/images/quests/wa.png" alt="workflow architects website mockup" class="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105">
              <div class="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-[#574A0C4D] backdrop-blur-sm p-4 md:p-8 flex flex-col gap-y-1.5 md:gap-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
                <div class="-ml-1 md:-ml-2 flex flex-wrap gap-1.5 items-center">
                  <h2 class="m-0 text-2xl md:text-4xl text-white">WA</h2>
                  <p class="rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Website</p>
                  <p class="hidden 2xl:block rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Admin dashboard</p>
                  <p class="2xl:hidden rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">+1</p>
                </div>
                <p class="text-base md:text-xl font-normal text-[#E0E0E0] tracking-tight">A process-building agency. I developed the brand identity and designed the landing page to reflect their structured approach.</p>
                <NuxtLink to="https://main.d1scst0n43xrzm.amplifyapp.com/" target="_blank" class="mt-auto py-1.5 md:py-2 pl-3 md:pl-4 pr-3 md:pr-3.5 rounded-2xl md:rounded-3xl w-max flex gap-x-1 md:gap-x-[5px] items-center bg-white hover:brightness-95 hover:scale-105 transition-all duration-200 ease-out">
                  <p class="text-base md:text-lg font-normal text-[#848484] tracking-tight">Preview</p>
                  <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.998 8.05C16.998 7.78478 16.8926 7.53043 16.7051 7.34289C16.5176 7.15536 16.2632 7.05 15.998 7.05L7.99799 7C7.73277 7 7.47842 7.10536 7.29088 7.29289C7.10334 7.48043 6.99799 7.73478 6.99799 8C6.99799 8.26522 7.10334 8.51957 7.29088 8.70711C7.47842 8.89464 7.73277 9 7.99799 9H13.558L5.28799 17.29C5.19426 17.383 5.11986 17.4936 5.06909 17.6154C5.01833 17.7373 4.99219 17.868 4.99219 18C4.99219 18.132 5.01833 18.2627 5.06909 18.3846C5.11986 18.5064 5.19426 18.617 5.28799 18.71C5.38095 18.8037 5.49155 18.8781 5.61341 18.9289C5.73527 18.9797 5.86597 19.0058 5.99799 19.0058C6.13 19.0058 6.2607 18.9797 6.38256 18.9289C6.50442 18.8781 6.61502 18.8037 6.70799 18.71L14.998 10.42V16C14.998 16.2652 15.1033 16.5196 15.2909 16.7071C15.4784 16.8946 15.7328 17 15.998 17C16.2632 17 16.5176 16.8946 16.7051 16.7071C16.8926 16.5196 16.998 16.2652 16.998 16V8.05Z" fill="#AAAAAA"/>
                  </svg>
                </NuxtLink>
              </div>
            </article>
            <article class="h-full relative group rounded-2xl md:rounded-3xl overflow-hidden">
              <img src="~/assets/images/quests/share.png" alt="share app mockup" class="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105">
              <div class="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-[#346EA34D] backdrop-blur-sm p-4 md:p-8 flex flex-col gap-y-1.5 md:gap-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
                <div class="-ml-1 md:-ml-2 flex flex-wrap gap-1.5 items-center">
                  <h2 class="m-0 text-2xl md:text-4xl text-white">SHARE!</h2>
                  <p class="rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Mobile app</p>
                </div>
                <p class="text-base md:text-xl font-normal text-[#E0E0E0] tracking-tight">A contact-sharing app powered by QR and short links. I designed the mobile experience to make sharing fast, secure, and effortless.</p>
                <NuxtLink to="https://www.figma.com/proto/Il93Fl2D9R46MM5S7wkK6j/Share--app?node-id=29612-13590&p=f&t=nOzbllfohBI54c1j-0&scaling=scale-down&content-scaling=fixed&page-id=5845%3A93856&starting-point-node-id=29612%3A13590&show-proto-sidebar=1" target="_blank" class="mt-auto py-1.5 md:py-2 pl-3 md:pl-4 pr-3 md:pr-3.5 rounded-2xl md:rounded-3xl w-max flex gap-x-1 md:gap-x-[5px] items-center bg-white hover:brightness-95 hover:scale-105 transition-all duration-200 ease-out">
                  <p class="text-base md:text-lg font-normal text-[#848484] tracking-tight">See prototype</p>
                  <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.998 8.05C16.998 7.78478 16.8926 7.53043 16.7051 7.34289C16.5176 7.15536 16.2632 7.05 15.998 7.05L7.99799 7C7.73277 7 7.47842 7.10536 7.29088 7.29289C7.10334 7.48043 6.99799 7.73478 6.99799 8C6.99799 8.26522 7.10334 8.51957 7.29088 8.70711C7.47842 8.89464 7.73277 9 7.99799 9H13.558L5.28799 17.29C5.19426 17.383 5.11986 17.4936 5.06909 17.6154C5.01833 17.7373 4.99219 17.868 4.99219 18C4.99219 18.132 5.01833 18.2627 5.06909 18.3846C5.11986 18.5064 5.19426 18.617 5.28799 18.71C5.38095 18.8037 5.49155 18.8781 5.61341 18.9289C5.73527 18.9797 5.86597 19.0058 5.99799 19.0058C6.13 19.0058 6.2607 18.9797 6.38256 18.9289C6.50442 18.8781 6.61502 18.8037 6.70799 18.71L14.998 10.42V16C14.998 16.2652 15.1033 16.5196 15.2909 16.7071C15.4784 16.8946 15.7328 17 15.998 17C16.2632 17 16.5176 16.8946 16.7051 16.7071C16.8926 16.5196 16.998 16.2652 16.998 16V8.05Z" fill="#AAAAAA"/>
                  </svg>
                </NuxtLink>
              </div>
            </article>
          </div>
          <article class="relative group rounded-2xl md:rounded-3xl overflow-hidden">
            <img src="~/assets/images/quests/bp.png" alt="bp dashboard mockup" class="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105">
            <div class="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-[#082B4B4D] backdrop-blur-sm p-4 md:p-8 flex flex-col gap-y-1.5 md:gap-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div class="-ml-1 md:-ml-2 flex flex-wrap gap-1.5 items-center">
                <h2 class="m-0 text-2xl md:text-4xl text-white">BP</h2>
                <p class="rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Web app</p>
                <p class="hidden 2xl:block rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Mobile app</p>
                <p class="hidden 2xl:block rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Admin dashboard</p>
                <p class="2xl:hidden rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">+2</p>
              </div>
              <p class="text-base md:text-xl font-normal text-[#E0E0E0] tracking-tight">I helped design BorderPal's web app, creating a clean, intuitive experience that simplifies cross-border payments and business wallet management.</p>
              <NuxtLink to="https://apps.apple.com/ng/app/borderpal/id1567748500" target="_blank" class="mt-auto py-1.5 md:py-2 pl-3 md:pl-4 pr-3 md:pr-3.5 rounded-2xl md:rounded-3xl w-max flex gap-x-1 md:gap-x-[5px] items-center bg-white hover:brightness-95 hover:scale-105 transition-all duration-200 ease-out">
                <p class="text-base md:text-lg font-normal text-[#848484] tracking-tight">See live app</p>
                <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.998 8.05C16.998 7.78478 16.8926 7.53043 16.7051 7.34289C16.5176 7.15536 16.2632 7.05 15.998 7.05L7.99799 7C7.73277 7 7.47842 7.10536 7.29088 7.29289C7.10334 7.48043 6.99799 7.73478 6.99799 8C6.99799 8.26522 7.10334 8.51957 7.29088 8.70711C7.47842 8.89464 7.73277 9 7.99799 9H13.558L5.28799 17.29C5.19426 17.383 5.11986 17.4936 5.06909 17.6154C5.01833 17.7373 4.99219 17.868 4.99219 18C4.99219 18.132 5.01833 18.2627 5.06909 18.3846C5.11986 18.5064 5.19426 18.617 5.28799 18.71C5.38095 18.8037 5.49155 18.8781 5.61341 18.9289C5.73527 18.9797 5.86597 19.0058 5.99799 19.0058C6.13 19.0058 6.2607 18.9797 6.38256 18.9289C6.50442 18.8781 6.61502 18.8037 6.70799 18.71L14.998 10.42V16C14.998 16.2652 15.1033 16.5196 15.2909 16.7071C15.4784 16.8946 15.7328 17 15.998 17C16.2632 17 16.5176 16.8946 16.7051 16.7071C16.8926 16.5196 16.998 16.2652 16.998 16V8.05Z" fill="#AAAAAA"/>
                </svg>
              </NuxtLink>
            </div>
          </article>
          <article class="relative group rounded-2xl md:rounded-3xl lg:col-span-2 overflow-hidden">
            <img src="~/assets/images/quests/tanwa.png" alt="tanwa mockup" class="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105">
            <div class="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-[#451FB24D] backdrop-blur-sm p-4 md:p-8 flex flex-col gap-y-1.5 md:gap-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div class="-ml-1 md:-ml-2 flex flex-wrap gap-1.5 items-center">
                <h2 class="m-0 text-2xl md:text-4xl text-white">TANWA</h2>
                <p class="rounded-[40px] px-3 md:px-4 py-0.5 md:py-1 font-spline text-sm md:text-base text-[#667085] font-normal leading-[18px] antialiased tracking-tighter bg-white">Mobile app</p>
              </div>
              <p class="text-base md:text-xl font-normal text-[#E0E0E0] tracking-tight">A sustainability-focused lifestyle app. I designed the mobile experience to help users make eco-conscious decisions with ease.</p>
              <NuxtLink to="https://apps.apple.com/ng/app/tanwa/id6520389309" target="_blank" class="mt-auto py-1.5 md:py-2 pl-3 md:pl-4 pr-3 md:pr-3.5 rounded-2xl md:rounded-3xl w-max flex gap-x-1 md:gap-x-[5px] items-center bg-white hover:brightness-95 hover:scale-105 transition-all duration-200 ease-out">
                <p class="text-base md:text-lg font-normal text-[#848484] tracking-tight">See live app</p>
                <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.998 8.05C16.998 7.78478 16.8926 7.53043 16.7051 7.34289C16.5176 7.15536 16.2632 7.05 15.998 7.05L7.99799 7C7.73277 7 7.47842 7.10536 7.29088 7.29289C7.10334 7.48043 6.99799 7.73478 6.99799 8C6.99799 8.26522 7.10334 8.51957 7.29088 8.70711C7.47842 8.89464 7.73277 9 7.99799 9H13.558L5.28799 17.29C5.19426 17.383 5.11986 17.4936 5.06909 17.6154C5.01833 17.7373 4.99219 17.868 4.99219 18C4.99219 18.132 5.01833 18.2627 5.06909 18.3846C5.11986 18.5064 5.19426 18.617 5.28799 18.71C5.38095 18.8037 5.49155 18.8781 5.61341 18.9289C5.73527 18.9797 5.86597 19.0058 5.99799 19.0058C6.13 19.0058 6.2607 18.9797 6.38256 18.9289C6.50442 18.8781 6.61502 18.8037 6.70799 18.71L14.998 10.42V16C14.998 16.2652 15.1033 16.5196 15.2909 16.7071C15.4784 16.8946 15.7328 17 15.998 17C16.2632 17 16.5176 16.8946 16.7051 16.7071C16.8926 16.5196 16.998 16.2652 16.998 16V8.05Z" fill="#AAAAAA"/>
                </svg>
              </NuxtLink>
            </div>
          </article>
          <article class="relative group rounded-2xl md:rounded-3xl overflow-hidden">
            <img src="~/assets/images/quests/website-1.png" alt="website-1 app mockup" class="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105">
            <div class="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-[#082B4B4D] backdrop-blur-sm p-4 md:p-8 flex flex-col gap-y-1.5 md:gap-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div class="-ml-1 md:-ml-2 flex flex-wrap gap-1.5 items-center">
                <h2 class="m-0 text-2xl md:text-4xl text-white">FULL NAV</h2>
              </div>
              <button @click="openVideoModal('https://player.vimeo.com/video/1126638912?h=bbfd9d0773')" class="mt-auto py-1.5 md:py-2 pl-3 md:pl-4 pr-3 md:pr-3.5 rounded-2xl md:rounded-3xl w-max flex gap-x-1 md:gap-x-[5px] items-center bg-white hover:brightness-95 hover:scale-105 transition-all duration-200 ease-out">
                <p class="text-base md:text-lg font-normal text-[#848484] tracking-tight">Preview</p>
                <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.998 8.05C16.998 7.78478 16.8926 7.53043 16.7051 7.34289C16.5176 7.15536 16.2632 7.05 15.998 7.05L7.99799 7C7.73277 7 7.47842 7.10536 7.29088 7.29289C7.10334 7.48043 6.99799 7.73478 6.99799 8C6.99799 8.26522 7.10334 8.51957 7.29088 8.70711C7.47842 8.89464 7.73277 9 7.99799 9H13.558L5.28799 17.29C5.19426 17.383 5.11986 17.4936 5.06909 17.6154C5.01833 17.7373 4.99219 17.868 4.99219 18C4.99219 18.132 5.01833 18.2627 5.06909 18.3846C5.11986 18.5064 5.19426 18.617 5.28799 18.71C5.38095 18.8037 5.49155 18.8781 5.61341 18.9289C5.73527 18.9797 5.86597 19.0058 5.99799 19.0058C6.13 19.0058 6.2607 18.9797 6.38256 18.9289C6.50442 18.8781 6.61502 18.8037 6.70799 18.71L14.998 10.42V16C14.998 16.2652 15.1033 16.5196 15.2909 16.7071C15.4784 16.8946 15.7328 17 15.998 17C16.2632 17 16.5176 16.8946 16.7051 16.7071C16.8926 16.5196 16.998 16.2652 16.998 16V8.05Z" fill="#AAAAAA"/>
                </svg>
              </button>
            </div>
          </article>
          <article class="relative group rounded-2xl md:rounded-3xl overflow-hidden">
            <img src="~/assets/images/quests/website-2.png" alt="website-2 app mockup" class="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105">
            <div class="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-[#082B4B4D] backdrop-blur-sm p-4 md:p-8 flex flex-col gap-y-1.5 md:gap-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div class="-ml-1 md:-ml-2 flex flex-wrap gap-1.5 items-center">
                <h2 class="m-0 text-2xl md:text-4xl text-white">WEBSITE</h2>
              </div>
              <button @click="openVideoModal('https://player.vimeo.com/video/1126638575?h=82360be1fc')" class="mt-auto py-1.5 md:py-2 pl-3 md:pl-4 pr-3 md:pr-3.5 rounded-2xl md:rounded-3xl w-max flex gap-x-1 md:gap-x-[5px] items-center bg-white hover:brightness-95 hover:scale-105 transition-all duration-200 ease-out">
                <p class="text-base md:text-lg font-normal text-[#848484] tracking-tight">Preview</p>
                <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.998 8.05C16.998 7.78478 16.8926 7.53043 16.7051 7.34289C16.5176 7.15536 16.2632 7.05 15.998 7.05L7.99799 7C7.73277 7 7.47842 7.10536 7.29088 7.29289C7.10334 7.48043 6.99799 7.73478 6.99799 8C6.99799 8.26522 7.10334 8.51957 7.29088 8.70711C7.47842 8.89464 7.73277 9 7.99799 9H13.558L5.28799 17.29C5.19426 17.383 5.11986 17.4936 5.06909 17.6154C5.01833 17.7373 4.99219 17.868 4.99219 18C4.99219 18.132 5.01833 18.2627 5.06909 18.3846C5.11986 18.5064 5.19426 18.617 5.28799 18.71C5.38095 18.8037 5.49155 18.8781 5.61341 18.9289C5.73527 18.9797 5.86597 19.0058 5.99799 19.0058C6.13 19.0058 6.2607 18.9797 6.38256 18.9289C6.50442 18.8781 6.61502 18.8037 6.70799 18.71L14.998 10.42V16C14.998 16.2652 15.1033 16.5196 15.2909 16.7071C15.4784 16.8946 15.7328 17 15.998 17C16.2632 17 16.5176 16.8946 16.7051 16.7071C16.8926 16.5196 16.998 16.2652 16.998 16V8.05Z" fill="#AAAAAA"/>
                </svg>
              </button>
            </div>
          </article>
          <article class="relative group rounded-2xl md:rounded-3xl overflow-hidden">
            <img src="~/assets/images/quests/website-3.png" alt="website-3 app mockup" class="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105">
            <div class="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-[#082B4B4D] backdrop-blur-sm p-4 md:p-8 flex flex-col gap-y-1.5 md:gap-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div class="-ml-1 md:-ml-2 flex flex-wrap gap-1.5 items-center">
                <h2 class="m-0 text-2xl md:text-4xl text-white">WEBSITE</h2>
              </div>
              <button @click="openVideoModal('https://player.vimeo.com/video/1126638814?h=f18962106d')" class="mt-auto py-1.5 md:py-2 pl-3 md:pl-4 pr-3 md:pr-3.5 rounded-2xl md:rounded-3xl w-max flex gap-x-1 md:gap-x-[5px] items-center bg-white hover:brightness-95 hover:scale-105 transition-all duration-200 ease-out">
                <p class="text-base md:text-lg font-normal text-[#848484] tracking-tight">Preview</p>
                <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.998 8.05C16.998 7.78478 16.8926 7.53043 16.7051 7.34289C16.5176 7.15536 16.2632 7.05 15.998 7.05L7.99799 7C7.73277 7 7.47842 7.10536 7.29088 7.29289C7.10334 7.48043 6.99799 7.73478 6.99799 8C6.99799 8.26522 7.10334 8.51957 7.29088 8.70711C7.47842 8.89464 7.73277 9 7.99799 9H13.558L5.28799 17.29C5.19426 17.383 5.11986 17.4936 5.06909 17.6154C5.01833 17.7373 4.99219 17.868 4.99219 18C4.99219 18.132 5.01833 18.2627 5.06909 18.3846C5.11986 18.5064 5.19426 18.617 5.28799 18.71C5.38095 18.8037 5.49155 18.8781 5.61341 18.9289C5.73527 18.9797 5.86597 19.0058 5.99799 19.0058C6.13 19.0058 6.2607 18.9797 6.38256 18.9289C6.50442 18.8781 6.61502 18.8037 6.70799 18.71L14.998 10.42V16C14.998 16.2652 15.1033 16.5196 15.2909 16.7071C15.4784 16.8946 15.7328 17 15.998 17C16.2632 17 16.5176 16.8946 16.7051 16.7071C16.8926 16.5196 16.998 16.2652 16.998 16V8.05Z" fill="#AAAAAA"/>
                </svg>
              </button>
            </div>
          </article>
          </div>
        </Transition>
      </main>
    </article>
    <TheFooter />
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="videoModalOpen" @click="closeVideoModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8">
          <div @click.stop class="relative w-full max-w-6xl aspect-video">
            <button @click="closeVideoModal" class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <iframe
              :src="currentVideoUrl"
              class="w-full h-full rounded-lg"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.shrink {
  animation: shrink 3s ease-in-out forwards infinite;
}
@keyframes shrink {
  0% {
    width: 50%;
    height: 5px;
  }
  50% {
    width: 0%;
    height: 2px;
  }
  100% {
    width: 50%;
    height: 5px;
  }
}
.bounce {
  animation: bounce 3s ease-in-out forwards infinite;
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
.scroll {
  animation: scroll 85s linear infinite forwards;
}
@keyframes scroll {
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(-100%)
  }
}
</style>