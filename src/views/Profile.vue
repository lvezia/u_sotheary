<template>
  <div id="Profile">
    <LayoutDefault>
      <div class="gap"></div>
      <div class="container pt-4">
        <div class="row">
          <div class="col-md-4">
            <!-- PROFILE CARD  -->
            <transition appear name="fade-in">
              <div class="card-profile">
                <div class="profilePictureContainer">
                  <img :src="displayPicture(profile.profilePicture)" class="profilePicture" />
                </div>
                <h3 class="profileName">{{ profile.firstname }} {{ profile.lastname }}</h3>
                <p class="text-center color-first">{{ $t('profile.age', { age: profileAge } ) }}</p>
                <p class="text-center color-first">{{ profile.city }}, {{ profile.country }}</p>
                <a :href="profile.socialMedia.linkedin" class="text-center link-profile color-second"><b-icon icon="linkedin" font-scale="2"></b-icon></a>
              </div>
            </transition>

            <!-- LANGUAGES  -->
            <transition appear name="fade-in">
              <div class="card-profile">
                <h3 class="color-first"><b>{{ $t('home.languages') }}</b></h3>
                <ul class="pl-0">
                  <li class="lang-progress">
                    {{ $t('profile.khmer') }}
                    <b-progress :max="5" variant="second" class="mb-3">
                      <b-progress-bar :value="5">
                        <span>{{ $t('profile.native') }}</span>
                      </b-progress-bar>
                    </b-progress>
                  </li>
                  <li class="lang-progress">
                    {{ $t('profile.english') }}
                    <b-progress :max="5" variant="second" class="mb-3">
                      <b-progress-bar :value="4">
                        <span>{{ $t('profile.businessFluent') }}</span>
                      </b-progress-bar>
                    </b-progress>
                  </li>
                  <li class="lang-progress">
                    {{ $t('profile.vietnamese') }}
                    <b-progress :max="5" variant="second" class="mb-3">
                      <b-progress-bar :value="3">
                        <span>{{ $t('profile.businessFluent') }}</span>
                      </b-progress-bar>
                    </b-progress>
                  </li>
                </ul>
              </div>
            </transition>

            <!-- INTRODUCTION  -->
            <transition appear name="fade-in">
              <div class="card-profile">
                <p>{{ $t('profile.introduction') }}</p>
              </div>
            </transition>

            <!-- SOFTWARES  -->
            <transition appear name="fade-in">
              <div class="card-profile">
                <h3>{{ $t('profile.softwareSkills') }}</h3>
                <ul class="">
                  <li v-for="(sftw, i) in profile.softwareList" :key="i" class="">{{ sftw.name }}</li>
                </ul>
              </div>
            </transition>
          </div>

          <div class="col-md-8">
            <!-- SOFT SKILLS  -->
            <transition appear name="fade-in-right">
              <div class="card-profile">
                <h3 class="color-first"><b>{{ $t('profile.skills') }}</b></h3>
                <ul>
                  <li v-for="(skill, i) in profile.skillsList" :key="i">{{ skill }}</li>
                </ul>
              </div>
            </transition>

            <!-- TIMELINE  -->
            <transition appear name="fade-in-right">
              <div class="card-profile">
                <h3 class="color-first"><b>{{ $t('profile.experiences') }}</b></h3>
                <Timeline></Timeline>
              </div>
            </transition>
            
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
  background-color: #fff;
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

.lang-progress {
  list-style: none;
}

..progress {
  background-color: var(--lightGrey);
}
</style>