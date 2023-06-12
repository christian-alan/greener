<template>
    <div class="flex justify-between flex-col h-full common-container">
        <!-- Appbar -->
        <AppBarVue></AppBarVue>

        <!--Body -->
        <div class="h-full common-container">
            <!--Greeting -->
            <h1 ref="heading" class="text-2xl font-bold p-4">Welcome back, <br> Rosanna</h1>


             <!-- Dummy -->
            <!-- <div class="flex w-full flex-col">
                <div>
                    <button class="bg-pink-500 rounded-md p-1 text-white" @click="changeText()">Change text</button>
                </div>
                <p ref="greeting">Hi</p>
            </div>  -->

            <!--This week's banner -->
            <div class="w-full py-8 px-4 flex items-center justify-between" style="background-color:#E0E0E0;">
                <div>
                    <p class="text-sm">This week’s seasonal 
                        vegetable is <span class="text-sm font-bold">Beetroot</span>
                    </p>

                    <p class="text-sm underline opacity-30">Explore receipes⇒</p>
                </div>
                <div>
                    <img src=".././assets/images/beatroot.png" width="100" height="100" alt="beat root">
                </div>
            </div>


             <!--This month's Seasonal items -->
             <div class="w-full py-4 px-4 flex flex-col" style="background-color:#F1F4F2;">
           
                <p class="font-bold text-sm leading-5 mb-4">This months top seasonal items</p>
                <div class="card p-4 flex flex-row">
                    <div class="overflow-hidden relative flex flex-row w-1/2">
                        <img v-if="counter === 0" class="slide absolute top-0" src="src/assets/images/apple.png" width="122" height="90" alt="apple">
                        <img v-if="counter === 1" class="slide absolute top-0" src="src/assets/images/grapes.png" width="122" height="90" alt="grapes">
                        <img v-if="counter === 2" class="slide absolute top-0 " src="src/assets/images/strawberries.png" width="122" height="90" alt="strawberries">
                        <img v-if="counter === 3" class="slide absolute top-0 " src="src/assets/images/beatroot.png" width="122" height="90" alt="strawberries">
                    </div>

                    <div class="ml-2 w-1/2">
                        <p  class="font-bold text-xl">{{counter === 0 ? 'Apple' : counter === 1 ? 'Grapes' : counter === 2 ? 'Strawberry' : 'Beatroot' }}</p>
                        <p class="text-xs opacity-50">Type: Aroma</p>
                        <p class="text-xs opacity-50">origin: Sweden</p>
                        <button class="mt-5 btn-active w-full mr-2 text-xs" @click="gotoLearnMore()" >Explore foods</button>
                    </div>
                </div>
            </div>

            <!--This week's Recipes -->
             <div class="w-full py-8 px-4 flex items-center justify-between" style="background-color:#CBDDD2;">
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
    },
    methods:{
     gotoLearnMore(){
        this.$router.push({path:"/seasonalFoods", name:'seasonal-foods'});
        console.log('hey');
     },
     animateFruits(){
            setInterval(() =>{ 
                this.counter++; 
                if(this.counter === 4){
                    this.counter = 0;
                }
            },2000)
        },
        changeText(){
            this.element.innerText = "Hey Hows it going!"
            this.heading.innerText = "Hey Alan, hope you are doing well";
        }
     },
   mounted(){
    this.animateFruits();
      this.element = this.$refs.greeting;
      this.heading = this.$refs.heading; 
    },
    data(){
        return {
            heading:"",
            element: "",
            showFruits:"apple.png",
            counter:0,
        }
    }
 
}
</script>
<style>


.slide {
    animation: slideAnimation 2s infinite; /* Adjust the animation duration as needed */
  }

@keyframes slideAnimation {
    0% {
      transform: translateX(-100%);
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      transition-duration: 800ms;
    }
    50% {
      transform: translateX(0%);

    }
    100% {
      transform: translateX(200%);
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      transition-duration: 50ms;
    }
  }
</style>