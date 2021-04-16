<template>
  <div id="ProjectDetails">
    <LayoutDefault>
      <div class="gap">
        Details {{ projectID }}
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
      projectID: null
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
    }
  },
  created() {
    this.initProject()
  }
}
</script>

<style scoped>
</style>