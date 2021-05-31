<template>
  <div id="Dashboard">
    <LayoutDefault>
  
      <div class="admin-container">
        <Sidebar></Sidebar>
      
        <div class="content-container">
          <div class="custom-card" v-on:click="redirectTo('AdminProfile')">
            <h2>Profile</h2>
          </div>
          <div class="custom-card" v-on:click="redirectTo('AdminProjects')">
            <h2>Projects</h2>
          </div>
        </div>
      </div>
    
    </LayoutDefault>
  </div>
</template>

<script>
import LayoutDefault from '../../layouts/LayoutDefault'
import Sidebar from '../../layouts/Sidebar'

export default {
  name: 'Dashboard',
  title: 'Dashboard',
  components: { LayoutDefault, Sidebar },
  methods: {
    redirectTo(pathName) {
      this.$router.push({ name: pathName })
      
    }
  }
}
</script>

<style scoped>
#Dashboard {
  height: 100vh;
  background-color: var(--firstColor);
}

.admin-container {
  display: flex;
  flex-direction: row;
}

.content-container {
  margin-top: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.custom-card {
  background-color: var(--lightGrey);
  height: 150px;
  width: 200px;
  display: flex;
  padding: 0px 20px;
  margin: 20px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 0 10px var(--lightGrey);
  color: var(--lightGrey);
  cursor: pointer;
}
</style>