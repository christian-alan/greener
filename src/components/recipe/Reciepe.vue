<template>

<div class="flex justify-center ">

    <button class="bg-white rounded-3xl w-full h-40 flex items-center shadow-lg">
        <!-- <img src="src/assets/images/apple.png"> -->
        <img v-for="photos in recipe.photos" :src="photo" :key="photo" >
        <div class="flex flex-col items-start">
        <p class="font-bold ">  {{ recipe.name }}</p>
        <p >Keywords:</p>
        <div class="flex flex-wrap">
            <p v-for="keyword in recipe.keywords">{{keyword}} </p>
        </div>
        <p class="text-left text-sm"></p>
        </div>
        
       
    </button>
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

}
</script>
<style></style>