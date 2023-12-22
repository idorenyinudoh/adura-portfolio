<script setup lang="ts">
useHead({
  title: 'Sciart Finance | Aduragbemi Abiola',
  meta: [
    {
      property: 'og:title',
      content: 'Sciart Finance | Aduragbemi Abiola'
    },
    {
      name: 'twitter:title',
      content: 'Sciart Finance | Aduragbemi Abiola'
    },
    {
      name: 'description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Sciart Finance.'
    },
    {
      property: 'og:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Sciart Finance.'
    },
    {
      name: 'twitter:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Sciart Finance.'
    },
    {
      property: 'og:url',
      content: 'https://adura.design/projects/sciart-finance'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://adura.design/projects/sciart-finance'
    }
  ]
})

definePageMeta({
  scrollToTop: false
})

const props = {
  projectName: 'Sciart Finance',
  projectDescription: 'Sciart Finance Company Limited offers comprehensive financial and investment services as well as savings and bill payment services. They also provide context-relevant advisory services to businesses and individuals. They are a CBN-licensed finance company built for small and medium-sized businesses who are currently underserved by the traditional finance sector.',
  heroImage: 'sciart-finance-hero',
  projectObjectives: [
    {
      description: 'Create a design system.'
    },
    {
      description: 'Design a fully-prototyped mobile app and administrator\'s back-office that cater to the needs of both the users and stakeholders.'
    },
    {
      description: 'Review the existing mobile and administrator\'s interfaces and create a better solution as well as add a couple features to the current iteration.'
    },
  ],
  projectScreenshots: [
    'sciart-finance-screenshot-1',
    'sciart-finance-screenshot-2',
  ],
  designProcess: [
    {
      title: 'Problem statement, understanding, and research',
      description: 'This was the very first step in my design process as I had to carefully explore the existing user interface and the current website to understand their services and ask questions to the team to make sure the design solves real world problems.'
    },
    {
      title: 'Design system',
      description: 'Create a global design system that caters to both the mobile application and back-office and customise it to fit SCIART\'s brand identity.'
    },
    {
      title: 'Wireframing and prototyping',
      description: 'After creating the design system, I then proceeded to creating sketches of how the new feature(s) will look before finally moving on to design software. PS: I especially enjoy this process using pen and paper.'
    },
    {
      title: 'High fidelity design iterations',
      description: 'This process involved ideating the low fidelity designs (wireframes) into useful and usable interface.'
    },
    {
      title: 'Review and further iterations',
      description: 'The design was then reviewed by the CEO and when green-lit, pushed for development.'
    },
  ],
  challenges: [
    {
      description: 'Designing effective ways to visualise financial data and analytics within the admin back-office can be complex.'
    },
    {
      description: 'Due to the fact that where was an existing iteration of the product, I had to go back and forth to make sure the new iteration solved the issues the existing one had. Some of these issues included unnamed design layers, use of groups and random use of frames instead of auto-layout.'
    },
    {
      description: 'Working within such short timeframe was highly challenging and I was able to push myself to meet the deadline though we had a few close calls.'
    }
  ],
  scrollImages: [
    'sciart-finance-scroll-image-1',
    'sciart-finance-scroll-image-2',
    'sciart-finance-scroll-image-3'
  ],
  lessons: [
    'I actively sought and incorporated feedback from a diverse set of stakeholders including users, developers, and product managers to refine my designs.',
    'I learned to maintain well-organised design documentation, style guides, and UI component libraries to streamline collaboration and future updates.',
    'I especially learned what it meant to work with friends and that reminded me of the true power of collaboration.'
  ]
}
</script>

<template>
  <TheProject :="props" />
</template>