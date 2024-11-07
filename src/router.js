import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import Show from './pages/Show.vue';


export const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home
        },
        {
            path: '/pokemon/{id}',
            name: 'show',
            component: Show
        }
    ]
})