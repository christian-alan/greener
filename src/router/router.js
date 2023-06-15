import { createRouter, createWebHistory } from 'vue-router';

import Onboarding from '../views/Onboarding.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Registration from '../views/Registration.vue';
import SeasonalFoods from '../views/SeasonalFoods.vue';
import LearnMore from '../views/LearnMore.vue';
import Profile from '../views/Profile.vue';
import RecipesListing from "@/views/RecipeListing.vue";
import FoodInfo from '../views/FoodInfo.vue';
import Recipe from '../views/Recipe.vue';
import AppShell from '../views/AppShell.vue';
import AuthGuard from '../functions/authentication';


const router = createRouter({
    mode: 'history',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/onboarding",
            name:"onboarding",
            component:Onboarding
        },
        {
            path:"/login",
            name:"login",
            component:Login
        },
        {
            path:"/registration",
            name:"registration",
            component:Registration
        },
        {
            path:"/",
            name:"appshell",
            component:AppShell,
            meta:{
                requiresAuth: true,
                 
            },
            children:[
               {
                    path:"/home",
                    name:"home",
                    component:Home,
                    meta:{
                        requiresAuth: true,
                        
                    }
                },
                {
                    path:"/profile",
                    name:"profile",
                    component:Profile,
                    meta:{
                        requiresAuth: true,
                         
                    }
                },
            ]
        },
      
        {
            path:"/seasonalFoods",
            name:"seasonal-foods",
            component:SeasonalFoods,
            meta:{
                requiresAuth: true,
                 
            }
        },
        { 
            path:"/learnMore",
            name:"learn-more",
            component:LearnMore,
            meta:{
                requiresAuth: true,
                 
            }

        },
        {
            path:"/recipe-listing",
            name:"recipes",
            component:RecipesListing,
            meta:{
                requiresAuth: true,
                 
            }
        },
        {
            path:"/recipe/:name",
            name:"recipe",
            component:Recipe,
            meta:{
                requiresAuth: true,
                 
            }
        },
        {
            path:"/food-info/:month/:food",
            name:"food-info",
            component:FoodInfo,
            meta:{
                requiresAuth: true,
                 
            }
        }
    ]
  });

  router.beforeEach(AuthGuard.authGuard);

export default router;
