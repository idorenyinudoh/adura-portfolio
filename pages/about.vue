<script setup lang="ts">
const certificationsTable = {
  headers: [
    'course',
    'institution',
    'year'
  ],
  rows: [
    {
      course: 'Webflow101',
      institution: 'Webflow University',
      year: '2023'
    },
    {
      course: 'Gamification: How To Create Engaging User Experience',
      institution: 'Interaction Design Foundation (IxDF)',
      year: '2023'
    },
    {
      course: 'How to Create Intuitive Products by Imitating Physicality',
      institution: 'Interaction Design Foundation (IxDF)',
      year: '2022'
    },
    {
      course: 'Mobile User Experience (UX) Design',
      institution: 'Interaction Design Foundation (IxDF)',
      year: '2022'
    },
    {
      course: 'UI Patterns For Successful Software',
      institution: 'Interaction Design Foundation (IxDF)',
      year: '2022'
    },
    {
      course: 'Design Thinking: The Ultimate Guide',
      institution: 'Interaction Design Foundation (IxDF)',
      year: '2022'
    },
    {
      course: 'Human-Computer Interaction: The Foundation of UX Design',
      institution: 'Interaction Design Foundation (IxDF)',
      year: '2022'
    },
    {
      course: 'User Experience: The Beginners Guide',
      institution: 'Interaction Design Foundation (IxDF)',
      year: '2022'
    },
    {
      course: 'Soft Skills Training',
      institution: 'Jobberman Nigeria',
      year: '2022'
    },
    {
      course: 'Introduction to User Experience Design',
      institution: 'Georgia Institute of Technology',
      year: '2022'
    },
    {
      course: 'User Experience and User Interface Design',
      institution: 'Creative Ferry Academy',
      year: '2021 - 2022'
    },
    {
      course: 'Introduction to Google Search Engine Optimization',
      institution: 'University of California, Davies',
      year: '2020 - 2021'
    },
    {
      course: 'B.Sc Statistics',
      institution: 'Federal University of Agriculture, Abeokuta',
      year: '2016 - 2021'
    }
  ]
}

const interests = [
  {
    title: 'Books',
    description: 'Here\'s a catalogue of some my all time favorites. Audiobooks, ebooks, or paperbacks in that order is my preferred form of reading and frankly, I mostly enjoy mind-benders (philosophy, psychology), self-help books as well as design books and occasionally fiction.',
    color: '#CDC7E5',
    data: [
      {
        title: 'The Non-Designer\'s Design Book',
        url: 'non-designers-design-book',
        caption: 'My very first design book. Great read!'
      },
      {
        title: 'Don\'t Make Me Think',
        url: 'dont-make-me-think',
        caption: 'Brilliant guide for usability'
      },
      {
        title: 'Hooked',
        url: 'hooked',
        caption: 'Think Atomic Habits but for products building'
      },
      {
        title: 'The Subtle Art of Not Giving a Fuck',
        url: 'the-subtle-art-of-not-giving-a-fuck',
        caption: 'An All Time Favorite'
      },
      {
        title: '12 Rules for Life',
        url: '12-rules-for-life',
        caption: 'Life changing read, trust me!'
      },
      {
        title: 'Beyond Order',
        url: 'beyond-order',
        caption: 'You know there\'s gotta be a sequel'
      },
      {
        title: 'The Power of Positive Thinking',
        url: 'the-power-of-positive-thinking',
        caption: 'Deeply insightful read'
      },
      {
        title: 'Steal Like an Artist',
        url: 'steal-like-an-artist',
        caption: 'Love LOVE his use of drawings and huge fonts'
      },
      {
        title: 'START WITH WHY',
        url: 'start-with-why',
        caption: 'It\'s so good, I\'ll definitely have another read'
      }
    ]
  },
  {
    title: 'Music',
    description: 'One thing you know about me is that I always have some form of headphones on my person. This is because I absolutely enjoy listening to music and across multiple genres. From Afrobeats to Highlife and Live praise concerts. From Old School Apala to Heartbreak and Love songs. From Rap and UK Drill to Gospel. If the music bangs, that\'s where I\'m at.',
    color: '#FFBC97',
    data: [
      {
        title: 'Burna Boy',
        url: 'burna-boy',
        caption: '"Odogwu no be nickname"'
      },
      {
        title: 'Passenger',
        url: 'passenger',
        caption: 'You should give his project All The Little Lights a listen.'
      },
      {
        title: 'The Cavemen',
        url: 'the-cavemen',
        caption: 'The Cavemen'
      },
      {
        title: 'King Sunny Ade',
        url: 'king-sunny-ade',
        caption: 'King Sunny Ade'
      },
      {
        title: 'Baba Ara',
        url: 'baba-ara',
        caption: 'My mum is literally singing his songs as I work on this this right now.'
      },
      {
        title: 'NF',
        url: 'nf',
        caption: 'NF\'s storytelling and use of orchestra is too peak!'
      },
      {
        title: 'Santan Dave',
        url: 'santan-dave',
        caption: 'Santan Dave. First time I saw the name, my brain saw satan. Lol.'
      },
      {
        title: 'Jon Bellion',
        url: 'jon-bellion',
        caption: 'Jon Bellion\'s acoustic rendition of Human is just so heavenly!'
      },
      {
        title: 'Adele',
        url: 'adele',
        caption: 'I mean, it\'s Adele'
      }
    ]
  },
  {
    title: 'Podcasts and Standups',
    description: 'I also enjoy listening to long-form audio content while I work. Podcasts, Standup specials and YouTube interviews. I also have a podcast with over thirty thousand global listens which airs bi-weekly across podcast streaming platforms and occasionally YouTube.',
    color: '#C0E3A4',
    data: []
  },
  {
    title: 'More Designs',
    description: 'On days when I\'m not designing user interfaces or mapping out user experience, I often dabble poster and flyer design exploration as well as illustrations for fun.',
    color: '#BFD7EA',
    data: []
  },
  {
    title: 'Movies and Series',
    description: 'A few genres I genuinely enjoy are sci-fi, action comedy, comedy, sitcoms, coming of age and my personal favorite, crime (something with a big reveal). I occasionally binge old animations cos I\'m not quite sure what they make these days.',
    color: '#FFE193',
    data: []
  }
]

const visibleInterestIndex = ref(0)
// const timer = ref(null)

const updateVisibleInterests = () => {
  setInterval(() => {
    if (visibleInterestIndex.value === interests.length - 1) {
      visibleInterestIndex.value = 0
    } else {
      visibleInterestIndex.value++
    }
  }, 5000)
}

onMounted(() => {
  // updateVisibleInterests()
})

const skills = [
  'No Code Development',
  'Critical Thinking',
  'User Research',
  'Design Systems',
  'Usability Testing',
  'Strategy and Design',
  'Mobile App and Web Design',
  'Problem Solving',
  'Wireframing',
  'Design Thinking',
  'User Experience Design',
  'High Fidelity Mockups',
  'User Interface Design',
  'Interactive Prototyping',
  'Accessibility',
  'A/B Testing'
]
const awardsTable = {
  headers: [
    'platform',
    'award-or-article',
    'year'
  ],
  rows: [
    {
      platform: 'UX Collective, Medium',
      'award-or-article': 'Stories Are The Language Of The World',
      year: '2022'
    },
    {
      platform: 'UX Collective, Medium',
      'award-or-article': 'I Found The Solution To Imposter Syndrome',
      year: '2022'
    },
    {
      platform: 'Junior Chambers International, FUNAAB',
      'award-or-article': 'Most Promising Member',
      year: '2018'
    }
  ]
}
const testimonials = [
{
    name: 'Timilehin Oladunni',
    headshot: 'timilehin-oladunni',
    position: 'Software Engineer',
    company: 'Periculum',
    testimonial: 'Aduragbemi Abiola is a talented individual with a keen eye for detail and a strong work ethic. They are able to take complex design challenges and translate them into clear and effective solutions. In addition, Aduragbemi Abiola is a great communicator and is always willing to collaborate and take feedback in order to deliver the best possible results. Overall, I have no doubt that Aduragbemi Abiola would be a valuable asset to any design team and I wholeheartedly recommend them for any UI/UX design needs.'
  },
  {
    name: 'Oladipupo Durojaiye',
    headshot: 'oladipupo-durojaiye',
    position: 'Lead Backend Engineer',
    company: 'ErrandPay',
    testimonial: 'Adura\'s work constantly reflects his person. A thoughtful, brilliant mind who goes the extra mile in re-creating the intentions buried in the client\'s mind. One who often completes the requirements with great attention to details, many times before the client enunciates all they want, working together with him on a couple of projects was nought but enjoyable and hyper productive for me. I would 100% recommend him anytime.'
  },
  {
    name: 'Victor Daudu',
    headshot: 'victor-daudu',
    position: 'Flutter Mobile Developer',
    company: 'ErrandPay',
    testimonial: 'Working with Adura was and is a worthy ride. Adura has an eye for the tiniest detail, great combination and blends of colors, creative mind and above all, the right man for your UI/UX Job. Adura possesses a rare skill and passion to always design products from the end users\' point of views which is excellent for the scaling of the products. Adura is the man for the job!'
  },
  {
    name: 'Idorenyin Udoh',
    headshot: 'idorenyin-udoh',
    position: 'Frontend Engineer',
    company: 'Acumen Digital',
    testimonial: 'Adura is a real nifty product designer. Watching him work on Figma should be among those “if it wasn\'t recorded, you wouldn\'t believe it” videos on YouTube. He sincerely cares about his products\' intended users and works his way from there — catering for them to reach their goals in the most efficient ways possible while taking accessibility into consideration. He\'s fun to work with as well. 100% would recommend.',
    devPitch: 'Okay okay, we\'ve admitted that Adura is good at design in general. Now I don\'t think you\'d want to hire him and share the designs with your users. That\'ll be tragic, right? Exactly. You\'d need someone to build your product\'s frontend and that\'s where I come in. Now I\'d love to take advantage of your time and preach on why I\'m a great fit for the job but we\'ve spent so much time here that Adura might nab us and if you haven\'t noticed, we\'re kind of running out of space. Hence, I\'ll just place a link to my LinkedIn somewhere around so this convo can be less one-sided, you know?',
    devImage: '/extra-image.JPG'
  },
  {
    name: 'Edward Eniang',
    headshot: 'edward-eniang',
    position: 'Director of Operations',
    company: 'ErrandMedia',
    testimonial: 'Adura is an excellent communicator, always willing to collaborate with other team members and take feedback constructively. He has a strong work ethic and consistently met deadlines, even under pressure. His ability to balance technical and creative requirements makes him an asset to any team. Overall, I highly recommend Adura for any UI/UX design role. He would be a valuable addition to any team and I\'m confident that he would make significant contributions to your organization.'
  },
  {
    name: 'David Yaya',
    headshot: 'david-yaya',
    position: 'Designer, Devops Engineer',
    testimonial: 'Adura and I have joined hands on several projects. He worked as a UI/UX Designer and also as a UX Researcher. He is a highly skilled designer who\'s very devoted to learning and is also a great team player. Adura is impact-oriented and ensures that every project he works on is spectacular and astounding. I recommend him without any reservation.'
  },
  {
    name: 'Samuel Babatunde',
    headshot: 'samuel-babatunde',
    position: 'Fullstack Developer',
    company: 'BorderPal',
    testimonial: 'I have met a number of diligent people in my life, Adura tops them all. His zeal and dedication to see whatever he\'s doing through is second to none. He is the guy you want to work with. Always open to learning endlessly. He motivates me. And of course, he is an exceptionally skilled designer!'
  },
]
</script>

<template>
  <BaseH1 text="MEET ADURA" />
  <BaseP>
    Hi, I am Adura, a user experience designer. I have an experience in mobile app and web design, wire-framing and mockup design, user research, interactive prototyping illustration amongst others.
    <br>
    <br>
    Identifying and understanding the human needs is crucial for creating useful and usable products. I relish the moments when my skill and knowledge empowers people, thereby making life easier.
  </BaseP>
  <div class="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 lg:gap-6 xl:gap-10">
    <div class="col-start-1 col-end-3 lg:col-end-2 lg:row-start-1 lg:row-end-3">
      <NuxtImg provider="cloudinary" class="w-full h-full object-cover rounded-lg lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="/adura-working" alt="adura working" />
    </div>
    <div>
      <NuxtImg provider="cloudinary" class="w-full h-full object-cover rounded-lg lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="/adura-headshot" alt="adura's headshot" />
    </div>
    <div>
      <NuxtImg provider="cloudinary" class="w-full h-full object-cover rounded-lg lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="/adura-collaborating" alt="adura collaborating with teammate" />
    </div>
    <div class="col-start-1 col-end-3 lg:col-start-2 lg:col-end-4">
      <NuxtImg provider="cloudinary" class="w-full h-full object-cover rounded-lg lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="/adura-talking" alt="adura communicating with teammate" />
    </div>
  </div>
  <BaseH2 text="CERTIFICATIONS" />
  <BaseTable :table-data="certificationsTable" />
  <BaseH2 text="SKILLS" />
  <div class="flex flex-wrap gap-2 md:gap-3 lg:gap-6">
    <p v-for="(skill, index) in skills" :key="index" class="px-6 py-3 lg:px-12 lg:py-6 border border-solid border-adura-black rounded-[48px] text-sm md:text-base lg:text-xl font-normal">
      {{ skill }}
    </p>
  </div>
  <div class="max-sm:relative">
    <BaseH2 text="INTERESTS" />
    <div class="max-sm:sticky max-sm:top-0 z-[51] bg-adura-black flex md:hidden flex-wrap items-center justify-center gap-3 -mx-[8.3vw] mb-10 px-1 py-6 text-white/90 text-sm">
      <button class="px-4 py-2 border-2 border-white/90 rounded-[72px]">Books</button>
      <button class="px-4 py-2 border-2 border-white/90 rounded-[72px]">Music</button>
      <button class="px-4 py-2 border-2 border-white/90 rounded-[72px]">Podcasts and Standups</button>
      <button class="px-4 py-2 border-2 border-white/90 rounded-[72px]">More Designs</button>
      <button class="px-4 py-2 border-2 border-white/90 rounded-[72px]">Movies and Series</button>
    </div>
    <BaseP class="md:hidden">Here's a catalogue of some my all time favorites. Audiobooks, ebooks, or paperbacks in that order is my preferred form of reading and frankly, I mostly enjoy mind-benders (philosophy, psychology), self-help books as well as design books and occasionally fiction.</BaseP>
    <div class="grid grid-rows-[max-content,max-content] md:grid-cols-[1fr,1fr] lg:grid-cols-[1.2fr,1fr] xl:grid-cols-[1.3fr,1fr] 2xl:grid-cols-[560px,1fr] gap-x-8 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-28 items-center">
      <div class="relative z-0 p-[10%] lg:p-[11.5%] xl:p-[12%] rounded-2xl grid grid-cols-3 grid-rows-3 gap-4 lg:gap-6 xl:gap-7 max-md:max-w-md max-md:mx-auto" :style="{ backgroundColor: interests[visibleInterestIndex].color }">
        <div v-for="(image, index) in interests[visibleInterestIndex].data" :key="index" class="relative cursor-pointer hover:after:opacity-100 after:opacity-0 after:transition-opacity after:duration-200 after:ease-linear after:absolute after:w-full after:h-full after:inset-0 after:p-[10%] after:bg-black/70 after:rounded-lg after:content-[attr(data-content)] after:flex after:items-center after:justify-center after:text-center after:text-white after:text-sm xl:after:text-base after:leading-4 xl:after:leading-5" :data-content="image.caption">
          <NuxtImg class="rounded-lg cursor-pointer" :src="`/interests/${interests[visibleInterestIndex].title.toLowerCase().split(' ').join('-')}/${image.url}`" :alt="`cover of ${image.title}`" />
        </div>
        <svg class="absolute -z-[1] bottom-0 right-0" xmlns="http://www.w3.org/2000/svg" width="78" height="49" viewBox="0 0 78 49" fill="none">
          <path d="M97.8141 35.4642C97.8141 35.1443 97.6542 34.9044 97.3343 34.6644C96.6945 34.2646 96.1347 33.8647 95.4949 33.3849C95.095 33.065 94.2953 32.7451 93.8954 32.2652C93.8954 31.7854 93.6555 31.3855 93.1757 31.2256C93.1757 31.3056 93.1757 31.3056 93.1757 31.3855C93.1757 31.2256 93.1757 31.1456 93.1757 30.9857C93.0957 30.7458 93.0957 30.5058 92.9358 30.3459C92.7758 30.106 92.136 29.7061 91.8961 29.3862C91.9761 29.0663 91.8961 28.7464 91.7362 28.5065C91.7362 28.2666 91.7362 28.0267 91.6562 27.8667C90.5366 25.7075 87.4176 23.7081 85.5783 22.0287C83.1791 19.7895 80.6999 17.4703 78.3007 15.231C73.3424 10.5126 68.4641 5.71423 63.7456 0.835886C63.5857 0.116129 62.706 -0.363713 62.1462 0.356043C59.747 3.31504 53.749 2.19543 50.7101 1.71559C48.2309 1.31573 45.7517 0.595962 43.2726 1.15577C40.2336 1.79556 37.9944 3.79489 36.7148 6.51397C34.6355 4.11478 31.4366 4.43465 28.4776 5.39433C21.8398 7.63357 15.362 10.1128 8.80423 12.5119C8.24442 12.352 7.4447 12.6719 7.4447 13.3916C7.36473 14.1114 7.28476 14.9911 7.04484 15.7109C6.64497 16.6705 6.08517 16.9104 5.12549 17.2303C3.68598 17.7102 2.24645 18.11 0.806934 18.5099C0.0871776 18.6699 0.00721444 19.3096 0.16716 19.8694C0.00721444 20.1094 -0.0727634 20.5092 0.0871825 20.9091C8.3244 36.2639 17.4413 51.1389 27.4379 65.454C27.6779 65.8539 28.0777 65.9339 28.4776 65.8539C28.6375 65.9339 28.8775 65.9339 29.1174 65.8539C38.4742 62.0152 47.5911 57.6966 56.4681 52.9782C60.6267 54.5777 65.1852 52.9782 67.3444 49.1395C72.7826 46.9803 78.2207 44.821 83.6589 42.6617C88.2174 40.8223 93.1757 39.3829 97.4942 36.9037C97.9741 36.4239 98.054 35.864 97.8141 35.4642ZM53.9889 4.0348C56.3082 4.19475 59.5071 4.19473 61.8263 2.99514C61.9063 2.99514 61.9862 2.91519 62.1462 2.91519C62.1462 2.99516 62.2262 3.07512 62.3061 3.07512C71.0232 11.7922 80.0601 20.1893 89.417 28.1866C88.9371 28.6665 88.3773 29.0663 87.6576 29.3862C87.5776 29.3862 87.5776 29.4662 87.4976 29.5462C84.3787 31.1456 81.1797 32.3452 77.7409 32.985C74.382 33.6248 70.8632 33.4648 67.5844 34.5845C64.1455 35.784 61.4264 38.2632 61.1065 41.862C61.0266 40.9823 60.6267 40.4225 60.0669 40.0226C52.9493 29.6261 45.5118 19.3896 37.8344 9.39298C37.9144 9.313 37.9944 9.23304 37.9944 9.15307C39.8337 3.87485 43.7524 2.91518 48.1509 3.1551C50.0703 3.47499 52.0696 3.87486 53.9889 4.0348ZM66.8646 46.7403C66.6247 46.7403 66.3848 46.8203 66.1448 46.9803C65.9849 47.0602 65.745 47.1402 65.585 47.2202C65.4251 47.1402 65.2651 47.2202 65.1852 47.3002C65.2651 47.1402 65.3451 46.9003 65.1052 46.7403C64.7853 46.4205 64.4654 46.0206 64.1455 45.7007C64.0655 45.6207 64.0655 45.6207 63.9856 45.6207C64.0655 45.6207 64.1455 45.6207 64.2255 45.5408C73.4224 41.2222 82.9392 37.7834 92.7758 35.3842C83.6589 38.903 74.462 42.4218 65.3451 45.8606C64.7853 46.1006 65.0252 47.0602 65.585 46.8203C75.4217 43.1416 85.2584 39.3828 95.0151 35.6241C95.095 35.7041 95.175 35.784 95.255 35.784C94.1354 36.3439 93.0157 36.9037 91.8162 37.3835C83.499 40.4225 75.1818 43.5414 66.8646 46.7403ZM61.1065 50.659C59.827 50.9789 58.7074 50.9789 57.5078 50.739C57.5078 50.659 57.5078 50.579 57.4278 50.579C57.3478 50.4991 57.3478 50.4191 57.2678 50.3391C57.5078 50.0192 57.1879 49.5394 56.708 49.6194C56.4681 49.2995 56.3082 49.0596 56.0682 48.7397L55.9883 48.6597C55.9883 48.5797 55.9883 48.5797 55.9083 48.4998C57.5877 46.9003 59.3471 45.3008 61.0266 43.7014C61.6664 44.3412 62.3061 44.9809 62.9459 45.6207C63.1059 45.7807 63.2658 45.7807 63.3458 45.7007C63.2658 45.8607 63.1858 46.1006 63.4258 46.3405C63.7457 46.6604 64.0655 47.0602 64.3854 47.3801C64.5454 47.5401 64.7853 47.5401 64.9452 47.4601C64.9452 47.4601 64.9452 47.5401 64.9452 47.6201C64.8653 47.78 64.8653 47.94 64.8653 48.0999C64.6253 49.6194 62.4661 50.3391 61.1065 50.659ZM12.8029 27.147C13.1228 27.7068 14.0025 27.2269 13.6826 26.6671C12.0031 23.7081 10.2438 20.6692 8.56432 17.7102L8.6443 17.6302C8.96419 17.1504 9.04415 16.4306 9.28407 15.8708C15.9218 27.7868 23.3593 39.3029 31.5965 50.1792C31.5165 50.2591 31.5166 50.3391 31.5166 50.4991C30.8768 51.3788 31.4366 52.5784 30.3969 53.2182C30.077 53.3781 30.077 53.9379 30.3969 54.0979C31.1167 54.4178 30.4769 54.7376 30.237 55.2175C29.9171 55.8573 29.9171 56.9769 29.8371 57.7766C21.0401 45.8606 13.1228 33.4648 6.08515 20.4293C6.08515 20.2693 6.16513 20.0294 6.16513 19.8694C6.40505 19.1497 6.80491 18.9897 7.36473 18.6698C7.52467 18.5899 7.68462 18.5099 7.84457 18.35C9.44403 21.309 11.1234 24.188 12.8029 27.147ZM31.0367 56.0972C31.1167 55.7773 31.3566 55.6173 31.5166 55.3774C39.6738 54.5777 45.9117 48.6597 53.749 46.8203C54.3888 46.6604 54.1489 45.7007 53.5091 45.8606C45.9117 47.62 39.7538 53.2981 31.9964 54.2578C31.9164 54.0179 31.7565 53.778 31.5166 53.538C31.6765 53.3781 31.8364 53.2181 31.9964 52.9782C34.5555 53.1382 37.0347 51.6187 39.3539 50.579C43.1126 48.8196 46.7914 46.9003 50.3902 44.821C50.95 44.5011 50.4701 43.6214 49.9103 43.9413C47.2712 45.4608 44.5521 46.9803 41.8331 48.3398C39.114 49.6993 35.2753 52.2585 32.1563 52.0186C32.1563 51.5387 32.1563 51.0589 32.5562 50.819L32.6362 50.739C36.6348 49.8593 39.9937 47.9399 43.3526 45.7807C45.112 44.661 46.7914 43.5414 48.6308 42.5817C49.8304 41.942 56.5481 38.983 59.0273 40.5025C59.0273 40.5025 59.0273 40.5024 59.0273 40.5824C59.1072 40.6624 59.1872 40.7424 59.3471 40.8224C59.827 41.2222 60.0669 41.862 59.9869 42.8217C59.9869 42.9816 59.9869 43.0616 60.0669 43.1416C59.667 43.5414 59.2672 43.8613 58.8673 44.2612C58.8673 44.1012 58.8673 44.0213 58.7074 43.8613C57.6677 42.8217 56.2282 42.3418 54.7887 42.5817C54.1489 42.6617 54.3888 43.6214 55.0286 43.5414C56.1482 43.3815 57.1879 43.7813 57.9876 44.5811C58.0676 44.661 58.2275 44.741 58.3075 44.741C57.1079 45.8606 55.8283 47.0602 54.6287 48.1799C54.5488 48.2598 54.4688 48.4198 54.4688 48.4998C46.4715 51.5387 38.4742 54.7376 30.6369 58.1765C30.7968 57.5367 30.7968 56.737 31.0367 56.0972ZM88.1374 30.3459C88.2174 30.3459 88.2973 30.2659 88.2973 30.1859C88.6972 30.026 89.0171 29.7861 89.337 29.5462C89.0971 29.946 89.0171 30.4259 89.337 30.9057C89.5769 31.1456 89.8168 31.2256 90.1367 31.3855C90.8565 31.7054 90.3766 31.3855 90.3766 31.7854C90.2967 31.6255 90.1367 31.5455 89.8968 31.6255C87.5776 32.5851 85.1784 33.3849 82.6992 33.9447C82.0594 34.1046 82.2994 35.0643 82.9392 34.9044C85.4183 34.3446 87.8175 33.5448 90.1367 32.5851C90.2967 32.5052 90.3766 32.4252 90.4566 32.2652C90.5366 32.5052 90.6965 32.6651 90.9364 32.7451C91.0964 32.8251 91.3363 32.8251 91.4963 32.905C91.8961 33.065 91.6562 32.7451 91.8162 33.3049C91.8961 33.5448 91.8162 33.7048 91.9761 33.9447C92.0561 34.0247 92.296 34.1846 92.5359 34.3445C89.417 35.1443 86.378 35.944 83.339 36.9037C83.419 36.5838 83.1791 36.1039 82.7792 36.2639C78.8605 37.3835 74.7019 37.3835 70.8632 38.823C67.9042 39.8627 65.3451 41.5421 62.9459 43.6214C62.786 43.7014 62.786 43.8613 62.786 44.0213C62.706 43.9413 62.626 43.8613 62.5461 43.7813C62.626 43.7014 62.626 43.6214 62.706 43.5414C63.5057 40.9823 66.1448 40.1026 68.4641 39.3828C69.1038 39.2229 68.784 38.2632 68.2241 38.4232C65.825 39.2229 63.2658 40.1826 62.0662 42.5018C62.4661 35.1443 71.3431 35.2243 76.6213 34.4245C80.6199 33.6248 84.4586 32.2652 88.1374 30.3459ZM93.9754 34.7444C93.7355 34.8244 93.4956 34.9043 93.2557 34.9843C93.3356 34.9043 93.3356 34.8244 93.4156 34.7444C93.4956 34.6644 93.5756 34.5845 93.5756 34.4245C93.5756 34.4245 93.6555 34.4245 93.6555 34.5045C93.8155 34.5845 93.8954 34.6644 93.9754 34.7444ZM63.7456 44.5011C63.6657 44.5811 63.5857 44.5811 63.5857 44.661C63.4258 44.5811 63.3458 44.4211 63.1858 44.3412C63.3458 44.3412 63.4258 44.3412 63.5857 44.1812C66.4647 41.702 69.8236 39.8627 73.5023 38.983C75.8216 38.4232 78.1408 38.1832 80.54 37.7834C74.7819 39.7027 69.1838 41.942 63.7456 44.5011ZM35.4352 7.95347C35.4352 8.03345 35.4352 8.19339 35.5152 8.27336C43.4325 18.4299 50.95 28.8264 58.2275 39.3828C56.2282 38.983 53.5091 39.5428 51.9896 40.0226C44.952 42.3418 39.8337 48.0999 32.5562 49.7793C24.159 38.5831 16.5616 26.9071 9.76391 14.6712C13.6826 13.1517 17.5213 11.6322 21.44 10.1128C24.159 8.99313 30.3969 5.71424 33.9957 6.83386C34.5555 7.07378 35.0354 7.39366 35.4352 7.95347ZM5.12549 19.7895C4.88557 19.8694 4.72561 20.1893 4.88556 20.5092C12.0831 33.8647 20.2404 46.6604 29.2773 58.8962H29.1973C28.6375 59.1362 29.1174 60.0158 29.6772 59.7759C38.0743 56.0972 46.6314 52.6583 55.2685 49.3794C55.4285 49.5394 55.5884 49.7793 55.6684 49.9393C46.8714 53.618 38.1543 57.3767 29.3573 61.0555C20.0005 48.3398 11.6033 34.9044 4.24579 20.9091C3.92589 20.3493 3.04619 20.8291 3.36608 21.3889C10.8036 35.3842 19.1207 48.7397 28.4776 61.5353C28.3976 61.8552 28.7975 62.3351 29.1973 62.0952C36.3149 59.0562 43.4325 56.0972 50.5501 53.0582C43.2726 56.1772 36.075 59.4561 28.9574 62.8149C28.8774 62.8149 28.7975 62.7349 28.6375 62.8149C28.4776 62.8149 28.3976 62.8149 28.2377 62.8149C19.2007 48.8197 10.2437 34.8244 2.40639 20.1094C3.20612 19.8694 4.00585 19.5496 4.80558 19.3096C4.88555 19.3096 4.96554 19.2297 5.04551 19.2297C5.12549 19.4696 5.12549 19.6295 5.12549 19.7895Z" fill="black"/>
        </svg>
      </div>
      <div class="hidden md:flex flex-col gap-y-1.5 lg:gap-y-3 xl:gap-y-6">
        <div v-for="(interest, index) in interests" :key="index" class="grid grid-cols-[8px,1fr] gap-x-3 lg:gap-x-7 xl:gap-x-10">
          <div class="relative w-1.5 xl:w-2 h-full rounded-3xl bg-[#D9D9D966]">
            <div v-if="index === visibleInterestIndex" class="grow absolute w-full h-0 rounded-3xl" :style="{ backgroundColor: interest.color }"></div>
          </div>
          <div :class="['text-adura-black', { 'py-1 lg:py-2 xl:py-4': index === visibleInterestIndex }]">
            <p class="text-lg lg:text-2xl xl:text-3xl font-bold">{{ interest.title }}</p>
            <p v-if="index === visibleInterestIndex" class="mt-2 lg:mt-4 xl:mt-6 text-base lg:text-xl xl:text-2xl font-normal">{{ interest.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BaseH2 text="AWARDS AND PUBLICATIONS" />
  <BaseTable :table-data="awardsTable" />
  <BaseH2 text="WORD ON THE STREET" />
  <div class="scroll-group -mx-[8.3vw] xl:-mx-[120px] flex flex-col gap-y-6 lg:gap-y-9">
    <div class="overflow-x-hidden flex items-center">
      <div v-for="(, index) in 2" :key="index" class="scroll w-fit grid grid-cols-[repeat(7,max-content)] gap-x-7 lg:gap-x-10 px-3.5 lg:px-5">
        <BaseTestimonial v-for="(testimonial, index) in testimonials" :key="index" :="testimonial" />
      </div>
    </div>
    <div class="overflow-x-hidden flex items-center">
      <div v-for="(, index) in 2" :key="index" class="scroll-reverse w-fit grid grid-cols-[repeat(7,max-content)] gap-x-7 lg:gap-x-10 px-3.5 lg:px-5">
        <BaseTestimonial v-for="(testimonial, index) in [...testimonials].reverse()" :key="index" :="testimonial" />
      </div>
    </div>
  </div>
  <TheContact />
</template>

<style scoped>
@import url(~/assets/style/infinite-scroll.css);

.grow {
  animation: grow 5s linear forwards;
}
@keyframes grow {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
</style>