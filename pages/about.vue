<script setup lang="ts">
useHead({
  title: 'About',
  meta: [
    {
      property: 'og:title',
      content: 'About | Aduragbemi Abiola'
    },
    {
      name: 'twitter:title',
      content: 'About | Aduragbemi Abiola'
    },
    {
      name: 'description',
      content: 'Find out about Aduragbemi Abiola, a product designer with over two years of experience creating user-centric digital experiences via design.'
    },
    {
      property: 'og:description',
      content: 'Find out about Aduragbemi Abiola, a product designer with over two years of experience creating user-centric digital experiences via design.'
    },
    {
      name: 'twitter:description',
      content: 'Find out about Aduragbemi Abiola, a product designer with over two years of experience creating user-centric digital experiences via design.'
    },
    {
      property: 'og:url',
      content: 'https://adura.design/about'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://adura.design/about'
    }
  ]
})

definePageMeta({
  scrollToTop: false
})

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
    headshot: 'timilehin-oladunni.webp',
    position: 'Software Engineer',
    company: 'Periculum',
    testimonial: 'Aduragbemi Abiola is a talented individual with a keen eye for detail and a strong work ethic. They are able to take complex design challenges and translate them into clear and effective solutions. In addition, Aduragbemi Abiola is a great communicator and is always willing to collaborate and take feedback in order to deliver the best possible results. Overall, I have no doubt that Aduragbemi Abiola would be a valuable asset to any design team and I wholeheartedly recommend them for any UI/UX design needs.'
  },
  {
    name: 'Oladipupo Durojaiye',
    headshot: 'oladipupo-durojaiye.webp',
    position: 'Lead Backend Engineer',
    company: 'ErrandPay',
    testimonial: 'Adura\'s work constantly reflects his person. A thoughtful, brilliant mind who goes the extra mile in re-creating the intentions buried in the client\'s mind. One who often completes the requirements with great attention to details, many times before the client enunciates all they want, working together with him on a couple of projects was nought but enjoyable and hyper productive for me. I would 100% recommend him anytime.'
  },
  {
    name: 'Victor Daudu',
    headshot: 'victor-daudu.webp',
    position: 'Flutter Mobile Developer',
    company: 'ErrandPay',
    testimonial: 'Working with Adura was and is a worthy ride. Adura has an eye for the tiniest detail, great combination and blends of colors, creative mind and above all, the right man for your UI/UX Job. Adura possesses a rare skill and passion to always design products from the end users\' point of views which is excellent for the scaling of the products. Adura is the man for the job!'
  },
  {
    name: 'Idorenyin Udoh',
    headshot: 'idorenyin-udoh.webp',
    position: 'Frontend Engineer',
    company: 'Acumen Digital',
    testimonial: 'Adura is a real nifty product designer. Watching him work on Figma should be among those “if it wasn\'t recorded, you wouldn\'t believe it” videos on YouTube. He sincerely cares about his products\' intended users and works his way from there — catering for them to reach their goals in the most efficient ways possible while taking accessibility into consideration. He\'s fun to work with as well. 100% would recommend.',
    devPitch: 'Okay okay, we\'ve admitted that Adura is good at design in general. Now I don\'t think you\'d want to hire him and share the designs with your users. That\'ll be tragic, right? Exactly. You\'d need someone to build your product\'s frontend and that\'s where I come in. Now I\'d love to take advantage of your time and preach on why I\'m a great fit for the job but we\'ve spent so much time here that Adura might nab us and if you haven\'t noticed, we\'re kind of running out of space. Hence, I\'ll just place a link to my LinkedIn somewhere around so this convo can be less one-sided, you know?',
    devImage: '/extra-image.JPG'
  },
  {
    name: 'Edward Eniang',
    headshot: 'edward-eniang.webp',
    position: 'Director of Operations',
    company: 'ErrandMedia',
    testimonial: 'Adura is an excellent communicator, always willing to collaborate with other team members and take feedback constructively. He has a strong work ethic and consistently met deadlines, even under pressure. His ability to balance technical and creative requirements makes him an asset to any team. Overall, I highly recommend Adura for any UI/UX design role. He would be a valuable addition to any team and I\'m confident that he would make significant contributions to your organization.'
  },
  {
    name: 'David Yaya',
    headshot: 'david-yaya.webp',
    position: 'Designer, Devops Engineer',
    testimonial: 'Adura and I have joined hands on several projects. He worked as a UI/UX Designer and also as a UX Researcher. He is a highly skilled designer who\'s very devoted to learning and is also a great team player. Adura is impact-oriented and ensures that every project he works on is spectacular and astounding. I recommend him without any reservation.'
  },
  {
    name: 'Samuel Babatunde',
    headshot: 'samuel-babatunde.webp',
    position: 'Fullstack Developer',
    company: 'BorderPal',
    testimonial: 'I have met a number of diligent people in my life, Adura tops them all. His zeal and dedication to see whatever he\'s doing through is second to none. He is the guy you want to work with. Always open to learning endlessly. He motivates me. And of course, he is an exceptionally skilled designer!'
  },
]
</script>

<template>
  <div>
    <TheHeader />
    <article>
      <BaseH1 text="MEET ADURA" />
      <BaseP>
        <span>Hi, I am Adura, a user experience designer. I have an experience in mobile app and web design, wire-framing and mockup design, user research, interactive prototyping illustration amongst others.</span>
        <br>
        <br>
        <span>Identifying and understanding the human needs is crucial for creating useful and usable products. I relish the moments when my skill and knowledge empowers people, thereby making life easier.</span>
      </BaseP>
      <section class="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 lg:gap-6 xl:gap-10">
        <div class="col-start-1 col-end-3 lg:col-end-2 lg:row-start-1 lg:row-end-3">
          <NuxtImg class="w-full h-full object-cover rounded-lg lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="/adura-working.webp" alt="adura working" />
        </div>
        <div>
          <NuxtImg class="w-full h-full object-cover rounded-lg lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="/adura-headshot.webp" alt="adura's headshot" />
        </div>
        <div>
          <NuxtImg class="w-full h-full object-cover rounded-lg lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="/adura-collaborating.webp" alt="adura collaborating with teammate" />
        </div>
        <div class="col-start-1 col-end-3 lg:col-start-2 lg:col-end-4">
          <NuxtImg class="w-full h-full object-cover rounded-lg lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="/adura-talking.webp" alt="adura communicating with teammate" />
        </div>
      </section>
      <article>
        <BaseH2 text="CERTIFICATIONS" />
        <BaseTable :table-data="certificationsTable" />
      </article>
      <article>
        <BaseH2 text="SKILLS" />
        <div class="flex flex-wrap gap-2 md:gap-3 lg:gap-6">
          <p v-for="(skill, index) in skills" :key="index" class="px-6 py-3 lg:px-12 lg:py-6 border border-solid border-adura-black rounded-[48px] text-sm md:text-base lg:text-xl font-normal">
            {{ skill }}
          </p>
        </div>
      </article>
      <AboutInterests />
      <article>
        <BaseH2 text="AWARDS AND PUBLICATIONS" />
        <BaseTable :table-data="awardsTable" />
      </article>
      <article>
        <BaseH2 text="WORD ON THE STREET" />
        <section class="scroll-group -mx-[8.3vw] xl:-mx-[120px] flex flex-col gap-y-6 lg:gap-y-9">
          <div class="overflow-x-hidden flex items-center">
            <div v-for="(_, index) in 2" :key="index" class="scroll w-fit grid grid-cols-[repeat(7,max-content)] gap-x-7 lg:gap-x-10 px-3.5 lg:px-5">
              <BaseTestimonial v-for="(testimonial, index) in testimonials" :key="index" :="testimonial" />
            </div>
          </div>
          <div class="overflow-x-hidden flex items-center">
            <div v-for="(_, index) in 2" :key="index" class="scroll-reverse w-fit grid grid-cols-[repeat(7,max-content)] gap-x-7 lg:gap-x-10 px-3.5 lg:px-5">
              <BaseTestimonial v-for="(testimonial, index) in [...testimonials].reverse()" :key="index" :="testimonial" />
            </div>
          </div>
        </section>
      </article>
    </article>
    <TheFooter />
  </div>
</template>

<style scoped>
@import url(~/assets/style/infinite-scroll.css);
</style>