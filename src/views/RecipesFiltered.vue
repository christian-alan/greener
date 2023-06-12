<template>
 <div class="flex justify-between flex-col h-full common-container">
    
    <!-- Appbar -->
    <AppBarVue></AppBarVue>
    <div class="h-full common-container">
      <!-- Heading -->
      <div class="flex">
            <button @click="gotoRecipes()"> 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41424 12L16.7071 19.2929L15.2929 20.7071L6.58582 12L15.2929 3.29291L16.7071 4.70712L9.41424 12Z" fill="#151515"/>
                </svg>
            </button>
            <h1 ref="heading" class="text-2xl font-bold p-4">Recipes</h1>
            </div>
      <!-- Searchbar -->
      <div class="flex-col">
        <input type="text" placeholder="Search for recipes" class="placeholder-gray-400  outline-none  shadow-md rounded-full w-full px-10 py-3 my-2 with-icon">


      </div>

      <p class="pt-4 pb-3 text-lg font-semibold">Filters</p>

      

      <Filters></Filters>

      

      <p class="pt-4 pb-3 text-lg font-semibold">Recipes</p>

      <!-- <RecipeButton></RecipeButton> -->

    </div>

 </div>

 <BottomBarVue></BottomBarVue>


</template>

<script>

import AppBarVue from '../components/common/AppBar.vue';
import BottomBarVue from '../components/common/BottomBar.vue';
import Filters from '../components/recipe/Filters.vue';
// import RecipeButton from '../components/recipe/Recipe.vue'

export default {
    components:{
    AppBarVue,
    BottomBarVue,
    Filters,
  //  RecipeButton
  },

  methods:{
     gotoRecipes(){
        this.$router.push({path:"/recipes", name:'recipes'});
     }
    }

    
}
</script>

<style></style>

