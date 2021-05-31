<template>
  <div id="AdminProjects">
    <LayoutDefault>
  
      <div class="admin-container">
        <Sidebar></Sidebar>
      
        <div class="content-container">
          <div class="custom-card" v-on:click="redirectTo('AdminProjects')">
            <h2>{{ $t('home.projects') }}</h2>
            <div class="row-project" v-for="(project, index) in projects" :key="index">
              <div class="col-sm-4">
                <h4 class="itm-project">{{ project.name }}</h4>
              </div>
              <div class="col-sm-2">
                <p class="itm-project">{{ project.location }}</p>
              </div>
              <div class="col-sm-2">
                <p class="itm-project">{{ project.area }}</p>
              </div>
              <div class="col-sm-2">
                <p class="itm-project">{{ dateFormat(project.date) }}</p>
              </div>
              <div class="col-sm-2">
                <button class="itm-project btn-project">{{ $t('home.details') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </LayoutDefault>
  </div>
</template>

<script>
import LayoutDefault from '../../layouts/LayoutDefault'
import Sidebar from '../../layouts/Sidebar'
import DateFormat from '../../mixins/dateFormat'
import projectsData from '../datasetProject.json'

export default {
  name: 'AdminProjects',
  title: 'Projects',
  components: { LayoutDefault, Sidebar },
  mixins: [DateFormat],
  computed: {
    projects() {
      return projectsData.projects
    }
  },
  methods: {
    redirectTo(pathName) {
      this.$router.push({ name: pathName })
    },
    linkToProjectDetails(index) {
      this.$router.push({ name: 'ProjectDetails', params: { id: index} })
    }
  }
}
</script>

<style scoped>
#AdminProjects {
  min-height: 100vh;
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

.row-project {
  display: flex;
  flex-wrap: wrap;
}

.itm-project {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-project {
  color: var(--lightGrey);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 5px 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.btn-project:hover {
  box-shadow: 0 0 15px #fff
}
</style>