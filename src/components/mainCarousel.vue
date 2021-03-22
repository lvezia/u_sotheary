<template>
  <div id="mainCarousel">
    <b-carousel
      id="main-carousel"
      ref="mainCarousel"
      class="mainCarousel"
      v-model="slide"
      :interval="7000"
      controls
      indicators
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide
        v-for="item in projects"
        v-bind:key='item.id'
        :caption="item.name"
        :text="item.description"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100 h-auto img-banner"
            :src="getImgSrc(item.mainImage)"
            alt="image slot"
          >
        </template>

        <router-link to="/" class="banner-btn">More details</router-link>
        <div class="mt-4"></div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import projectData from './../views/datasetProject.json'

export default {
  name: 'MainCarousel',
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      getImgSrc(img) {
        return require(`../assets/images/${img}`)
      }
    },
    computed: {
      projects() {
        return projectData.projects
      }
    },
    created() {}
}
</script>

<style scoped>
.mainCarousel {
  width: 100%;
  text-shadow: 1px 1px 2px #333;
}

.carousel-item img {
  width: 100%;
  height:100vh!important ;
}

.img-banner {
  object-fit: cover;
  object-position: center;
}

.banner-btn {
  font-size: 1em;
  color: var(--secondColor);
  border: 2px solid var(--secondColor);
  border-radius: 5px;
  padding: 10px 15px 10px 15px;
  text-shadow: none;
}

.banner-btn:hover {
  text-decoration: none;
  color: var(--firstColor);
  background-color: var(--secondColor);
}
</style>