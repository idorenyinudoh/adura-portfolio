<script setup lang="ts">
useHead({
  title: 'BetaSMS | Aduragbemi Abiola',
  meta: [
    {
      property: 'og:title',
      content: 'BetaSMS | Aduragbemi Abiola'
    },
    {
      name: 'twitter:title',
      content: 'BetaSMS | Aduragbemi Abiola'
    },
    {
      name: 'description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on BetaSMS.'
    },
    {
      property: 'og:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on BetaSMS.'
    },
    {
      name: 'twitter:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on BetaSMS.'
    },
    {
      property: 'og:url',
      content: 'https://adura.design/projects/betasms'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://adura.design/projects/betasms'
    }
  ]
})

definePageMeta({
  scrollToTop: false
})

const props = {
  projectName: 'BetaSMS',
  projectDescription: 'BetaSMS is a communication platform as a service (CPAAS) that enables businesses and individuals send bulk SMS messages to all network providers in Nigeria and international networks worldwide. BetaSMS delivers messages to all active numbers, including DND numbers with real-time delivery reports.',
  heroImage: 'betasms-hero',
  projectObjectives: [
    {
      description: 'Create administrator\'s user interface for newer roles like super resellers and sub-super resellers.'
    },
    {
      description: 'Match the interface with the existing technology as well as more accurate datapoints.'
    },
  ],
  projectScreenshots: [
    'betasms-screenshot-1',
    'betasms-screenshot-2',
  ],
  designProcess: [
    {
      title: 'Problem research and understanding',
      description: 'Due to the fact that this is an existing product and it had had multiple iterations, one of my earliest tasks involved reconciling these iterations to craft an even better one.'
    },
    {
      title: 'Sync with product managers',
      description: 'Asking "why" was a big deal on this project and this lead to a number of syncs but once we were aligned, I was able to design with accuracy and precision.'
    },
    {
      title: 'High fidelity design iterations',
      description: 'This involved me nudging rectangles here and there, some data visualisation and representations, depending on the datapoints of significance to specific users depending on their hierarchy.'
    },
    {
      title: 'Review with product managers and engineers',
      description: 'Once past the sync and problem understanding phases, I involved the product managers to green-light the project for development and this was a rather seamless flow.'
    },
  ],
  challenges: [
    {
      description: 'Understanding the existing administrator\'s back office was a rather daunting task as I was fairly new to the telecommunication scene and knew little to nothing about CPAAS. This involved me doing a ton of reading as well as syncs with the product managers.'
    },
    {
      description: 'I had a few back and forth issues with the frontend engineer during the problem-understanding phase and needed to have my design rationale clear and in place to offer clarity to the engineer as well as the team.'
    },
  ],
  scrollImages: [
    'betasms-scroll-image-1',
    'betasms-scroll-image-2',
    'betasms-scroll-image-3'
  ],
  lessons: [
    'It was my first time working with multiple product managers and interfacing directly with stakeholders and so I understood how certain design decisions directly influence our users especially when it comes to the hierarchy.',
    'My collaborative strength was greatly improved after I concluded this project.',
  ]
}
</script>

<template>
  <ProjectPage :="props" />
</template>