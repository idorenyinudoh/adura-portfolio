<template>
  <section class="projects-container">
    <h1>
      PROJECTS
    </h1>
    <div class="projects">
      <BaseProject v-for="(project, index) in projects" :key="index" v-bind="project" />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          bgColor: '#D9E4E2',
          title: 'BORDERPAL',
          desc: 'Crossborder payment mobile app across Africa',
          tags: [
            'Fintech',
            'Payment'
          ],
          tagBackground: '#846BDF'
        },
        {
          bgColor: '#CDC7E1',
          title: 'STAAR PODCAST',
          desc: 'Podcasting platform for young adults transitioning into adulthood',
          tags: [
            'Podcast',
            'Streaming'
          ],
          tagBackground: '#846BDF'
        },
        {
          bgColor: '#FFECD1',
          title: 'EVENT BUDDY',
          desc: 'Mobile app case study that helps people attending the same function socialize prior',
          tags: [
            'Socials',
            'Events',
            'Scheduling'
          ],
          tagBackground: '#015796'
        },
        {
          bgColor: '#CDEEFF',
          title: 'MECHIELOCATE',
          desc: 'Case study on a web based platfotm that solves repair of automobiles',
          tags: [
            'Automobile',
            'Repairs'
          ],
          tagBackground: '#0A9AF3'
        }
      ]
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .projects-container {
    padding: 0 1.5rem 1.5rem;
  }
  h1 {
    margin-bottom: 24px;
    padding-right: 16px;
    font-size: 12px;
    line-height: 13px;
  }
  h1::after {
    width: 2px;
  }
  .projects {
    row-gap: 24px;
  }
}
@media screen and (min-width: 769px) {
  .projects-container {
    padding: 0 6.5rem 6.5rem;
  }
  h1 {
    margin-bottom: 84px;
    padding-right: 40px;
    font-size: 16px;
    line-height: 17px;
  }
  h1::after {
    width: 4px;
  }
  .projects {
    row-gap: 80px;
  }
}
h1 {
  position: relative;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--primary-color);
  text-align: right;
}
h1::after {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background-color: var(--secondary-color);
  content: '';
}
.projects {
  display: flex;
  flex-direction: column;
}
</style>
