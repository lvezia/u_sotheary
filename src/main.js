import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import titleMixin from './mixins/titleMixin'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import i18n from './utils/i18n'
import Home from './views/Home'
import Profile from './views/Profile'
import Projects from './views/Projects'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

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
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')