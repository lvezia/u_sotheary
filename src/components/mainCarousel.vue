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
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100 h-auto"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
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
      }
    }
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
</style>