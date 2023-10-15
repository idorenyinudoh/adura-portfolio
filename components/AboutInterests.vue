<script setup lang="ts">
const interests = [
  {
    title: 'Books',
    description: 'Here\'s a catalogue of some my all time favorites. Audiobooks, ebooks, or paperbacks in that order is my preferred form of reading and frankly, I mostly enjoy mind-benders (philosophy, psychology), self-help books as well as design books and occasionally fiction.',
    color: '#CDC7E5',
    data: [
      {
        title: 'The Non-Designer\'s Design Book',
        url: 'non-designers-design-book',
        caption: 'My very first design book. Great read!'
      },
      {
        title: 'Don\'t Make Me Think',
        url: 'dont-make-me-think',
        caption: 'Brilliant guide for usability'
      },
      {
        title: 'Hooked',
        url: 'hooked',
        caption: 'Think Atomic Habits but for products building'
      },
      {
        title: 'The Subtle Art of Not Giving a Fuck',
        url: 'the-subtle-art-of-not-giving-a-fuck',
        caption: 'An All Time Favorite'
      },
      {
        title: '12 Rules for Life',
        url: '12-rules-for-life',
        caption: 'Life changing read, trust me!'
      },
      {
        title: 'Beyond Order',
        url: 'beyond-order',
        caption: 'You know there\'s gotta be a sequel'
      },
      {
        title: 'The Power of Positive Thinking',
        url: 'the-power-of-positive-thinking',
        caption: 'Deeply insightful read'
      },
      {
        title: 'Steal Like an Artist',
        url: 'steal-like-an-artist',
        caption: 'Love LOVE his use of drawings and huge fonts'
      },
      {
        title: 'START WITH WHY',
        url: 'start-with-why',
        caption: 'It\'s so good, I\'ll definitely have another read'
      }
    ]
  },
  {
    title: 'Music',
    description: 'One thing you know about me is that I always have some form of headphones on my person. This is because I absolutely enjoy listening to music and across multiple genres. From Afrobeats to Highlife and Live praise concerts. From Old School Apala to Heartbreak and Love songs. From Rap and UK Drill to Gospel. If the music bangs, that\'s where I\'m at.',
    color: '#FFBC97',
    data: [
      {
        title: 'Burna Boy',
        url: 'burna-boy',
        caption: '"Odogwu no be nickname"'
      },
      {
        title: 'Passenger',
        url: 'passenger',
        caption: 'You should give his project All The Little Lights a listen.'
      },
      {
        title: 'The Cavemen',
        url: 'the-cavemen',
        caption: 'The Cavemen'
      },
      {
        title: 'King Sunny Ade',
        url: 'king-sunny-ade',
        caption: 'King Sunny Ade'
      },
      {
        title: 'Baba Ara',
        url: 'baba-ara',
        caption: 'My mum is literally singing his songs as I work on this this right now.'
      },
      {
        title: 'NF',
        url: 'nf',
        caption: 'NF\'s storytelling and use of orchestra is too peak!'
      },
      {
        title: 'Santan Dave',
        url: 'santan-dave',
        caption: 'Santan Dave. First time I saw the name, my brain saw satan. Lol.'
      },
      {
        title: 'Jon Bellion',
        url: 'jon-bellion',
        caption: 'Jon Bellion\'s acoustic rendition of Human is just so heavenly!'
      },
      {
        title: 'Adele',
        url: 'adele',
        caption: 'I mean, it\'s Adele'
      }
    ]
  },
  {
    title: 'Podcasts and Standups',
    description: 'I also enjoy listening to long-form audio content while I work. Podcasts, Standup specials and YouTube interviews. I also have a podcast with over thirty thousand global listens which airs bi-weekly across podcast streaming platforms and occasionally YouTube.',
    color: '#C0E3A4',
    data: []
  },
  {
    title: 'More Designs',
    description: 'On days when I\'m not designing user interfaces or mapping out user experience, I often dabble poster and flyer design exploration as well as illustrations for fun.',
    color: '#BFD7EA',
    data: []
  },
  {
    title: 'Movies and Series',
    description: 'A few genres I genuinely enjoy are sci-fi, action comedy, comedy, sitcoms, coming of age and my personal favorite, crime (something with a big reveal). I occasionally binge old animations cos I\'m not quite sure what they make these days.',
    color: '#FFE193',
    data: []
  }
]

const visibleInterestIndex = ref(0)

const intervalFunction = () => {
  if (visibleInterestIndex.value === interests.length - 1) {
    visibleInterestIndex.value = 0
  } else {
    visibleInterestIndex.value++
  }
}

let intervalId: any = null

const updateVisibleInterests = () => {
  intervalId = setInterval(intervalFunction, 10000)
}

const handleVisibleInterestChange = (index: number) => {
  visibleInterestIndex.value = index
  clearInterval(intervalId)
  intervalId = setInterval(intervalFunction, 10000)
}

onMounted(() => {
  updateVisibleInterests()
})
</script>

<template>
  <div class="max-sm:relative">
    <BaseH2 text="INTERESTS" />
    <div class="max-sm:sticky max-sm:top-0 z-[51] bg-adura-black flex md:hidden flex-wrap items-center justify-center gap-3 -mx-[8.3vw] mb-10 px-1 py-6 text-white/90 text-sm">
      <button class="px-4 py-2 border-2 border-white/90 rounded-[72px]">Books</button>
      <button class="px-4 py-2 border-2 border-white/90 rounded-[72px]">Music</button>
      <button class="px-4 py-2 border-2 border-white/90 rounded-[72px]">Podcasts and Standups</button>
      <button class="px-4 py-2 border-2 border-white/90 rounded-[72px]">More Designs</button>
      <button class="px-4 py-2 border-2 border-white/90 rounded-[72px]">Movies and Series</button>
    </div>
    <BaseP class="md:hidden">Here's a catalogue of some my all time favorites. Audiobooks, ebooks, or paperbacks in that order is my preferred form of reading and frankly, I mostly enjoy mind-benders (philosophy, psychology), self-help books as well as design books and occasionally fiction.</BaseP>
    <div class="grid grid-rows-[max-content,max-content] md:grid-cols-[1fr,1fr] lg:grid-cols-[1.2fr,1fr] xl:grid-cols-[1.3fr,1fr] 2xl:grid-cols-[560px,1fr] gap-x-8 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-28 items-center">
      <div class="relative z-0 p-[10%] lg:p-[11.5%] xl:p-[12%] rounded-2xl grid grid-cols-3 xl:grid-cols-[repeat(3,123.22px)] grid-rows-3 xl:grid-rows-[repeat(3,129.89px)] gap-4 lg:gap-6 xl:gap-7 max-md:max-w-md max-md:mx-auto" :style="{ backgroundColor: interests[visibleInterestIndex].color }">
        <div v-for="(image, index) in interests[visibleInterestIndex].data" :key="index" class="relative cursor-pointer hover:after:opacity-100 after:opacity-0 after:transition-opacity after:duration-200 after:ease-linear after:absolute after:w-full after:h-full after:inset-0 after:p-[10%] after:bg-black/70 after:rounded-lg after:content-[attr(data-content)] after:flex after:items-center after:justify-center after:text-center after:text-white after:text-sm xl:after:text-base after:leading-4 xl:after:leading-5" :data-content="image.caption">
          <NuxtImg class="rounded-lg cursor-pointer" :src="`/interests/${interests[visibleInterestIndex].title.toLowerCase().split(' ').join('-')}/${image.url}`" :alt="`cover of ${image.title}`" />
        </div>
        <img class="absolute -z-[1] bottom-0 right-0" :src="`/icons/${interests[visibleInterestIndex].title.toLowerCase().split(' ').join('-')}.svg`" :alt="`${interests[visibleInterestIndex].title.toLowerCase().split(' ').join('-')} icon`">
      </div>
      <div class="hidden md:flex flex-col gap-y-1.5 lg:gap-y-3 xl:gap-y-6">
        <div v-for="(interest, index) in interests" :key="index" class="grid grid-cols-[8px,1fr] gap-x-3 lg:gap-x-7 xl:gap-x-10">
          <div class="relative w-1.5 xl:w-2 h-full rounded-3xl bg-[#D9D9D966]" :class="{ 'h-[calc(100%+8px)] -mt-1 lg:h-[calc(100%+16px)] lg:-mt-2 xl:h-[calc(100%+32px)] xl:-mt-4': index === visibleInterestIndex }">
            <div v-if="index === visibleInterestIndex" class="grow absolute w-full h-0 rounded-3xl" :style="{ backgroundColor: interest.color }"></div>
          </div>
          <div :class="['text-adura-black grid grid-rows-[max-content,0fr] justify-items-start transition-[grid-template-rows] duration-700 ease-linear', { 'grid-rows-[max-content,1fr] gap-y-2 lg:gap-y-4 xl:gap-y-6': index === visibleInterestIndex }]">
            <button @click="handleVisibleInterestChange(index)">
              <p class="text-lg lg:text-2xl xl:text-3xl font-bold">{{ interest.title }}</p>
            </button>
            <p class="overflow-hidden text-base lg:text-xl xl:text-2xl font-normal">{{ interest.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grow {
  animation: grow 10s linear forwards;
}
@keyframes grow {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
</style>