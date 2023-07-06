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
      background="#fff"
      style="color: var(--secondColor)"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide
        v-for="(item, index) in projects"
        v-bind:key='index'
        content-visible-up="sm"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100 h-auto img-banner"
            :src="getImgSrc(item.mainImage)"
            alt="image slot"
          >
          <div class="gradient-bg"></div>
          <div class="carousel-caption d-block">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <router-link :to="{ name: 'ProjectDetails', params: { id: item.id} }" class="banner-btn">More details</router-link>
            <div class="mt-4"></div>
          </div>
        </template>
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
}

.carousel-item img {
  width: 100%;
  height:100vh!important ;
}

.img-banner {
  object-fit: cover;
  object-position: center;
}

.gradient-bg {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, transparent 20%, rgba(255, 255, 255, 1));
    position: absolute;
    top: 0;
}

.carousel-caption {
  color: var(--secondColor);
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