<script setup lang="ts">
const projects = [
  {
    title: 'BetaSMS',
    desc: 'BULK MESSAGING PLATFORM',
    img: 'betasms.png',
    url: '',
    position: 1
  },
  {
    title: 'BorderPal',
    desc: 'FINTECH SOLUTION',
    img: 'borderpal.png',
    url: '',
    position: 2
  },
  {
    title: 'FlexMyWay',
    desc: 'SOCIAL PLATFORM',
    img: 'flex-my-way.png',
    url: '',
    position: 3
  },
  {
    title: 'ErrandPay',
    desc: 'FINTECH SOLUTION',
    img: 'errandpay.png',
    url: '',
    position: 4
  },
  {
    title: 'MechieLocate',
    desc: 'CASE STUDY',
    img: 'mechie-locate.png',
    url: '',
    position: 5
  }
]
</script>

<template>
  <div>
    <h1 class="md:mr-[5vw] xl:mr-[12vw] font-bold text-adura-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
      SOME OF MY RECENT WORKS
    </h1>
    <p class="my-12 lg:mr-[12vw] xl:mr-44 text-adura-black text-base md:text-lg lg:text-2xl font-light">
      Over the past few months, I have busied myself with sharpening my skills and polishing my craft so that when the time came for me to create a portfolio, I would be proud of my work, be confident in its value and believe in its ability to make a remarkable contribution.
      <br>
      <br>
      Here are some projects I've worked on. I hope they inspire you and most importantly, I hope you are impressed by them. Make yourself comfortable and enjoy the show.
    </p>
    <div class="xl:mr-80 my-14 lg:my-24 flex flex-col gap-y-14 lg:gap-y-20 xl:gap-y-24">
      <WorkCard v-for="(project, index) in projects" :key="index" :="project" />
    </div>
  </div>
</template>