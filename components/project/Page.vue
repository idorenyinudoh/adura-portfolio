<script setup lang="ts">
interface Step {
  title?: string
  description: string
}

defineProps<{
  projectName: string
  projectDescription: string
  deployLink?: string
  heroImage: string
  projectObjectives: Step[]
  projectScreenshots: string[]
  designProcess: Step[]
  challenges: Step[]
  scrollImages: string[]
  lessons: string[]
}>()
</script>

<template>
  <div>
    <TheHeader />
    <article>
      <h1>{{ projectName }}</h1>
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-[10.1%]">
        <p class="base-text">{{ projectDescription }}</p>
        <NuxtLink v-if="deployLink" class="w-max px-6 md:px-8 lg:px-10 py-2 md:py-2.5 lg:py-3 rounded-[56px] border border-solid border-adura-black bg-adura-black/10 whitespace-nowrap text-adura-black font-normal text-sm md:text-base lg:text-xl" :href="deployLink" target="_blank">View Live Site</NuxtLink>
        <p v-else-if="projectName.toLowerCase() !== 'hydrogen'" class="w-max px-6 md:px-8 lg:px-10 py-2 md:py-2.5 lg:py-3 rounded-[56px] border border-solid border-adura-black bg-adura-black/10 whitespace-nowrap text-adura-black font-normal text-sm md:text-base lg:text-xl">In Development</p>
      </div>
      <div class="relative pt-[75%] sm:pt-[60%] lg:pt-[40.5%] -mx-[8.3vw] lg:mx-0 mt-16 lg:mt-4">
        <NuxtImg class="absolute top-0 left-0 w-full h-full object-cover rounded-none lg:rounded-2xl lg:border-2 lg:border-solid lg:border-adura-black" :src="`/projects/${heroImage}.webp`" :alt="`image of user on ${projectName}'s platform`" />
      </div>
      <article>
        <h2 class="mb-6 md:mb-8 lg:mb-10">PROJECT OBJECTIVES</h2>
        <ul class="list-disc ml-[29px] md:ml-8 lg:ml-[39.5px] mb-24 md:mb-32 lg:mb-40 text-adura-black text-base md:text-lg lg:text-2xl font-normal">
          <li v-for="(objective, index) in projectObjectives" :key="index">
            <span v-if="objective.title" class="font-medium">{{ objective.title }}: </span>
            <span>{{ objective.description }}</span>
          </li>
        </ul>
      </article>
      <section class="flex flex-col md:flex-row items-center gap-y-10 md:gap-x-8 md:gap-y-0">
        <div v-for="(screenshot, index) in projectScreenshots" :key="index" class="relative pt-[75%] sm:pt-[60%] md:pt-[43.5%] xl:pt-[33%] w-full">
          <NuxtImg class="absolute top-0 left-0 w-full h-full object-cover rounded-lg md:rounded-2xl border-2 border-solid border-adura-black" :src="`/projects/${screenshot}.webp`" :alt="`screenshot of ${projectName}`" />
        </div>
      </section>
      <article>
        <h2 class="mb-6 md:mb-8 lg:mb-10">DESIGN PROCESS</h2>
        <ul class="list-disc ml-[29px] md:ml-8 lg:ml-[39.5px] mb-24 md:mb-32 lg:mb-40 text-adura-black text-base md:text-lg lg:text-2xl font-normal">
          <li v-for="(step, index) in designProcess" :key="index">
            <span v-if="step.title" class="font-medium">{{ step.title }}: </span>
            <span>{{ step.description }}</span>
          </li>
        </ul>
      </article>
      <article>
        <h2 class="mb-6 md:mb-8 lg:mb-10">CHALLENGES</h2>
        <ul class="list-disc ml-[29px] md:ml-8 lg:ml-[39.5px] mb-24 md:mb-32 lg:mb-40 text-adura-black text-base md:text-lg lg:text-2xl font-normal">
          <li v-for="(challenge, index) in challenges" :key="index">
            <span v-if="challenge.title" class="font-medium">{{ challenge.title }}: </span>
            <span>{{ challenge.description }}</span>
          </li>
        </ul>
      </article>
      <section class="scroll-group -mx-[8.3vw] xl:-mx-[120px] flex items-center overflow-x-hidden">
        <div v-for="i in 2" :key="i" class="scroll px-1 md:px-2 lg:px-3 xl:px-4 grid items-center gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 grid-cols-[repeat(3,310px)] sm:grid-cols-[repeat(3,500px)] md:grid-cols-[repeat(3,640px)] lg:grid-cols-[repeat(3,768px)] xl:grid-cols-[repeat(3,830px)]">
          <div v-for="(image, index) in scrollImages" :key="index" class="relative pt-[75%] sm:pt-[62.9%]">
            <NuxtImg class="absolute top-0 left-0 w-full h-full object-cover rounded-lg md:rounded-2xl border-2 border-solid border-adura-black" :src="`/projects/${image}.webp`" :alt="`screenshot of ${projectName}`" />
          </div>
        </div>
      </section>
      <article>
        <h2 class="mb-6 md:mb-8 lg:mb-10">LESSONS LEARNED</h2>
        <ul class="list-disc ml-[29px] md:ml-8 lg:ml-[39.5px] mb-24 md:mb-32 lg:mb-40 text-adura-black text-base md:text-lg lg:text-2xl font-normal">
          <li v-for="(lesson, index) in lessons" :key="index">
            {{ lesson }}
          </li>
        </ul>
      </article>
    </article>
    <TheFooter />
  </div>
</template>

<style scoped>
@import url(~/assets/css/infinite-scroll.css);
</style>