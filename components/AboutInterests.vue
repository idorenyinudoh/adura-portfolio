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
    data: [
      {
        title: 'The Diary of a CEO',
        url: 'diary-of-a-ceo',
        caption: 'Diary of a CEO'
      },
      {
        title: 'Vent Per Week',
        url: 'vent-per-week',
        caption: 'Vent Per Week'
      },
      {
        title: 'On Purpose',
        url: 'on-purpose',
        caption: 'On Purpose'
      },
      {
        title: 'The Closer',
        url: 'the-closer',
        caption: 'The Closer'
      },
      {
        title: 'Irresponsible',
        url: 'irresponsible',
        caption: 'Irresponsible'
      },
      {
        title: 'I Wish You Would',
        url: 'i-wish-you-would',
        caption: 'I Wish You Would'
      },
      {
        title: 'The King\'s Jester',
        url: 'the-kings-jester',
        caption: 'The King\'s Jester'
      },
      {
        title: 'Shxts N Gigs',
        url: 'shxts-n-gigs',
        caption: 'Shxts N Gigs'
      },
      {
        title: 'Shaking Tables',
        url: 'shaking-tables',
        caption: 'Subscribe'
      }
    ]
  },
  {
    title: 'More Designs',
    description: 'On days when I\'m not designing user interfaces or mapping out user experience, I often dabble poster and flyer design exploration as well as illustrations for fun.',
    color: '#BFD7EA',
    data: [
      {
        title: 'Flyer Exploration',
        url: 'flyer-exploration',
        caption: 'Flyer Exploration'
      },
      {
        title: 'Podcast Flyer',
        url: 'podcast-flyer',
        caption: 'Podcast Flyer'
      },
      {
        title: 'Calendar Illustration',
        url: 'calendar-illustration',
        caption: 'Calendar Illustration'
      },
      {
        title: 'Podcast Flyer',
        url: 'podcast-flyer2',
        caption: 'Podcast Flyer'
      },
      {
        title: 'Notes Illustration',
        url: 'notes-illustration',
        caption: 'Notes Illustration'
      },
      {
        title: 'Podcast Flyer',
        url: 'podcast-flyer3',
        caption: 'Podcast Flyer'
      },
      {
        title: 'POS Illustration',
        url: 'pos-illustration',
        caption: 'POS Illustration'
      },
      {
        title: 'Flyer Exploration',
        url: 'flyer-exploration2',
        caption: 'Flyer Exploration'
      },
      {
        title: 'Ikoyi Bridge Illustration',
        url: 'ikoyi-bridge-illustration',
        caption: 'Ikoyi Bridge Illustration'
      },
    ]
  },
  {
    title: 'Movies and Series',
    description: 'A few genres I genuinely enjoy are sci-fi, action comedy, comedy, sitcoms, coming of age and my personal favorite, crime (something with a big reveal). I occasionally binge old animations cos I\'m not quite sure what they make these days.',
    color: '#FFE193',
    data: [
      {
        title: 'Lie to Me',
        url: 'lie-to-me',
        caption: 'Lie to Me'
      },
      {
        title: 'Forever',
        url: 'forever',
        caption: 'Forever'
      },
      {
        title: 'Smallville',
        url: 'smallville',
        caption: 'Smallville'
      },
      {
        title: 'Brooklyn Nine-Nine',
        url: 'brooklyn-nine-nine',
        caption: 'Brooklyn Nine-Nine'
      },
      {
        title: 'Sherlock Holmes',
        url: 'sherlock-holmes',
        caption: 'Sherlock Holmes'
      },
      {
        title: 'Bob Hearts Abishola',
        url: 'bob-hearts-abishola',
        caption: 'Bob Hearts Abishola'
      },
      {
        title: 'Dark Knight Rises',
        url: 'dark-knight-rises',
        caption: 'Dark Knight Rises'
      },
      {
        title: 'The Boys',
        url: 'the-boys',
        caption: 'The Boys'
      },
      {
        title: 'Suits',
        url: 'suits',
        caption: 'Suits'
      },
    ]
  }
]

const redirectToPodcast = async (title: string) => {
  if (title !== 'Shaking Tables') return 
  await navigateTo('https://open.spotify.com/show/0CWTfoNZn8IsNECNoQXMG0?si=a939d696b57d43c4', {
    open: {
      target: '_blank'
    }
  })
}

const visibleInterestIndex = ref(0)

const intervalFunction = () => {
  if (visibleInterestIndex.value === interests.length - 1) {
    visibleInterestIndex.value = 0
  } else {
    visibleInterestIndex.value++
  }
}

const innerCustomInterval = new customInterval(intervalFunction, 10000)

const handleVisibleInterestChange = (index: number) => {
  visibleInterestIndex.value = index
  if (window.innerWidth >= 768) {
    innerCustomInterval.stop()
    innerCustomInterval.play()
  }
}

const initialWindowWidth = ref(0)

const onWindowResize = () => {
  if (window.innerWidth >= 768 && initialWindowWidth.value < 768) {
    innerCustomInterval.play()
  } else if (window.innerWidth < 768 && initialWindowWidth.value >= 768) {
    innerCustomInterval.stop()
  }
  initialWindowWidth.value = window.innerWidth
}

onMounted(() => {
  initialWindowWidth.value = window.innerWidth
  if (window.innerWidth >= 768) {
    innerCustomInterval.play()
  }
  window.addEventListener('resize', onWindowResize)
})
onUnmounted(() => {
  innerCustomInterval.stop()
  window.removeEventListener('resize', onWindowResize)
})
</script>

<template>
  <article>
    <BaseH2 text="INTERESTS" />
    <dl class="md:hidden">
      <template v-for="(interest, index) in interests" :key="index">
        <dt class="border-b border-solid border-adura-black/30">
          <button class="w-full py-2 flex justify-between" @click="handleVisibleInterestChange(index)">
            <p class="text-base font-medium">{{ interest.title }}</p>
            <svg v-if="index !== visibleInterestIndex" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 12.9961H13V17.9961C13 18.2613 12.8946 18.5157 12.7071 18.7032C12.5196 18.8907 12.2652 18.9961 12 18.9961C11.7348 18.9961 11.4804 18.8907 11.2929 18.7032C11.1054 18.5157 11 18.2613 11 17.9961V12.9961H6C5.73478 12.9961 5.48043 12.8907 5.29289 12.7032C5.10536 12.5157 5 12.2613 5 11.9961C5 11.7309 5.10536 11.4765 5.29289 11.289C5.48043 11.1015 5.73478 10.9961 6 10.9961H11V5.99609C11 5.73088 11.1054 5.47652 11.2929 5.28899C11.4804 5.10145 11.7348 4.99609 12 4.99609C12.2652 4.99609 12.5196 5.10145 12.7071 5.28899C12.8946 5.47652 13 5.73088 13 5.99609V10.9961H18C18.2652 10.9961 18.5196 11.1015 18.7071 11.289C18.8946 11.4765 19 11.7309 19 11.9961C19 12.2613 18.8946 12.5157 18.7071 12.7032C18.5196 12.8907 18.2652 12.9961 18 12.9961Z" fill="black"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M17.8125 10.9844C17.8125 11.233 17.7137 11.4715 17.5379 11.6473C17.3621 11.8231 17.1236 11.9219 16.875 11.9219H3.125C2.87636 11.9219 2.6379 11.8231 2.46209 11.6473C2.28627 11.4715 2.1875 11.233 2.1875 10.9844C2.1875 10.7357 2.28627 10.4973 2.46209 10.3215C2.6379 10.1456 2.87636 10.0469 3.125 10.0469H16.875C17.1236 10.0469 17.3621 10.1456 17.5379 10.3215C17.7137 10.4973 17.8125 10.7357 17.8125 10.9844Z" fill="black"/>
            </svg>
          </button>
        </dt>
        <dd :class="['grid transition-[grid-template-rows] duration-[400ms] ease-in-out', index === visibleInterestIndex ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]']">
          <div :class="[{'mb-2': index !== interests.length - 1 }, 'overflow-hidden']">
            <p class="my-8 text-sm">{{ interest.description }}</p>
            <div class="relative z-0 p-[10%] rounded-2xl grid grid-cols-3 grid-rows-3 gap-4 max-md:max-w-md max-md:mx-auto" :style="{ backgroundColor: interest.color }">
              <img class="absolute -z-[1] top-0 left-0" :src="`/icons/${interest.title.toLowerCase().split(' ').join('-')}-1.svg`" :alt="`${interest.title.toLowerCase().split(' ').join('-')} icon`">
              <div v-for="(image, subIndex) in interest.data" :key="subIndex" @click="redirectToPodcast(image.title)">
                <NuxtImg class="rounded-lg cursor-pointer" :src="`/interests/${interest.title.toLowerCase().split(' ').join('-')}/${image.url}`" :alt="`cover of ${image.title}`" />
              </div>
              <img class="absolute -z-[1] bottom-0 right-0" :src="`/icons/${interest.title.toLowerCase().split(' ').join('-')}-2.svg`" :alt="`${interest.title.toLowerCase().split(' ').join('-')} icon`">
            </div>
          </div>
        </dd>
      </template>
    </dl>
    <div class="grow-parent hidden md:grid grid-cols-[1fr,1fr] lg:grid-cols-[1.2fr,1fr] xl:grid-cols-[1.3fr,1fr] 2xl:grid-cols-[560px,1fr] gap-x-8 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-28 items-center">
      <div class="relative z-0 p-[10%] lg:p-[11.5%] xl:p-[12%] rounded-2xl grid grid-cols-3 2xl:grid-cols-[repeat(3,123.22px)] grid-rows-3 2xl:grid-rows-[repeat(3,129.89px)] gap-4 lg:gap-6 xl:gap-7" :style="{ backgroundColor: interests[visibleInterestIndex].color }" @mouseenter="innerCustomInterval.pause" @mouseleave="innerCustomInterval.play">
        <img class="absolute -z-[1] top-0 left-0" :src="`/icons/${interests[visibleInterestIndex].title.toLowerCase().split(' ').join('-')}-1.svg`" :alt="`${interests[visibleInterestIndex].title.toLowerCase().split(' ').join('-')} icon`">
        <div v-for="(image, index) in interests[visibleInterestIndex].data" :key="index" class="relative cursor-pointer hover:after:opacity-100 after:opacity-0 after:transition-opacity after:duration-200 after:ease-linear after:absolute after:w-full after:h-full after:inset-0 after:p-[10%] after:bg-black/70 after:rounded-lg after:content-[attr(data-content)] after:flex after:items-center after:justify-center after:text-center after:text-white after:text-xs lg:after:text-sm xl:after:text-base after:leading-4 xl:after:leading-5" :class="{'hover:before:opacity-100 before:opacity-0 before:transition-opacity before:duration-200 before:ease-linear before:absolute before:w-[80%] before:h-[30%] before:inset-0 before:z-[1] before:m-auto before:bg-white before:content-[attr(data-content)] before:flex before:items-center before:justify-center before:text-center before:rounded-3xl before:text-xs lg:before:text-sm xl:before:text-base before:leading-4 xl:before:leading-5' : image.title === 'Shaking Tables'}" :data-content="image.caption" @click="redirectToPodcast(image.title)">
          <NuxtImg class="rounded-lg cursor-pointer" :src="`/interests/${interests[visibleInterestIndex].title.toLowerCase().split(' ').join('-')}/${image.url}`" :alt="`cover of ${image.title}`" />
        </div>
        <img class="absolute -z-[1] bottom-0 right-0" :src="`/icons/${interests[visibleInterestIndex].title.toLowerCase().split(' ').join('-')}-2.svg`" :alt="`${interests[visibleInterestIndex].title.toLowerCase().split(' ').join('-')} icon`">
      </div>
      <div class="flex flex-col gap-y-1.5 lg:gap-y-3 xl:gap-y-6">
        <div v-for="(interest, index) in interests" :key="index" class="grid grid-cols-[8px,1fr] gap-x-3 lg:gap-x-7 xl:gap-x-10">
          <div class="relative w-1.5 xl:w-2 h-full rounded-3xl bg-[#D9D9D966]" :class="{ 'h-[calc(100%+8px)] -mt-1 lg:h-[calc(100%+16px)] lg:-mt-2 xl:h-[calc(100%+32px)] xl:-mt-4': index === visibleInterestIndex }">
            <div v-if="index === visibleInterestIndex" class="grow absolute w-full h-0 rounded-3xl" :style="{ backgroundColor: interest.color }"></div>
          </div>
          <article :class="['text-adura-black grid grid-rows-[max-content,0fr] justify-items-start transition-[grid-template-rows] duration-300 ease-linear', { 'grid-rows-[max-content,1fr] gap-y-2 lg:gap-y-4 xl:gap-y-6': index === visibleInterestIndex }]">
            <button @click="handleVisibleInterestChange(index)">
              <h3 :class="[ index === visibleInterestIndex ? 'text-lg lg:text-2xl xl:text-3xl font-medium' : 'text-base lg:text-xl xl:text-2xl font-normal' ]">{{ interest.title }}</h3>
            </button>
            <p class="overflow-hidden text-base lg:text-xl xl:text-2xl font-normal">{{ interest.description }}</p>
          </article>
        </div>
      </div>
    </div>
    <footer>
      <BaseP>PS: I'm open to nerding out on any of these topics, you can shoot me an email or a twitter DM.</BaseP>
    </footer>
  </article>
</template>

<style scoped>
.grow-parent > div:first-of-type:hover + div .grow {
  animation-play-state: paused;
}
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