<script setup lang="ts">
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

const projects: Project[] = [
  {
    isCaseStudy: false,
    image: 'kole',
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
    image: 'sciart-finance',
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
    image: 'studio-creatae',
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
    image: 'errandpay',
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
    image: 'betasms',
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
    image: 'hydrogen',
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
    image: 'bridgefinance',
    tags: ['Fintech'],
    company: '',
    title: 'BridgeFinance',
    tasks: ['Case Study'],
    duration: '6 - 8 Weeks',
    description: [
      'In the 2021 Fintech Times report, with respect to fintech, Nigeria\'s fintech landscape consisted of 210 to 250 fintech companies, key stakeholders (banks, telecom companies and the government), enablers and funding partners (i.e universities and research institutions, investors, incubators, technology and consumers).',
      'Thus, birthing the problem of these institutions (traditional banks, MFBs, mobile banks) wrestling for users, and while this might be a good business or profit-making strategy, it has an adverse effect on users creating problems like confusion on the path of users (as proven in Hick\'s Law) and occasional cognitive overload, to mention a few.'
    ],
    link: 'bridgefinance'
  }
]
</script>

<template>
  <div class="hero -mx-[8.3vw] xl:-mx-[120px] -mt-16 md:-mt-24 h-[80vh] md:h-[calc(100vh-173px)] xl:h-[calc(100vh-225px)] flex justify-center items-center">
    <TextBaseH1 text="RECENT WORKS OF ART" class="text-white text-center mx-[15%]" />
  </div>
  <div class="pt-20 md:pt-28 lg:pt-36 pb-9 md:pb-14 lg:pb-8">
    <div v-for="(project, index) in projects" :key="index" class="py-10 md:py-14 lg:py-20 grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-12 lg:gap-x-20 items-center">
      <div class="hidden md:flex rounded-2xl bg-[#C0DCB6] p-4 w-[195px] lg:w-[247px] flex-col gap-y-4">
        <div class="relative rounded-lg bg-white w-full pt-[80%]">
          <NuxtImg provider="cloudinary" class="bounce absolute bottom-[calc(22%+2px)] left-0 right-0 mx-auto w-2/5" :src="`/project-logos/${project.image}`" :alt="`${project.title} logo`" />
          <div class="shrink absolute bottom-[22%] left-0 right-0 mx-auto bg-[#D9D9D9]/30 w-1/2 h-[5px] rounded-[80%]" />
        </div>
        <div class="flex justify-between items-center px-3 lg:px-4 py-1.5 lg:py-2 bg-white rounded-2xl lg:rounded-[32px]">
          <p class="text-adura-black text-xs md:text-sm lg:text-base font-normal">{{ project.tags.join(', ') }}</p>
          <a :href="project.company" target="_blank">
            <svg class="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="text-sm md:text-base lg:text-xl text-adura-black font-normal">
        <p class="text-xl md:text-2xl lg:text-3xl font-bold mb-3 lg:mb-6">{{ project.title }}</p>
        <p class="mb-1 lg:mb-2">{{ project.tasks.join(', ')}}</p>
        <p class="mb-4">{{ project.duration }}</p>
        <p class="py-4 border-t border-solid border-adura-black/20">
          <span v-for="(desc, index) in project.description" :key="index">
            <br v-if="index !== 0" />
            <br v-if="index !== 0" />
            {{ desc }}
          </span>
        </p>
        <a v-if="project.isCaseStudy" class="text-[#C7BEBE] border-b border-solid border-[#C7BEBE]" :href="project.link">See case study presentation</a>
        <NuxtLink v-else class="text-[#C7BEBE] border-b border-solid border-[#C7BEBE]" :to="`/projects/${project.link}`">See design process</NuxtLink>
      </div>
    </div>
  </div>
  <TheContact />
</template>

<style scoped>
.hero {
  background: linear-gradient(rgb(26 26 26 / 87%) 0%, rgb(26 26 26 / 87%) 100%), url(@/assets/images/projects/betasms.png);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
</style>