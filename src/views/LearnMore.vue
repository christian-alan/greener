<template>

<div class="flex justify-between flex-col h-full common-container">

    <AppBarVue></AppBarVue>
    <!-- Body -->
    <div class="h-full common-container py-2">
        <!-- Heading and Description -->
        <div class="px-2">  

            <div class="flex">
            <router-link to="/seasonalFoods">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41424 12L16.7071 19.2929L15.2929 20.7071L6.58582 12L15.2929 3.29291L16.7071 4.70712L9.41424 12Z" fill="#151515"/>
                </svg>
            </router-link>
            

            <h1 ref="heading" class="text-2xl font-bold ">Learn more</h1>
            </div>

            <p>Eating seasonally based food has several benefits, here are some of them:</p>
        </div>


        <!-- Info points -->
        <div class="mt-6">
            <div class="flex items-center">
                <img src="src/assets/images/moneybag.png" width="80" height="80" alt="Bag of money">
                <p><b>It is cheaper</b> because the availability of the food is higher.</p>
            </div>

            <div class="flex items-center my-3">
                <img src="src/assets/images/badge.png" width="80" height="80" alt="Badge">
                <p><b>Quality and nutritional values are better</b> because the vegetables ripen on their own, this also requires less energy.</p>
            </div>

            <div class="flex items-center my-3">
                <img src="src/assets/images/fruitbowl.png" width="80" height="80" alt="Bowl of vegetables">
                <p><b>They have better flavour </b>since they're typically harvested at its peak ripeness.</p>
            </div>

            <div class="flex items-center my-3">
                <img src="src/assets/images/earth.png" width="80" height="80" alt="The Earth">
                <p><b>It is environmentally friendly</b> because seasonal foods grow locally and they don’t require long transportation or growth in a greenhouse which is energy-demanding. </p>

            </div>

            <div class="flex items-center">
                <img src="src/assets/images/checklist.png" width="80" height="80" alt="Checklist">
                <p><b>It creates variation in your diet</b> as different fruits and vegetables come into season at different times.</p>
            </div>
        </div>

        <!-- Explore Button -->
        <!-- <div style="display: flex; justify-content: center; align-items: center; margin-top: 3%;">
        <button style="background-color: black; color: white; width: 300px; height: 20px; padding: 20px 20px; border: none; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center"> 
            <p>Explore Seasonal Foods!</p>
        </button>
        </div> -->

    </div>

    </div>
</template>

<script>
import AppBarVue from '../components/common/AppBar.vue';

export default{
    components:{
        AppBarVue
    },
    meta: {
         requiresAuth: true, 
    },

}
</script>
<style></style>