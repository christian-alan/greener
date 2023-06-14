<template>

<div class="flex justify-center ">

    <div class="bg-white mb-5 rounded-3xl w-full p-5 flex  shadow-lg">
        <!-- <img src="src/assets/images/apple.png"> -->
            <img :src="recipe.photos" class="object-fill  w-24 h-24 mr-2" >

        <div class="flex flex-col items-start">
            <p class="font-bold capitalize text-left">  {{ recipe.name }}</p>
            <div class="flex flex-wrap">
                <p class="font-normal mr-2 text-sm opacity-50" v-for="keyword in recipe.keywords" :key="keyword.id">{{keyword}}</p>
            </div>
            <button class="mt-1 px-2 py-2 font-semibold text-xs bg-cyan-500 text-white rounded-full shadow-sm" @click="takeToRecipe(recipe.id,recipe.photos)">Check recipe</button>
         
        </div>
        
       
    </div>
</div>

<div>
      
   
  </div>

</template>
<script>
export default{
    async created(){
      
    },
    props: {
        recipe:[]
    },
    methods:{
        takeToRecipe(recipe,url){
            this.$router.push(`/recipe/${recipe}`);
        }  
    }

}
</script>
<style></style>