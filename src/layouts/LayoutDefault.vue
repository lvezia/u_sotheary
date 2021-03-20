<template>
  <div class="LayoutDefault">
    <div>Hello world</div>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

<style scoped>
</style>