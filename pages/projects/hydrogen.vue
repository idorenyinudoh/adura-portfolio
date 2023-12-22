<script setup lang="ts">
useHead({
  title: 'Hydrogen | Aduragbemi Abiola',
  meta: [
    {
      property: 'og:title',
      content: 'Hydrogen | Aduragbemi Abiola'
    },
    {
      name: 'twitter:title',
      content: 'Hydrogen | Aduragbemi Abiola'
    },
    {
      name: 'description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Hydrogen.'
    },
    {
      property: 'og:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Hydrogen.'
    },
    {
      name: 'twitter:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Hydrogen.'
    },
    {
      property: 'og:url',
      content: 'https://adura.design/projects/hydrogen'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://adura.design/projects/hydrogen'
    }
  ]
})

definePageMeta({
  scrollToTop: false
})

const props = {
  projectName: 'Hydrogen',
  projectDescription: 'HydrogenPay aims at simplifying payments for African businesses and business owners. Business owners are able to collect payments, monitor transactions, confirm payments instantly, and grow their businesses with seamless payment solutions.',
  heroImage: 'hydrogen-hero',
  projectObjectives: [
    {
      description: 'Design an administrator back-office with the existing design system while adding a number of datapoints to the interface to include a few new features as well as roles.'
    },
    {
      description: 'Collaborate with a senior designer to achieve a fully-interactive administrator prototype.'
    },
  ],
  projectScreenshots: [
    'hydrogen-screenshot-1',
    'hydrogen-screenshot-2',
  ],
  designProcess: [
    {
      title: 'Goals and task alignment for the interface',
      description: 'This happened everyday for the duration of this project. While I didn\'t directly deal with the stakeholders, my superior did and adequately communicated the problems we aimed to solve.'
    },
    {
      title: 'Ideation and low fidelity iterations',
      description: 'This process involved me drawing less wireframes than I would\'ve opted for. This is because I had to work using the existing design system and so, it involved me moving around existing elements and properly optimising them for our users.'
    },
  ],
  challenges: [
    {
      description: 'As this was the first time I was working with a design system, I had to learn and watch tutorials as to how best I can work within the system without making significant changes to the system (unless the need arises).'
    },
    {
      description: 'I\'d been used to working within groups and while working with an existing design system, using frames and auto layout is high recommended and I had to learn that.'
    },
    {
      description: 'I equally had to report to a design superior and have my design vetted by another keen design eye and that was something that needed some getting used to.'
    },
  ],
  scrollImages: [
    'hydrogen-scroll-image-1',
    'hydrogen-scroll-image-2',
    'hydrogen-scroll-image-3'
  ],
  lessons: [
    'Working with a design superior taught me humility and made me realise that company goals can be achieved with adequate communication in place.',
    'I mastered the use of working with frames and auto layout as opposed to groups at the time.',
  ]
}
</script>

<template>
  <TheProject :="props" />
</template>