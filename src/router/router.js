import { createRouter, createWebHistory } from 'vue-router'

import Onboarding from '../views/Onboarding.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name:"onboarding",
            component:Onboarding
        }
    ]
  });
export default router;