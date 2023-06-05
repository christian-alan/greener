<template>
    
    <div class="flex justify-between flex-col h-full common-container relative">
        <!-- Appbar -->
        <AppBarVue></AppBarVue>
    
    
        <!-- Body -->
        <div class="h-full flex flex-col common-container py-2">
            <!-- Heading and Description -->
            <div class="px-2">  
    
                <div class="flex flex-col">
                <router-link :to="'/'">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41424 12L16.7071 19.2929L15.2929 20.7071L6.58582 12L15.2929 3.29291L16.7071 4.70712L9.41424 12Z" fill="#151515"/>
                    </svg>
                </router-link>
                
                <div class="flex flex-row justify-between w-full items-center">
                    <h1 ref="heading" class="text-2xl font-bold ">Seasonal Foods</h1>

                    <router-link style="color:#34CB7C;" class="underline" to="/learnMore">learn more</router-link>
                </div>
            </div>
    
            </div>
    
            <!-- Recipe calendar -->
           <div class="w-full mt-4 h-full py-2 flex " style="max-height:700px">
            <!-- Catalog -->
                <div class="w-3/4 card mr-1 overflow-auto">  
                    <div class="grid grid-cols-3 p-4 gap-5 ">
                        <div class="flex flex-col justify-center items-center" v-for="image of images" :key="image.id">

                            <router-link :to="'/recipe/'">
                                <img ref="fruits" :src="image">
                            </router-link>
                            <p class="text-xs capitalize justify-center"></p>
                         </div>
                    </div>                  
                </div>

            <!-- Calendar -->
            <div class=" w-1/4 flex flex-col ml-2 justify-between h-full ">
                <!-- Individual cell -->
                <div class="absolute right-0 h-5/6 pb-8">
                    <div class="flex flex-col justify-between h-full ">
                        <button class="calendar-card py-2 text-sm px-6" @click="fetchImages(month)" v-for="month of months" :key="month.id">{{month}}</button>
                    </div>
                </div>
            </div>
        

           </div>
    
        </div>
    
        </div>


</template>
<script>
import AppBarVue from '../components/common/AppBar.vue';
import BottomBarVue from '../components/common/BottomBar.vue';
import getAllImages from '../functions/storage.functions';
import getAllFruitsByMonth from '../functions/db.functions';

export default{
components:{
    AppBarVue,
    BottomBarVue
},
methods:{
    gotoFruit(){
        this.$refs
    },
   async fetchImages(month){
        let i = 0;
        this.images = [];
        const pngs = await getAllImages(month);
        pngs.map((val)=>{
            val.then((v)=>{
                this.images[i] = v;
                i++;
            }) 
        });
    },

   
},
async created(){
    let i = 0;
    this.images = [];
    const pngs = await getAllImages("jan");
    pngs.map((val)=>{
        val.then((v)=>{
            this.images[i] = v;
            i++;
        }) 
    });
},
data(){
    return {
        selectedMonth:"jan",
        imageUrl: '', // Store the URL of the image
        images:[
            "apple",
            "beatroot",
            "grapes",
            "strawberries",
            "redcabbage",
            "apple",
            "beatroot",
            "grapes",
            "strawberries",
            "redcabbage",
            "apple",
            "beatroot",
            "grapes",
            "strawberries",
            "redcabbage",
            "apple",
            "beatroot",
            "grapes"
        ],
        months:[
            "jan",
            "feb",
            "mar",
            "apr",
            "may",
            "jun",
            "jul",
            "aug",
            "sep",
            "oct",
            "nov",
            "dec"
        ]
    }
}
}

</script>
<style></style>