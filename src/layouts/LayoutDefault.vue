<template>
  <div class="LayoutDefault">
    <b-navbar toggleable="lg" class="default-nav" fixed="top">
      <router-link to="/" class="nav-item color-second"><b>Home</b></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" class="nav-item color-second">Projects</router-link>
          <router-link to="/" class="nav-item color-second">Profile</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown class="color-second" text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

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
.nav-item {
  margin-left: 5px;
  margin-right: 5px;
}
</style>