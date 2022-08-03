import {createRouter, createWebHistory} from 'vue-router'
import DefaultPage from './views/DefaultPage'

// TODO lazy loading, dynamic linking

const routes = [
    {path:'/',component: DefaultPage},
    {path:'/about',component: DefaultPage},
    {path:'/career',component: DefaultPage},
    {path:'/career',component: DefaultPage},
    {path:'/locations',component: DefaultPage},
    {path:'/product/:id',component: () => import('@/views/ProductPage')},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router