import { createRouter, createWebHistory } from 'vue-router'

// TODO products ktery neexistuje prsmerovat pres beforeEnter pryc

const routes = [
    { path: '/', component: () => import('@/views/DefaultPage') },
    { path: '/about', component: () => import('@/views/DefaultPage') },
    { path: '/career', component: () => import('@/views/DefaultPage') },
    { path: '/locations', component: () => import('@/views/DefaultPage')},
    { path: '/store', component: () => import('@/views/StorePage') },
    { path: '/product/:id', component: () => import('@/views/ProductPage') },
    { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFoundPage') }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router