import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import log from '@/utils/logger'

const RouterLog = log.extend('VueRouter:')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/:id',
        name: 'Home',
        component: Home,
        props: ({ params, query }) => {
            RouterLog('params: %o', params)
            RouterLog('query: %o', query)
            return {
                id: params.id,
                page: +query.page
            }
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
