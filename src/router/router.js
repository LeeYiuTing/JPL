import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import '../views/Japanese/JpLearnSetOption.vue'

const routes = [
    {path: '/', component: () => import('../views/Japanese/JpLearnSetOption.vue')},
    {path: '/jpLearnSet', component: () => import('../views/Japanese/JpLearnSetOption.vue')},
    {path: '/jpLearnTY', component: () => import('../views/Japanese/jpLearnTY.vue')},
    {path: '/jpLearnTX', component: () => import('../views/Japanese/jpLearnTX.vue')},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;


