<template>
  <div id="Home">
    <LayoutDefault>
      <MainCarousel></MainCarousel>
    </LayoutDefault>
  </div>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import MainCarousel from '../components/mainCarousel'

export default {
  name: 'Home',
  title: 'Home - Ung Sotheary',
  components: {
    LayoutDefault,
    MainCarousel
  }
}
</script>

<style scoped>
</style>