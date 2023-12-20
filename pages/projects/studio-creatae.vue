<script setup lang="ts">
useHead({
  title: 'Studio Creatae',
  meta: [
    {
      property: 'og:title',
      content: 'Studio Creatae | Aduragbemi Abiola'
    },
    {
      name: 'twitter:title',
      content: 'Studio Creatae | Aduragbemi Abiola'
    },
    {
      name: 'description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Studio Creatae.'
    },
    {
      property: 'og:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Studio Creatae.'
    },
    {
      name: 'twitter:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Studio Creatae.'
    },
    {
      property: 'og:url',
      content: 'https://adura.design/projects/studio-creatae'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://adura.design/projects/studio-creatae'
    }
  ]
})

definePageMeta({
  scrollToTop: false
})

const props = {
  projectName: 'Studio Creatae',
  projectDescription: 'Studio Creatae is growing brands with value based experiences - using branding and marketing communications. They focus on crafting timeless experiences that define brands while shaping brand perceptions through thoughtfully-curated experiential interactions.',
  heroImage: 'studio-creatae-hero',
  projectObjectives: [
    {
      description: 'Create a minimalistic fully-interactive prototyped user interface that caters for specific case studies for the agency and fits into the existing brand guide.'
    },
    {
      description: 'Communicate my design process with the team and check in for review from time to time.'
    }
  ],
  projectScreenshots: [
    'studio-creatae-screenshot-1',
    'studio-creatae-screenshot-2',
  ],
  designProcess: [
    {
      title: 'Brief',
      description: 'This involved the director sharing with me the sitemap and existing design assets to be used on the design.'
    },
    {
      title: 'Design research',
      description: 'Due to the fact that the then creative director had a clear vision of how the site should look, I had to do extensive research into that particular style of designing and it helped me understand minimalism in design as most use cases are agencies in the diaspora.'
    },
    {
      title: 'Ideation and low fidelity wireframes',
      description: 'I had to keep the team in the loop every step of the way, clearly explain my thought process, and have it vetted by the team before I even moved forward to designing on the canvas.'
    },
    {
      title: 'High fidelity designs and review',
      description: 'This involved me bringing the sketches to live and making sure they were green-lit by the creative director as well as the web developer — making sure provisions were made for mobile as well as web.'
    },
  ],
  challenges: [
    {
      description: 'Due to the fact that it\'s a website for a design agency, I had my design go through scrutiny as well as having multiple iterations before finally agreeing on a specific interface. I\'m grateful for it though.'
    },
  ],
  scrollImages: [
    'studio-creatae-scroll-image-1',
    'studio-creatae-scroll-image-2',
    'studio-creatae-scroll-image-3'
  ],
  lessons: [
    'I learned that every design iteration can always be better and to take every feedback as an opportunity to learn.',
    'I learned to prioritise minimalistic design that emphasises clarity and simplicity.',
    'I also was able to pick the brain of the developer and even understand a little about the environment he used for the final design iteration.'
  ]
}
</script>

<template>
  <TheProject :="props" />
</template>