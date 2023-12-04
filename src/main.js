import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Login from './views/LandingView.vue';
import HomePage from './views/HomePage/HomePage.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: "/",
            component: Login
        },
        {
            path: "/home",
            component: HomePage
        }
    ],
});

app.use(router)

app.mount('#app')
