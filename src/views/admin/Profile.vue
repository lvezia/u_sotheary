<template>
  <div id="AdminProfile">
    <LayoutDefault>
  
      <div class="admin-container">
        <Sidebar></Sidebar>
      
        <div class="content-container">
          <div class="custom-card">
            <h2>{{ $t('home.profile') }}</h2>
            <form>
              <div class="user-field">
                <input type="text" name="" required="true">
                <label>{{ $t('login.email') }}</label>
              </div>
              <div class="user-field">
                <input type="password" name="" required="true">
                <label>{{ $t('login.password') }}</label>
              </div>
            </form>
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
  name: 'AdminProfile',
  title: 'Profile',
  components: { LayoutDefault, Sidebar },
  methods: {}
}
</script>

<style scoped>
#AdminProfile {
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
  display: flex;
  flex-direction: column;
  background-color: var(--lightGrey);
  width: 100%;
  height: fit-content;
  padding: 20px 20px;
  margin: 20px 20px;
  border-radius: 10px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 0 10px var(--lightGrey);
  color: var(--lightGrey);
}

.custom-card h2 {
  padding: 0 0 20px 0;
}
</style>