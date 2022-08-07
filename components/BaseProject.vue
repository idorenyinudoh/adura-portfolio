<template>
  <div :style="{'background-color': bgColor }" class="project-container">
    <h2>
      {{ title }}
    </h2>
    <p>
      {{ desc }}
    </p>
    <div class="tags">
      <p v-for="(tag,index) in tags" :key="index" :style="{'background-color': tagBackground }">
        {{ tag }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    tagBackground: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .project-container {
    border-radius: 8px;
    padding: 24px 0 50px 24px;
  }
  h2 {
    margin-bottom: 4px;
    font-size: 8px;
  }
  h2 + p {
    max-width: 205px;
    margin-bottom: 8px;
    font-size: 16px;
  }
  .tags {
    column-gap: 4px;
  }
  .tags p {
    border-radius: 2px;
    padding: 2px 6px;
    font-size: 10px;
  }
}
@media screen and (min-width: 769px) {
  .project-container {
    border-radius: 32px;
    padding: 96px 0 180px 96px;
  }
  h2 {
    margin-bottom: 16px;
    font-size: 24px;
  }
  h2 + p {
    max-width: 410px;
    margin-bottom: 24px;
    font-size: 32px;
  }
  .tags {
    column-gap: 16px;
  }
  .tags p {
    border-radius: 4px;
    padding: 8px 24px;
    font-size: 16px;
  }
}
.project-container {
  opacity: 0.9;
}
h2 {
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.11em;
  color: #2D2D2D;
}
h2 + p {
  font-weight: 400;
  line-height: 140%;
  color: #2D2D2D;
}
.tags {
  display: flex;
}
.tags p {
  font-weight: 400;
  line-height: 140%;
  color: #FFF;
}
</style>
