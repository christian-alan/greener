<template>
  <div class="flex justify-between flex-col h-full common-container">
    <AppBarVue></AppBarVue>
    <div class="h-full common-container">
      <!-- Heading -->
      <div class="flex">
            <router-link to="/home"> 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41424 12L16.7071 19.2929L15.2929 20.7071L6.58582 12L15.2929 3.29291L16.7071 4.70712L9.41424 12Z" fill="#151515"/>
                </svg>
            </router-link>
            <h1 ref="heading" class="text-2xl font-bold p-4">Recipes</h1>
            </div>
      <!-- Searchbar -->
      <div class="flex flex-col relative mb-5">
        <!-- <input type="text" placeholder="Search for recipes" class="placeholder-gray-400 outline-none  shadow-md rounded-full w-full px-10 py-3 my-2 with-icon" v-model="searchText"> -->
          <!-- <button class="absolute z-10 right-5 top-5" @click="filter = !filter">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="22" height="22" fill="#F8F8F8"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15119 2.89746C5.329 2.89746 5.47314 3.0416 5.47314 3.21941L5.47314 18.7804C5.47314 18.9582 5.329 19.1023 5.15119 19.1023C4.97338 19.1023 4.82924 18.9582 4.82924 18.7804L4.82924 3.21941C4.82924 3.0416 4.97338 2.89746 5.15119 2.89746Z" fill="#5C5C5C" stroke="#5C5C5C" stroke-width="0.3" stroke-linecap="round"/>
                  <path d="M6.97568 7.29753C6.97568 8.30512 6.15888 9.12193 5.15129 9.12193C4.14371 9.12193 3.3269 8.30512 3.3269 7.29753C3.3269 6.28995 4.14371 5.47314 5.15129 5.47314C6.15888 5.47314 6.97568 6.28995 6.97568 7.29753Z" fill="#F8F8F8"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15129 8.47802C5.80326 8.47802 6.33178 7.9495 6.33178 7.29753C6.33178 6.64557 5.80326 6.11705 5.15129 6.11705C4.49933 6.11705 3.97081 6.64557 3.97081 7.29753C3.97081 7.9495 4.49933 8.47802 5.15129 8.47802ZM5.15129 9.12193C6.15888 9.12193 6.97568 8.30512 6.97568 7.29753C6.97568 6.28995 6.15888 5.47314 5.15129 5.47314C4.14371 5.47314 3.3269 6.28995 3.3269 7.29753C3.3269 8.30512 4.14371 9.12193 5.15129 9.12193Z" fill="#5C5C5C"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2684 2.89746C11.4462 2.89746 11.5903 3.0416 11.5903 3.21941L11.5903 18.7804C11.5903 18.9582 11.4462 19.1023 11.2684 19.1023C11.0906 19.1023 10.9464 18.9582 10.9464 18.7804L10.9464 3.21941C10.9464 3.0416 11.0906 2.89746 11.2684 2.89746Z" fill="#5C5C5C" stroke="#5C5C5C" stroke-width="0.3" stroke-linecap="round"/>
                  <path d="M13.0926 14.0585C13.0926 15.0661 12.2758 15.8829 11.2682 15.8829C10.2607 15.8829 9.44385 15.0661 9.44385 14.0585C9.44385 13.0509 10.2607 12.2341 11.2682 12.2341C12.2758 12.2341 13.0926 13.0509 13.0926 14.0585Z" fill="#F8F8F8"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2682 15.239C11.9202 15.239 12.4487 14.7105 12.4487 14.0585C12.4487 13.4066 11.9202 12.878 11.2682 12.878C10.6163 12.878 10.0878 13.4066 10.0878 14.0585C10.0878 14.7105 10.6163 15.239 11.2682 15.239ZM11.2682 15.8829C12.2758 15.8829 13.0926 15.0661 13.0926 14.0585C13.0926 13.0509 12.2758 12.2341 11.2682 12.2341C10.2607 12.2341 9.44385 13.0509 9.44385 14.0585C9.44385 15.0661 10.2607 15.8829 11.2682 15.8829Z" fill="#5C5C5C"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7415 2.89746C16.9193 2.89746 17.0635 3.0416 17.0635 3.21941L17.0635 18.7804C17.0635 18.9582 16.9193 19.1023 16.7415 19.1023C16.5637 19.1023 16.4196 18.9582 16.4196 18.7804L16.4196 3.21941C16.4196 3.0416 16.5637 2.89746 16.7415 2.89746Z" fill="#5C5C5C" stroke="#5C5C5C" stroke-width="0.3" stroke-linecap="round"/>
                  <path d="M18.6732 8.58538C18.6732 9.59296 17.8564 10.4098 16.8488 10.4098C15.8412 10.4098 15.0244 9.59296 15.0244 8.58538C15.0244 7.57779 15.8412 6.76099 16.8488 6.76099C17.8564 6.76099 18.6732 7.57779 18.6732 8.58538Z" fill="#F8F8F8"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8488 9.76586C17.5008 9.76586 18.0293 9.23734 18.0293 8.58538C18.0293 7.93341 17.5008 7.40489 16.8488 7.40489C16.1968 7.40489 15.6683 7.93341 15.6683 8.58538C15.6683 9.23734 16.1968 9.76586 16.8488 9.76586ZM16.8488 10.4098C17.8564 10.4098 18.6732 9.59296 18.6732 8.58538C18.6732 7.57779 17.8564 6.76099 16.8488 6.76099C15.8412 6.76099 15.0244 7.57779 15.0244 8.58538C15.0244 9.59296 15.8412 10.4098 16.8488 10.4098Z" fill="#5C5C5C"/>
              </svg>
          </button> -->
      </div>

       <!-- Filter -->
       <div :class="filter ? 'visible' : 'hidden'">
            <p class="pt-4 pb-3 text-lg font-semibold">Ingredients</p>
              
              <div class="flex flex-wrap overflow-scroll gap-1">
              <IngredientWhite v-for="ingredient in ingredients" :key="ingredient.id" :buttonText="ingredient"></IngredientWhite>
              </div>

              <p class="pt-5 pb-3 text-lg font-semibold">Meal</p>
                
              <div class="flex flex-wrap overflow-scroll gap-1">
              <IngredientWhite v-for="meal in meals" :key="meal.id" :buttonText="meal"></IngredientWhite>
              </div>

              <p class="pt-5 pb-3 text-lg font-semibold">Special diet</p>

              <div class="flex flex-wrap overflow-scroll gap-1">  
              <IngredientWhite v-for="diet in diets" :key="diet.id" :buttonText="diet"></IngredientWhite>
              </div>

              <!-- Explore Button -->
              <div class="flex justify-center items-center mt-3">
              <button class="bg-black text-white border-none rounded-md cursor-pointer flex items-center justify-center w-1/2 h-10"> 
                  <p>Find recipes!</p>
              </button>
        </div>

      </div>

      <!-- Recipes -->
      <!-- <p class="pt-4 pb-3 text-lg font-semibold">Recipes</p> -->
     
      <ReciepeVue v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></ReciepeVue>



  </div>

  </div>


</template>

<script>
import Ingredient from '../components/recipe/Ingredient.vue';
import IngredientWhite from '../components/recipe/IngredientWhite.vue';
import ReciepeVue from '../components/recipe/Reciepe.vue';
import {  db } from '../main.js';
import { onValue,ref } from "firebase/database";
import Storage from '../functions/storage.functions';
import AppBarVue from '../components/common/AppBar.vue';


export default {
  components:{
    Ingredient, 
    IngredientWhite,
    ReciepeVue,
    AppBarVue,
  },
  async created(){
    // Calls the recipe data
    const starCountRef = ref(db, 'recipe');
    onValue(starCountRef, (snapshot) => {
      let i= 0;
      Promise.all(snapshot.val().map(async (val)  =>{
            val.photos = await Storage.getFoodImage(`recipes/${val.photos}`);
            val.id = i;
              i++;
            return val; 
        })).then((v) => {
          this.recipes = v;
          
        })
    
    });
  },
  meta: {
    requiresAuth: true, 
  },
  data() {
    return{
      recipes:[],
      searchText:'',
      filter:false,
      ingredients:[
        'Fish',
        'Vegetables',
        'Meat',
        'Chicken',
        'Sausage',
        'Seafood'
      ],  
       meals:[
       'Breakfast',
       'Starter',
       'Main course',
       'Dessert',
       'Snack'
      ],

      diets:[
        'Vegan',
        'Vegetarian',
        'Gluten free',
        'Lactose free',
        'Egg free'
      ]
    }
  },
  
}
</script>

<style>
.with-icon {
  padding-left: 40px;
  background-image: url('.././assets/images/search.png');
  background-repeat: no-repeat;
  background-position: 10px center;
}

</style>