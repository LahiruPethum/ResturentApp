// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/Home.vue';
import SignUp from './components/SignUp.vue';

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
