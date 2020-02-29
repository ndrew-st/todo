import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Archive from '@/components/Archive.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/todo/',
        component: Main
    }, {
        path: '/todo/archive',
        component: Archive
    }]
})