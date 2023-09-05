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
    name: 'Oladipupo Durojaiye',
    headshot: '/testimonials/dipo.png',
    position: 'Lead Backend Engineer',
    company: 'ErrandPay',
    testimonial: 'Adura\'s work constantly reflects his person. A thoughtful, brilliant mind who goes the extra mile in re-creating the intentions buried in the client\'s mind. One who often completes the requirements with great attention to details, many times before the client enunciates all they want, working together with him on a couple of projects was nought but enjoyable and hyper productive for me. I would 100% recommend him anytime.'
  },
  {
    name: 'Victor Daudu',
    headshot: '/testimonials/victor-daudu.png',
    position: 'Flutter Mobile Developer',
    company: 'ErrandPay',
    testimonial: 'Working with Adura was and is a worthy ride. Adura has an eye for the tiniest detail, great combination and blends of colors, creative mind and above all, the right man for your UI/UX Job. Adura possesses a rare skill and passion to always design products from the end users\' point of views which is excellent for the scaling of the products. Adura is the man for the job!'
  },
  {
    name: 'Idorenyin Udoh',
    headshot: '/testimonials/idorenyin-udoh.jpeg',
    position: 'Frontend Engineer',
    company: 'Acumen Digital',
    testimonial: 'Adura is a real nifty product designer. Watching him work on Figma should be among those “if it wasn\'t recorded, you wouldn\'t believe it” videos on YouTube. He sincerely cares about his products\' intended users and works his way from there — catering for them to reach their goals in the most efficient ways possible while taking accessibility into consideration. He\'s fun to work with as well. 100% would recommend.'
  },
]
</script>

<template>
  <TextBaseH1 text="MEET ADURA" />
  <TextBaseP>
    Hi, I am Adura, a user experience designer. I have an experience in mobile app and web design, wire-framing and mockup design, user research, interactive prototyping illustration amongst others.
    <br>
    <br>
    Identifying and understanding the human needs is crucial for creating useful and usable products. I relish the moments when my skill and knowledge empowers people, thereby making life easier.
  </TextBaseP>
  <div class="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 lg:gap-6 xl:gap-10">
    <div class="col-start-1 col-end-3 lg:col-end-2 lg:row-start-1 lg:row-end-3">
      <img class="w-full h-full object-cover rounded-[32px] lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="~/assets/images/about/adura-working.png" alt="adura working">
    </div>
    <div>
      <img class="w-full h-full object-cover rounded-[32px] lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="~/assets/images/about/adura-headshot.png" alt="adura's headshot">
    </div>
    <div>
      <img class="w-full h-full object-cover rounded-[32px] lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="~/assets/images/about/adura-collaborating.png" alt="adura collaborating with teammate">
    </div>
    <div class="col-start-1 col-end-3 lg:col-start-2 lg:col-end-4">
      <img class="w-full h-full object-cover rounded-[32px] lg:grayscale lg:hover:grayscale-0 transition-all duration-[400ms] ease-linear" src="~/assets/images/about/adura-talking.png" alt="adura communicating with teammate">
    </div>
  </div>
  <TextBaseH2 text="CERTIFICATIONS" />
  <BaseTable :table-data="certificationsTable" />
  <TextBaseH2 text="SKILLS" />
  <div class="flex flex-wrap gap-2 md:gap-3 lg:gap-6">
    <p v-for="(skill, index) in skills" :key="index" class="px-6 py-3 lg:px-12 lg:py-6 border border-solid border-adura-black rounded-[48px] text-base md:text-lg lg:text-2xl font-normal">
      {{ skill }}
    </p>
  </div>
  <TextBaseH2 text="INTERESTS" />
  <TextBaseP>
    One thing you know about me is that I always have some form of headphones on my person.
    <br>
    <br>
    This is because I absolutely enjoy listening to music and across MULTIPLE genres. From Afrobeats (Burna Boy, Wizkid, Adekunle Gold, etc) to Highlife (Cavemen) and Live praise concerts (Bidemi Olaoba, Femi Praise, Mega 99) to Old School Apala (Haruna Ishola and the likes) to Heartbreak songs (Passenger, Jon Bellion, Lewis Capaldi, etc) to UK Rap (Stormzy, Dave) to “New Cats” HipHop (Fireboy, Rema, Bnxn, Ladipoe, etc) to Nigerian Rap Artistes (MI, Vector).
    <br>
    <br>
    I also enjoy long form audio content like audiobooks (Jordan Person, Simon Sinek, Mark Manson are my OGs), YouTube interviews and podcasts (spoiler I have a podcast with about 30k listens so far). Comedy standups are also a personal favorite (Dave Chapelle, Trevor Noah, Kevin Hart, Matt Rife).
    <br>
    <br>
    I do enjoy seeing movies and I especially love movies of the investigative type, Sherlock and the likes. I also take random courses of YouTube sometimes not even design related.
  </TextBaseP>
  <TextBaseH2 text="AWARDS AND PUBLICATIONS" />
  <BaseTable :table-data="awardsTable" />
  <TextBaseH2 text="WORD ON THE STREET" />
  <div class="-mx-[8.3vw] xl:-mx-[120px] flex flex-col gap-y-6 lg:gap-y-9">
    <div class="grid grid-cols-[repeat(4,1fr)] gap-x-7 lg:gap-x-10 overflow-x-scroll">
      <div v-for="(testimonial, index) in testimonials" :key="index" class="px-6 md:px-10 lg:px-12 xl:px-14 pt-5 md:pt-9 lg:pt-11 xl:pt-12 py-8 md:py-11 lg:py-14 xl:py-16 border border-solid border-[rgba(26,26,26,0.50)] rounded-[32px] w-[360px] sm:w-[480px] md:w-[720px] lg:w-[800px] xl:w-[960px]">
        <div class="flex items-center gap-x-3 lg:gap-x-4">
          <img :src="testimonial.headshot" width="72" alt="" class="w-12 md:w-14 lg:w-20 rounded-full border border-solid border-[#D3D0D0]">
          <div>
            <p class="text-adura-black text-sm md:text-base lg:text-xl font-bold">{{ testimonial.name }}</p>
            <div class="md:mt-0.5 flex gap-x-1.5 md:gap-x-2 items-center">
              <p class="text-adura-black text-xs md:text-sm lg:text-base font-normal">{{ testimonial.position }}</p>
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.21875" cy="2.39453" r="2" fill="#BBBBBB"/>
              </svg>
              <p class="text-adura-black text-xs md:text-sm lg:text-base font-normal">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
        <p class="mt-5 lg:mt-7 xl:mt-8 text-adura-black text-sm md:text-base lg:text-xl font-normal">{{ testimonial.testimonial }}</p>
      </div>
    </div>
    <div class="grid grid-cols-[repeat(4,1fr)] gap-x-10 overflow-x-scroll">
      <div v-for="(testimonial, index) in testimonials.reverse()" :key="index" class="px-6 md:px-10 lg:px-12 xl:px-14 pt-5 md:pt-9 lg:pt-11 xl:pt-12 py-8 md:py-11 lg:py-14 xl:py-16 border border-solid border-[rgba(26,26,26,0.50)] rounded-[32px] w-[360px] sm:w-[480px] md:w-[720px] lg:w-[800px] xl:w-[960px]">
        <div class="flex items-center gap-x-3 lg:gap-x-4">
          <img :src="testimonial.headshot" width="72" alt="" class="w-12 md:w-14 lg:w-20 rounded-full border border-solid border-[#D3D0D0]">
          <div>
            <p class="text-adura-black text-sm md:text-base lg:text-xl font-bold">{{ testimonial.name }}</p>
            <div class="md:mt-0.5 flex gap-x-1.5 md:gap-x-2 items-center">
              <p class="text-adura-black text-xs md:text-sm lg:text-base font-normal">{{ testimonial.position }}</p>
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.21875" cy="2.39453" r="2" fill="#BBBBBB"/>
              </svg>
              <p class="text-adura-black text-xs md:text-sm lg:text-base font-normal">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
        <p class="mt-5 lg:mt-7 xl:mt-8 text-adura-black text-sm md:text-base lg:text-xl font-normal">{{ testimonial.testimonial }}</p>
      </div>
    </div>
  </div>
  <TextBaseH2 text="REACH OUT" />
  <div class="mb-32 grid grid-cols-1 grid-rows-[max-content_1fr] md:grid-cols-[1fr_1.5fr] xl:grid-cols-2 gap-y-10 gap-x-8 xl:gap-x-16 justify-between">
    <p>
      <a href="mailto:abiolaaduragbemiaa@gmail.com"
        class=" text-4xl md:text-5xl xl:text-6xl text-adura-black font-normal underline break-all">abiolaaduragbemiaa@gmail.com</a>
    </p>
    <div class="grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-4 xl:gap-x-6 xl:gap-y-5">
      <BaseOutboundLink title="Instagram" url="https://www.instagram.com/adura.ux/" class="col-start-1 col-end-3 sm:col-start-2 sm:col-end-3" />
      <BaseOutboundLink title="Twitter" url="https://twitter.com/aduragbemi_aa" />
      <BaseOutboundLink title="Medium" url="https://medium.com/@abiolaaduragbemiaa" />
      <p class="text-base md:text-lg lg:text-2xl text-adura-black text-right font-normal self-center">I hear TikTok is <br> really fun these days</p>
      <BaseOutboundLink title="TikTok" url="https://www.tiktok.com/@aduragbemi_aa" class="self-center" />
    </div>
  </div>
</template>