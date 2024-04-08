// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import Add from './components/AddResturent.vue';
import Update from './components/UpdateResturent.vue';

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
    },
    {
        name: 'LogIn',
        component: Login,
        path: '/login'
    },
    {
        name: 'AddResturent',
        component: Add,
        path: '/add'
    },
    {
        name: 'UpdateResturent',
        component: Update,
        path: '/update'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
