<template>
    <div class="common-container flex flex-col h-full justify-between py-5">
        <!-- Progress component -->
        <div class="flex">
            <div class="progress" :class="progressStage===1?'progress-on':'progress-off'"></div>
            <div class="progress ml-2 mr-1" :class="progressStage===2?'progress-on':'progress-off'"></div>
            <div class="progress ml-1 mr-2" :class="progressStage===3?'progress-on':'progress-off'"></div>
            <div class="progress" :class="progressStage===4?'progress-on':'progress-off'"></div>
        </div>

        <!-- Content -->
        <InformationVue class="animate__slideOutLeft" v-if="progressStage===1" @click="onSwipe()"></InformationVue>
        <ScanVue class="animate__slideOutLeft" v-if="progressStage===2" @click="onSwipe()"></ScanVue>
        <RecipeVue class="animate__slideOutLeft" v-if="progressStage===3" @click="onSwipe()"></RecipeVue>
        <StandardsVue class="animate__slideOutLeft" v-if="progressStage>=4" @click="onSwipe()"></StandardsVue>


        <!-- CTAs -->
        <div class="flex justify-between ">
            <!-- <button class="btn-active w-full mr-2">Register</button>
            <button class="btn-inactive w-full ml-2">Login</button> -->

            <button  class="w-full" :class="progressStage<4?'btn-inactive':'btn-active'" v-on:click="gotoHome()">Goto home</button>
        </div>
    </div>
</template>
<script>
import InformationVue from "../components/onboarding/Information.vue";
import RecipeVue from "../components/onboarding/Recipe.vue";
import ScanVue from '../components/onboarding/Scan.vue';
import StandardsVue from '../components/onboarding/Standards.vue';
import 'animate.css';


export default{

    data(){
        return{
            progressStage:1,
            counter:1
        }
    },
    components:{
        InformationVue,
        ScanVue,
        StandardsVue,
        RecipeVue
    },
    methods:{
        stageCounter(){
            if(this.counter < 4){
                this.counter++;
                this.progressStage = this.counter;
            }else return;
        },
        gotoHome(){
            this.$router.push('/');
        },
        onSwipe(){
            console.log('onSwipe');
            if(this.counter < 4){
                this.counter++;
                this.progressStage = this.counter;
            }else return;
        }
    },
    async mounted(){

        // hammertime.on('swipe', (event) => {
        //     if (event.direction === Hammer.DIRECTION_RIGHT) {
        //         // handle right swipe
        //     } else if (event.direction === Hammer.DIRECTION_LEFT) {
        //         // handle left swipe
        //     }
        // });
    },
    async created(){
        
    }
}
</script>
<style scoped>

    .progress{     
        border-radius:10px;
        height:6px;
        width:100%;
    }
    .progress-on{
        background: #34CB7C;
   
    }
    .progress-off{
        background: #B9B9B9;
    }

    

</style>