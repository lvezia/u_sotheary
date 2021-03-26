<template>
  <div id="Profile">
    <LayoutDefault>
      <div class="gap"></div>
      <div class="p-4">
        <div class="row">
          <div class="col-md-4">
            <div class="card-profile">
              <div class="profilePictureContainer">
                <img :src="displayPicture(profile.profilePicture)" class="profilePicture" />
              </div>
              <h3 class="profileName">{{ profile.firstname }} {{ profile.lastname }}</h3>
              <p class="text-center color-first">{{ $t('profile.age', { age: profileAge } ) }}</p>
              <p class="text-center color-first">{{ profile.city }}, {{ profile.country }}</p>
              <a :href="profile.socialMedia.linkedin" class="text-center link-profile"><b-icon icon="linkedin" font-scale="2"></b-icon></a>
            </div>

            <div class="card-profile">
              <h3 class="color-first"><b>{{ $t('home.languages') }}</b></h3>
              <ul>
                <li>{{ $t('profile.khmer') }}</li>
                <li>{{ $t('profile.english') }}</li>
                <li>{{ $t('profile.vietnamese') }}</li>
              </ul>
            </div>

            <div class="card-profile">
              <p>{{ $t('profile.introduction') }}</p>
            </div>

            <div class="card-profile">
              <h3>{{ $t('profile.softwareSkills') }}</h3>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-profile">
              <h3 class="color-first"><b>{{ $t('profile.skills') }}</b></h3>
              <ul>
                <li v-for="(skill, i) in profile.skillsList" :key="i">{{ skill }}</li>
              </ul>
            </div>

            <div class="card-profile">
              <h3 class="color-first"><b>{{ $t('profile.experiences') }}</b></h3>
              <Timeline></Timeline>
            </div>
          </div>
        </div>

      </div>
    </LayoutDefault>
  </div>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import Timeline from '../components/Timeline'
import profileData from './datasetProfile.json'

export default {
  name: 'Profile',
  title: 'Profile - Ung Sotheary',
  components: {
    LayoutDefault,
    Timeline
  },
  computed: {
    profile() {
      return profileData.profile
    },
    profileAge() {
      let currentDate = new Date()
      let birthdate = new Date(this.profile.birthdate)
      let currentYear = currentDate.getFullYear()
      return currentYear - birthdate.getFullYear()
    }
  },
  methods: {
    displayPicture(img) {
      return require(`../assets/images/${img}`)
    }
  }
}
</script>

<style scoped>
.card-profile {
  margin: 5px 0 30px 0;
  padding: 20px 15px 10px 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px #CCCCCC;
}

.profilePictureContainer {
  overflow: hidden;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 0 auto 0 auto;
}

.profilePicture {
  width: 150px;
  height: 150px;
}

.profileName {
  margin-top: 10px;
  color: var(--firstColor);
  font-weight: bold;
  text-align: center;
}

.link-profile {
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 20px;
}
</style>