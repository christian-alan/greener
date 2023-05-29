import { createRouter, createWebHistory } from 'vue-router'

import Onboarding from '../views/Onboarding.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/onboarding",
            name:"onboarding",
            component:Onboarding
        },
        {
            path:"/learnMore",
            name:"learn-more",
            component:LearnMore
        },

        {
            path:"/",
            name:"home",
            component:Home
        },
        {
            path:"/login",
            name:"login",
            component:Login
        }

    ]
  });
export default router;
