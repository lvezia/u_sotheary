<template>
  <div class="Sidebar">
    <div class="sidebar-toggle" :class="{ 'd-none' : !toggle }">
      <div class="icon-toggle">
        <a v-on:click="toggleSidebar(!toggle)"><b-icon icon="chevron-double-right" scale="1.5"></b-icon></a>
      </div>
    </div>

    <div class="sidebar-container" :class="{ 'd-none' : toggle }">
      <div style="margin-top: 64px;"></div>
      <div class="px-3 py-4">
        <a v-on:click="toggleSidebar(!toggle)" class="toggle-icon-left"><b-icon icon="chevron-double-left" scale="1.5"></b-icon></a>
        <h3>{{ $t('admin.admin') }}</h3>
        <li>
          <ul>
            <router-link :to="{name: 'Dashboard'}">{{ $t('home.dashboard') }}</router-link>
          </ul>
          <ul>
            <router-link :to="{name: 'AdminProfile'}">{{ $t('home.profile') }}</router-link>
          </ul>
          <ul>
            <router-link :to="{name: 'AdminProjects'}">{{ $t('home.projects') }}</router-link>
          </ul>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      toggle: false
    }
  },
  computed: {},
  methods: {
    toggleSidebar(value) {
      this.toggle = value
    }
  }
}
</script>

<style scoped>
.sidebar-container {
    display: flex;
    flex-direction: column;
    width: 280px;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
    margin: 0;
    outline: 0;
    transform: translateX(0);
    color: var(--lightGrey);
    background-color: var(--firstColor);
}

.sidebar-toggle {
  display: none;
}

.toggle-icon-left {
  display: none;
}

.icon-toggle {
  color: var(--secondColor);
}

.sidebartmp {
    position: fixed;
    top: 0;
}

li {
  list-style-type: none;
}

li ul a {
  color: var(--ligthGrey);
  font-weight: 500;
}

@media only screen and (max-width: 767px) {
  .sidebar-toggle {
    display: block;
    margin-top: 64px;
    padding: 10px;
  }

  .toggle-icon-left {
    color: var(--secondColor);
    display: flex;
    position: absolute;
    right: 20px;
  }
}

</style>