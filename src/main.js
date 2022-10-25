import { createApp } from 'vue'
import App from './App.vue';
import 'animate.css';

import './assets/main.css';

import Nhacuana from './components/menu/Nhacuana.vue';
import Tolamaday from './components/menu/Tolanaday.vue';
import Vanconmay from './components/menu/Vanconmay.vue';

import Book from './components/work/Book.vue';
import Music from './components/work/Music.vue';
import Tale from './components/work/Tale.vue';
import Photography from './components/work/Photography.vue';

import Home from './Home.vue';
import { createRouter, createWebHistory } from 'vue-router'

// tập hợp những trang, mỗi trang sẽ đánh dấu đường dẫn
const routes = [
    {
        path: '/nhacuana',
        component: Nhacuana,
    },
    {
        path: '/tolanaday',
        component: Tolamaday,
    },
    {
        path: '/vanconmay',
        component: Vanconmay,
    },
    {
        path: '/home',
        component: Home,
    }
    ,
    {
        path: '/book',
        component: Book,
    },
    {
        path: '/music',
        component: Music,
    },
    {
        path: '/tale',
        component: Tale,
    }
    ,
    {
        path: '/photography',
        component: Photography,
    }
]


//điều hướng mình vào trang web nào
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

//Đưa router vào app
createApp(App).use(router).mount('#app')




