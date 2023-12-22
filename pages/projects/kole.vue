<script setup lang="ts">
useHead({
  title: 'Kólé | Aduragbemi Abiola',
  meta: [
    {
      property: 'og:title',
      content: 'Kólé | Aduragbemi Abiola'
    },
    {
      name: 'twitter:title',
      content: 'Kólé | Aduragbemi Abiola'
    },
    {
      name: 'description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Kólé.'
    },
    {
      property: 'og:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Kólé.'
    },
    {
      name: 'twitter:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working on Kólé.'
    },
    {
      property: 'og:url',
      content: 'https://adura.design/projects/kole'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://adura.design/projects/kole'
    }
  ]
})

definePageMeta({
  scrollToTop: false
})

const props = {
  projectName: 'Kólé',
  projectDescription: 'Kólé is dedicated to revolutionising construction planning and management in Africa. Empowering aspiring home owners and construction professionals alike with cutting-edge digital solutions that simplify and optimise every aspect of the construction journey.',
  deployLink: 'https://getkole.co/',
  heroImage: 'kole-hero',
  projectObjectives: [
    {
      description: 'Create a design system for the company.'
    },
    {
      description: 'Create a highly responsive web app that is compatible for multiple devices.'
    },
    {
      description: 'Create a mobile app solution.'
    },
    {
      description: 'Create two landing pages — one to accumulate emails to build the waitlist and the other to launch the software.'
    },
    {
      description: 'Carry out usability testing from time to time to make sure that the design is adequately optimised for the problem the team is poised to solve.'
    },
    {
      description: 'Track and monitor usage of the software while creating a better user experience from a data-driven standpoint.'
    }
  ],
  projectScreenshots: [
    'kole-screenshot-1',
    'kole-screenshot-2',
  ],
  designProcess: [
    {
      title: 'Problem discovery',
      description: 'This process often involved user feedback, stakeholder ideation for a business direction, or just an issue pointed out by the product manager, teammate(s) or myself.'
    },
    {
      title: 'Research and problem understanding',
      description: 'Once the problem had been green-lit, I began in-depth research on the problem, how it affected our user(s) and saw how competitors were solving said problem.'
    },
    {
      title: 'Wireframing and prototyping',
      description: 'After the problem was understood, I then proceeded to creating sketches of how the new feature(s) will look before finally moving on to design software. PS: I especially enjoy this process using pen and paper.'
    },
    {
      title: 'High fidelity design iterations',
      description: 'This process involved ideating the low fidelity designs (wireframes) into useful and usable interface.'
    },
    {
      title: 'Review and further iterations',
      description: 'The design was then reviewed by the product manager, frontend engineer, and sometimes the backend engineer if it involves matching the design to an existing endpoint.'
    },
    {
      title: 'Push for development',
      description: 'Once approved, it was shipped to the frontend engineer to work on it and make a push to the test environment.'
    },
    {
      title: 'Testing and QA',
      description: 'This involved me interfacing with the product managers and beta testers to make sure the feature solved the problem it set out to solve within the test environment.'
    }
  ],
  challenges: [
    {
      description: 'Striking the right balance between a visually appealing design and the functional requirements of the software seemed to be a challenge early on.'
    },
    {
      description: 'Ensuring a cross-platform consistency equally seemed daunting.'
    }
  ],
  scrollImages: [
    'kole-scroll-image-1',
    'kole-scroll-image-2',
    'kole-scroll-image-3'
  ],
  lessons: [
    'I was able to observe and learn how users think through multiple user-testing processes.',
    'A/B testing was equally employed for certain design features and we were able to make data-driven decisions for certain features.',
    'I\'m still learning, lol.'
  ]
}
</script>

<template>
  <TheProject :="props" />
</template>