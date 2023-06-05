<template>
  <div class="flex justify-between flex-col h-full common-container">
    
    <!-- Appbar -->
    <AppBarVue></AppBarVue>
    <div class="h-full common-container">
      <h1 ref="heading" class="text-2xl font-bold p-4">Recipes</h1>
      <div class="flex-col">
        <input type="text" placeholder="Search for recipes" class="placeholder-gray-400  outline-none  shadow-md rounded-full w-full px-10 py-3 my-2 with-icon">
      </div>

      <div class="flex">
        <div>      
          <p class="bg-darkgreen border-2 border-white p-2 rounded-full text-white font-bold pl-4 pr-4">This month</p>
        </div>
       </div>
       <!-- if pressed -> bg-darkgreen and border-grey -->
    
  
  
  </div>



   

    <BottomBarVue></BottomBarVue>

  </div>
</template>

<script>
import AppBarVue from '../components/common/AppBar.vue';
import BottomBarVue from '../components/common/BottomBar.vue';

    export default {
  components:{
    AppBarVue,
    BottomBarVue
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