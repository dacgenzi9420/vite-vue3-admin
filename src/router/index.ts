import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import { defineAsyncComponent } from 'vue'

const routes :RouteRecordRaw[]= [
    {
        path:'/',
        name:'login',
        component:defineAsyncComponent(()=>import('../views/login/index.vue'))
    },
    {
        path:'/main',
        name:'main',
        component:defineAsyncComponent(()=>import('../views/main.vue'))
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router