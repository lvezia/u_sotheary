<template>
  <div id="ProjectDetails">
    <LayoutDefault>
      <div class="gap">
          <!-- Left column::Project Details -->
          <div class="details-container d-flex">
            <div class="col-md-3 col-left-details">
              <h1>{{ projectDetails.name }}</h1>
              <h4 class="mt-4">{{ $t('project.location') }}</h4>
              <span>{{ projectDetails.location }}</span>

              <h4 class="mt-4">{{ $t('project.date') }}</h4>
              <span>{{ projectDetails.date }}</span>

              <h4 class="mt-4">{{ $t('project.area') }}</h4>
              <span>{{ projectDetails.area }}</span>

              <h4 class="mt-4">{{ $t('project.description') }}</h4>
              <span>{{ projectDetails.description }}</span>
            </div>

            <!-- Right column::Project Media -->
            <div class="col-md-9 col-right-details">
              <div v-for="index in 3" :key="index" class="col-animation img-container">
                <img
                  v-if="getImgSrc(projectDetails.mainImage)"
                  class="d-block img-fluid w-100 h-auto img-project"
                  :src="getImgSrc(projectDetails.mainImage)"
                  alt="image slot"
                >
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
  name: 'ProjectDetails',
  data() {
    return {
      projectID: null,
      projectDetails: null
    }
  },
  computed: {
    projects() {
      return projectsData.projects
    }
  },
  methods: {
    initProject() {
      this.projectID = this.$route.params.id
      this.projectDetails = projectsData.projects.find(obj => obj.id === this.projectID)
    },
    getImgSrc(img) {
      console.log('Img: ', img)
      if (img) {
        return require(`../assets/images/${img}`)
      }
      return null
    }
  },
  created() {
    this.initProject()
  }
}
</script>

<style scoped>
.details-container {
  padding: 0.5rem 1rem;
  overflow: hidden;
  height:100%;
}

.col-left-details {
  margin-top: 70px;
  position: absolute;
  overflow-y: scroll;
  top: 0px;
  bottom: 0;
  left: 0;
}

.col-right-details {
  margin-top: 70px;
  position: absolute;
  overflow-y: scroll;
  top: 0px;
  bottom: 0;
  right: 0;
}

.img-container {
  padding: 10px 0
}

.img-project {
  border-radius: 5px;
}

@media only screen and (max-width: 767px) {
  .details-container {
    flex-direction: column;
  }

  .col-left-details {
    margin-top: 0;
    position: relative;
  }

  .col-right-details {
    margin-top: 0;
    position: relative;
  }
}
</style>