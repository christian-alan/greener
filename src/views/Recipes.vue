<template>
  <div class="flex justify-between flex-col h-full common-container">
    
    <!-- Appbar -->
    <AppBarVue></AppBarVue>
    <div class="h-full common-container">
      <!-- Heading -->
      <h1 ref="heading" class="text-2xl font-bold p-4">Recipes</h1>
      <!-- Searchbar -->
      <div class="flex-col">
        <input type="text" placeholder="Search for recipes" class="placeholder-gray-400  outline-none  shadow-md rounded-full w-full px-10 py-3 my-2 with-icon">
          
        <!-- Filter -->
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

      </div>

        <!-- Explore Button -->
        <div class="flex justify-center items-center mt-3">
        <button class="bg-black text-white border-none rounded-md cursor-pointer flex items-center justify-center"> 
            <p>Find recipes!</p>
        </button>
        </div>

  </div>

  </div>

  <BottomBarVue></BottomBarVue>

</template>

<script>
import AppBarVue from '../components/common/AppBar.vue';
import BottomBarVue from '../components/common/BottomBar.vue';
import Ingredient from '../components/recipe/Ingredient.vue';
import IngredientWhite from '../components/recipe/IngredientWhite.vue';

    export default {
  components:{
    AppBarVue,
    BottomBarVue,
    Ingredient, 
    IngredientWhite
  },

  data() {
    return{
      ingredients:[
        'Fish',
        'Vegetables',
        'Meat',
        'Chicken',
        'Sausage',
        'Seafood',
        'Pasta',
        'Noodles',
        'Potato',
        'Bread'
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
  }

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