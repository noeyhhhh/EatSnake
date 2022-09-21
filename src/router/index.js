// import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
// import App from '../App'
import layout from '../layout'
const routes = [
    {
        path: '/home',
        component: layout
    },
    {
        path: '/',
        redirect: '/home',
        component: layout
    },
    {
        path: '/hero',
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router