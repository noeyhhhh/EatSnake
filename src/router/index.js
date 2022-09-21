// import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import App from '../App'
const constRoutes = [
    {
        path: '/',
        redirect: '/home',
        hidden: true
    },
    {
        path: '/home',
        name: '主页',
        component: () => import('@/pages/Home')
    },
    {
        path: '/hero',
        name: '英雄',
        component: () => import('@/pages/Hero')
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes: constRoutes,
})
export default router