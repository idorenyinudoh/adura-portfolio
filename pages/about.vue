<script setup lang="ts">
const tableData = ref({
  headers: [
    'course',
    'institution',
    'year'
  ],
  rows: [
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
})
</script>

<template>
  <h1 class="font-bold text-adura-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
    ABOUT ME
  </h1>
  <p class="my-12 text-adura-black text-base md:text-lg lg:text-2xl font-light">
    Hi, I am Adura, a user experience designer. I have an experience in mobile app and web design, wire-framing and mockup design, user research, interactive prototyping illustration amongst others.
    <br>
    <br>
    Identifying and understanding the human needs is crucial for creating useful and usable products. I relish the moments when my skill and knowledge empowers people, thereby making life easier.
  </p>
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
  <p class="my-12 text-adura-black text-base md:text-lg lg:text-2xl font-light">
    In my spare time I enjoy podcasting, documenting my journey via writing and listening to good music. I occasionally do enjoy a good movie time too. I am a goal getter and a dream chaser, I believe in the “leaving lasting impression, in people and through my designs. 
    <br>
    <br>
    If you believe I am good fit for your team or project, please reach out and let's have a chat. I can't wait to hear from you!
  </p>
  <TextBaseH2 text="CERTIFICATIONS" />
  <BaseTable :table-data="tableData" />
</template>