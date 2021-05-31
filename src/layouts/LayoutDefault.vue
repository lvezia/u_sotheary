<template>
  <div class="LayoutDefault">
    <b-navbar toggleable="lg" class="default-nav" fixed="top" type="dark">
      <router-link to="/" class="nav-item nav-link">
        <img
          class="d-block img-fluid h-auto img-project"
          :src="getImgSrc('SothearyLogo.png')"
          alt="image slot"
          width="32px"
          height="auto"
        >
      </router-link>

      <b-navbar-toggle target="nav-collapse dark"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link :to="{ name: 'Projects' }" class="nav-item nav-link">{{ $t('home.projects') }}</router-link>
          <router-link :to="{ name: 'Profile' }" class="nav-item nav-link">{{ $t('home.profile') }}</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-icon icon="chat-right-text" class="d-none d-lg-block lang-icon"></b-icon>
          <b-nav-item-dropdown class="color-second" :text="$t('home.languages')" right>
            <b-dropdown-item v-for="lang in languages" :key="lang" @click="setLang(lang)" class="item-lang">{{ lang }}</b-dropdown-item>
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
  name: 'LayoutDefault',
  data() {
    return {
      languages: ['en', 'kh', 'fr']
    }
  },
  computed: {},
  methods: {
    getImgSrc(img) {
        return require(`../assets/images/${img}`)
    },
    setLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
.nav-item {
  margin-left: 5px;
  margin-right: 5px;
}

.item-lang {
  color: var(--firstColor);
  text-transform: uppercase;
}

.lang-icon {
  color: #fff;
  margin-top: auto;
  margin-bottom: auto;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>