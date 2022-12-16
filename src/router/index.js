/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";

import Home from '/src/components/PrincipalPagina.vue'
// import About from '/src/components/About.vue'
// import Products from '/src/components/Products.vue'
// import Todos from '/src/components/Todos.vue'

const routes = [
    {
        path: '/principal',
        name: 'Principal',
        component: Home,
    },
    {
        path: '/productos',
        name: 'Productos',
        component: () => import('/src/components/ProductosPagina.vue'), //lazy loaded
    },
    {
        path: '/lista',
        name: 'Lista',
        component: () => import('/src/components/ListaPagina.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('/src/components/Login.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router