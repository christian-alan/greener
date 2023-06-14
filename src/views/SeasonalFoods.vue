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

                    <router-link style="color:#34CB7C;" class="underline" to="/learnMore">learn more ᐳᐳ</router-link>
                </div>
            </div>
    
            </div>
    
            <!-- Recipe calendar -->
           <div class="w-full mt-4 h-full py-2 flex " style="max-height:700px">
            <!-- Catalog -->
                <div class="w-3/4 card mr-1 overflow-auto" :class="loading ? 'flex flex-col justify-center items-center' : ''">  
                    <span v-if="loading" class="loader"></span>
                    <div class="grid grid-cols-3 p-4 gap-5 ">
                        <div class="flex flex-col justify-center items-center" v-for="image of images" :key="image.id">
                           
                            <router-link :id="image.id" :to="`/food-info/${image.month}/${image.name}`" class="h-10 w-10">
                                <img ref="fruits"  :src="image.url" width="40" height="40">
                            </router-link>
                            <p class="text-xs capitalize justify-center">{{image.name}}</p>
                         </div>
                    </div>                  
                </div>

            <!-- Calendar -->
            <div class=" w-1/4 flex flex-col ml-2 justify-between h-full ">
                <!-- Individual cell -->
                <div class="absolute right-0 h-5/6 pb-8">
                    <div class="flex flex-col justify-between h-full " >
                        <div @click="fetchImages(month.name)" v-for="month of months" class="relative flex justify-center items-center" :key="month.id" >
                            <input  class="calendar-radio" type="radio"  name="months" :id="month.name" :value="month.name" v-model="pickMonth"/>
                            <label class="capitalize text-sm calendar-radio-label" :for="month.id">{{month.name}}</label>
                        </div>
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
import Storage from '../functions/storage.functions';

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
    this.loading = true;
        let i = 0;
        this.images = [];
        const pngs = await Storage.getAllImages(month);
        pngs.map((val)=>{
            val.then((v)=>{
                this.images[i] = {
                    url:v.url,
                    name:v.name,
                    month:month
                };
                i++;
            }) 
        });
    this.loading = false;
    },

   
},
async created(){
    let i = 0;
    this.images = [];
    const pngs = await Storage.getAllImages("jan");
    pngs.map((val)=>{
        val.then((v)=>{
            this.images[i] = {
                    url:v.url,
                    name:v.name,
                    month:"jan"
                };

            i++;
        }) 
    });
    this.loading = false;
},
data(){
    return {
        selectedMonth:"jan",
        imageUrl: '', // Store the URL of the image
        images:[],
        pickMonth:'',
        loading:true,
        months:[
            {
                name:"jan",
                id:0
            },
            {
                name:"feb",
                id:1
            },
            {
                name:"mar",
                id:2
            },
            {
                name:"apr",
                id:3
            },
            {
                name:"may",
                id:4
            },
            {
                name:"jun",
                id:5
            },
            {
                name:"jul",
                id:6
            },
            {
                name:"aug",
                id:7
            },
            {
                name:"sep",
                id:8
            },
            {
                name:"oct",
                id:9
            },
            {
                name:"nov",
                id:10
            },
            {
                name:"dec",
                id:11
            }        
        ]
    }
}
}

</script>
<style>

.calendar-radio{
    position: absolute;
    right: 0px;
    width:80px;
    height:35px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    z-index: -1;
    appearance: none;
    background-color: #fff;
    box-sizing: border-box;
    background: #E9EDF0;
    border: 0.5px solid #FEFEFF;
    box-shadow: 10px 10px 24px rgba(166, 180, 200, 0.7), -12px -12px 20px rgba(255, 255, 255, 0.8);
}

.calendar-radio-label{
    padding-right:10px;
}

 /****************************************************************/
 /****************************************************************/
 /****************************************************************/
 /****************************************************************/
 /****************************************************************/
 /****************************************************************/
 /****************************************************************/
 .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #445E72;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 



</style>