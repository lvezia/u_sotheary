<template>
  <div id="Projects">
    <LayoutDefault>
      <div class="gap">
        <div class="container pt-4">
          <div class="row">
            <div class="col-md-4 pb-4 col-animation"
              v-for="(project, index) in projects"
              :key="index" 
              @mouseenter="isMouseOnProject = index" 
              @mouseleave="isMouseOnProject = null"
              v-on:click="linkToProjectDetails(project.id)"
            >
              <img
                class="d-block img-fluid w-100 h-auto card-img"
                :src="getImgSrc(project.mainImage)"
                alt="image slot"
              >
              <div class="hover-project">
                <h3 class="title-project" :class="{ 'title-animation': isMouseHover(index) }">{{ project.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDefault>
  </div>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import projectsData from './datasetProject.json'

export default {
  components: { LayoutDefault },
  name: 'Projects',
  data() {
    return {
      isMouseOnProject: null
    }
  },
  computed: {
    projects() {
      return projectsData.projects
    }
  },
  methods: {
    getImgSrc(img) {
        return require(`../assets/images/${img}`)
    },
    isMouseHover(index) {
      return index === this.isMouseOnProject
    },
    linkToProjectDetails(index) {
      this.$router.push({ name: 'ProjectDetails', params: { id: index} })
    }
  }
}
</script>

<style scoped>
.card-img {
  border-radius: 5px;
}

.title-project {
  color: #fff;
  margin-top: auto;
  margin-bottom: auto;
  cursor: default;
}

.title-animation {
  position: relative;
  animation: fadeIn ease 1s;
}

.hover-project {
  position: absolute;
  top: 0rem;
  width: calc(100% - 30px);
  height: calc(100% - 1.5rem);
  background: rgba(14, 40, 55, 0.5);
  border-radius: 5px;
  display: flex;
  align-content: center;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;
}

.hover-project:hover {
  opacity: 1;
}
</style>