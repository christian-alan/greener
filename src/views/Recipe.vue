<template>
    <div class="flex justify-between flex-col h-full common-container">
      

        <div class="h-full common-container"> 
        <!-- Heading -->
        <div class="flex">
            <router-link to="/"> 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41424 12L16.7071 19.2929L15.2929 20.7071L6.58582 12L15.2929 3.29291L16.7071 4.70712L9.41424 12Z" fill="#151515"/>
                </svg>
            </router-link>
            <h1 ref="heading" class="text-2xl font-bold p-4">{{recipeName}}</h1>
            </div>

            <img :src="recipeUrl" class="object-fill  w-full mr-2" >
    <!-- ingredients -->         
    <p class="pt-4 pb-3 text-lg font-semibold">Ingredients</p>

        <div class="flex flex-col">
            <ul style="list-style:square inside;"> 
                <li v-for="ingredient in ingredients" :key="ingredient.id"> {{ ingredient }}
                </li> 
            </ul>
            
        </div>


    <!-- how to make -->         
    <p class="pt-4 pb-3 text-lg font-semibold">Instructions</p>

        <div class="flex flex-col">
            <ul style="list-style:square inside;" > 
                <li v-for="instruction in instructions" :key="instruction.id"> {{ instruction }}
                </li> 
            </ul>
            
        </div>
</div>



 

    </div>
  
  
  </template>
  
  <script>

  import {  db } from '../main.js';
  import { onValue,ref } from "firebase/database";
  import Storage from '../functions/storage.functions';
  
  
  
  export default {

    data(){
        return {
            recipeNumber:'',
            recipeData:[],
            recipePhoto:'',
            ingredients:[],
            recipeName:'',
            instructions:[],
            recipeUrl:''
    }},
    async created(){
        this.recipeNumber = this.$route.params.name;
        const starCountRef = ref(db, `recipe/${this.recipeNumber}`);
        onValue(starCountRef, (snapshot) => {
            
            this.recipePhoto = snapshot.val().photos;
            this.recipeName = snapshot.val().name;
            this.ingredients = snapshot.val().ingredients;
            this.instructions = snapshot.val().instructions;
       
        });

       this.recipeUrl = await Storage.getFoodImage(`recipes/${this.recipePhoto}`);
       console.log(this.recipeUrl);

    },
    meta: {
      requiresAuth: true, 
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