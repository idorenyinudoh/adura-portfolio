<script setup lang="ts">
useHead({
  title: 'Interswitch | Aduragbemi Abiola',
  meta: [
    {
      property: 'og:title',
      content: 'Interswitch | Aduragbemi Abiola'
    },
    {
      name: 'twitter:title',
      content: 'Interswitch | Aduragbemi Abiola'
    },
    {
      name: 'description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working at Interswitch.'
    },
    {
      property: 'og:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working at Interswitch.'
    },
    {
      name: 'twitter:description',
      content: 'Design process, challenges faced, and lessons learned by product designer, Aduragbemi Abiola, while working at Interswitch.'
    },
    {
      property: 'og:url',
      content: 'https://adura.design/projects/interswitch'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://adura.design/projects/interswitch'
    }
  ]
})

definePageMeta({
  scrollToTop: false
})

const props = {
  projectName: 'Interswitch',
  projectDescription: 'Interswitch is a leading African integrated payments and digital commerce company, best known for powering financial transactions across the continent. Through its Digital Health Platform (DHP), Interswitch in partnership with the Lagos state government is creating a unified ecosystem that securely stores and exchanges patient health data, integrates with electronic medical records, and enables services such as appointment booking, consultation payments, access to medications, and real-time information sharing among healthcare providers.',
  deployLink: 'https://interswitchgroup.com',
  heroImage: 'interswitch-hero',
  projectObjectives: [
    {
      description: 'Digitize healthcare and administrative workflows for better efficiency and accessibility.'
    },
    {
      description: 'Build unified platforms that serve patients, providers, and regulators.'
    },
    {
      description: 'Ensure the solutions aligned with government policies while staying flexible enough to adapt to evolving requirements.'
    }
  ],
  // projectScreenshots: [
  //   'kole-screenshot-1',
  //   'kole-screenshot-2',
  // ],
  designProcess: [
    {
      description: 'I carried out on-the-ground research in hospitals across Lagos, mapping current processes and spotting inefficiencies.'
    },
    {
      description: 'I engaged government stakeholders and healthcare providers to validate insights and make sure policies matched product execution.'
    },
    {
      description: 'I designed platforms like the Lagos State health portal, developer documentation, and mobile app with scalability and real user workflows in mind.'
    },
    {
      description: 'My design approach leaned heavily toward building systems that could adapt as things shifted.'
    },
  ],
  challenges: [
    {
      description: 'Working without user stories or structured product management meant navigating ambiguity.'
    },
    {
      description: 'Requirements shifted frequently, which pushed me to prioritize adaptability over rigid planning.'
    },
    {
      description: 'Balancing the priorities of diverse stakeholders — government, hospitals, and patients — was often complex.'
    }
  ],
  // scrollImages: [
  //   'kole-scroll-image-1',
  //   'kole-scroll-image-2',
  //   'kole-scroll-image-3'
  // ],
  lessons: [
    'Building scalable systems beats focusing only on aesthetics in rapidly changing environments.',
    'Direct research and close collaboration with stakeholders is invaluable for bridging gaps between policy and product.',
    'Flexibility and systems thinking are essential when working on projects at such a large, state-wide scale.',
    'I’m still learning, lol.'
  ]
}
</script>

<template>
  <ProjectPage :="props" />
</template>