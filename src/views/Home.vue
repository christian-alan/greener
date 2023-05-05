<template>
    <div class="flex justify-between flex-col h-full">
        <!-- Appbar -->
        <AppBarVue></AppBarVue>

        
        <!--Body -->
        <div class="h-full">
            <!--Greeting -->
            <h1 class="text-2xl font-bold p-4">Welcome back, <br> Rosanna</h1>
            <!--This week's banner -->
            <div class="w-full py-8 px-4 flex items-center justify-between" style="background-color:#CBDDD2;">
                <div>
                    <p>This week’s seasonal vegetable is</p>
                    <p class="font-bold">Beatroot</p>
                    <p class="text-sm underline opacity-30">Explore the fruit and more recipes⇒</p>
                </div>
                <div>
                    <img src=".././assets/images/beatroot.png" width="90" height="90" alt="beat root">
                </div>
            </div>


             <!--This month's Seasonal items -->
             <div class="w-full py-8 px-4 flex flex-col" style="background-color:#F1F4F2;">
           
                <p class="font-bold text-sm leading-5 mb-4">This months top seasonal items</p>
                <div class="card p-4 flex flex-row">
                    <img src=".././assets/images/apple.png" width="122" height="90" alt="beat root">
                    <div class="ml-2">
                        <p class="font-bold text-xl">Apple</p>
                        <p class="text-xs opacity-50">Type: Aroma</p>
                        <p class="text-xs opacity-50">origin: Sweden</p>
                        <button class="mt-5 btn-active w-full mr-2 text-xs">Explore seasonal foods</button>
                    </div>
                </div>
            </div>



             <!--This week's Recipes -->
             <div class="w-full py-8 px-4 flex items-center justify-between" style="background-color:#F1F4F2;">
                <div>
                    <p class="font-bold text-sm leading-5">Interested to know any <br> recipes  for seasonal foods</p>
                    <p class="text-sm underline opacity-30">We have an endless selection</p>
                     <button class="mt-5 btn-active w-full mr-2 text-xs">Find recipes here</button>
                </div>
                <div>
                    <img src=".././assets/images/recipe.png" width="90" height="90" alt="beat root">
                </div>
            </div>
        </div>

         

        <BottomBarVue></BottomBarVue>

    </div>
</template>
<script>
import AppBarVue from '../components/common/AppBar.vue';
import BottomBarVue from '../components/common/BottomBar.vue';
export default{
    components:{
        AppBarVue,
        BottomBarVue
    }
}
</script>
<style>
</style>