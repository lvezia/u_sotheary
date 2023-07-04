import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import titleMixin from './mixins/titleMixin'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueParticles from 'particles.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import i18n from './utils/i18n'
import Home from './views/Home'
import Login from './views/Login'
import Dashboard from './views/admin/Dashboard'
import AdminProfile from './views/admin/Profile'
import AdminProject from './views/admin/Projects'
import Profile from './views/Profile'
import Projects from './views/Projects'
import ProjectDetails from './views/ProjectDetails'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueParticles)
Vue.use(VueAxios, axios)

Vue.mixin(titleMixin)

Vue.config.productionTip = false

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/projects/:id',
        name: 'ProjectDetails',
        component: ProjectDetails
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/admin/profile',
        name: 'AdminProfile',
        component: AdminProfile
    },
    {
        path: '/admin/projects',
        name: 'AdminProjects',
        component: AdminProject
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')