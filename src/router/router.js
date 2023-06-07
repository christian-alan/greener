import { createRouter, createWebHistory } from 'vue-router'
import Onboarding from '../views/Onboarding.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Registration from '../views/Registration.vue';
import SeasonalFoods from '../views/SeasonalFoods.vue';
import LearnMore from '../views/LearnMore.vue';
import Profile from '../views/Profile.vue';

import Recipe from '../views/Recipe.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/onboarding",
            name:"onboarding",
            component:Onboarding
        },
        {
            path:"/profile",
            name:"profile",
            component:Profile
        },

        {
           path:"/recipe",
           name:"recipe",
           component:Recipe
        },
        {
            path:"/seasonalFoods",
            name:"seasonal-foods",
            component:SeasonalFoods
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
        },
        {
            path:"/Registration",
            name:"registration",
            component:Registration
        },

    ]
  });
export default router;
