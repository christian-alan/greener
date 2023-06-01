<template>

    <div class="flex justify-between flex-col h-full common-container">
        <!-- Appbar -->
        <AppBarVue></AppBarVue>
    
        <!-- Body -->
        <div class="h-full common-container">

            <!-- Heading and Description -->
            <div class="px-2">  
                
                <div class="flex">
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41424 12L16.7071 19.2929L15.2929 20.7071L6.58582 12L15.2929 3.29291L16.7071 4.70712L9.41424 12Z" fill="#151515"/>
                        </svg>
                    </button>

                    <h1 ref="heading" class="text-2xl font-bold ">Cauliflower ECO</h1>
                </div>

                 <!-- Info -->
                <div class="flex gap-5">
                    <img src="src/assets/images/cauliflower.png" alt="Cauliflower" class="border border-white rounded-2xl shadow-2xl self-center">
                    <div class="flex flex-col mt-4 mb-4">
                        <p>Origin country: [Country]</p>
                        <br>
                        <p><b>In season: [Month]</b></p>
                        <br>
                        <p><b>[Prize] kr/kg</b></p>
                    </div>
                </div>

                 <!-- In season sign -->

                <div class="parent h-64 bg-gray-200 relative" style="background-color: #34CB7C; height: 70px;">
                    <p class="text-white font-bold text-center pt-3 text-lg">Cauliflower is in season now!</p>   
                    
                 <!-- Triangle  -->

                    <div class="flex child absolute bottom-0">
                        <triangle v-for="triangle in triangles" :key="triangle.id" />
                    </div>
                </div> 

                <!-- Explore Recipes -->

                <div style="background-color: #f1f4f2;" class="flex justify-center shadow-lg mt-5 rounded-lg h-50">
                    <div class="flex flex-col justify-center gap-2 pl-4">
                        <p class="font-bold pt-">Explore recipes with [name of product]</p>

                        <button class="bg-black text-white text-sm w-40 h-10 rounded-md text-center">
                        <p>Find recipes here!</p>
                        </button>
            
                    </div>

                    <img src="src/assets/images/recipebook.png">

                </div>
                <!-- Sustainability Standards -->

                <h1 ref="heading" class="text-2xl font-bold mt-6 mb-4">Sustainability standards</h1>
                
                <!-- Sustainability Standards -->
               
                <div class="flex items-center">
                    <img src="src/assets/images/keyhole.png" width="50" height="50" alt="Keyhole">
                    <p class="text-lg font-bold">The Keyhole [change name from database]</p>
                </div>
      
                <p>{{ isTextVisible ? `${fullText.slice(0,50)}...` : fullText  }} 
                    <button @click="isTextVisible = !isTextVisible" class="underline mb-4">
                        {{ isTextVisible ? 'Read More' : 'Read Less'  }}
                    </button>
                </p>
                
                <div style="display: flex; align-items: center;">
                    <img src="src/assets/images/euecological.png" width="50" height="50" alt="EU Ecological">
                    <p class="text-lg font-bold">EU Ecological</p>
                </div>

                <p>{{ isTextVisible1 ? `${fullText1.slice(0,50)}...` : fullText1  }} 
                    <button @click="isTextVisible1 = !isTextVisible1" class="underline">
                        {{ isTextVisible1 ? 'Read More' : 'Read Less'  }}
                    </button>
                </p>

            </div>

        </div>

    </div>
   

    </template>

    <script>

    import AppBarVue from '../components/common/AppBar.vue';
    import Triangle from '../components/triangles/Triangle.vue';

    export default{
        components:{
            AppBarVue,
            Triangle
            
  },
  data() {
    return {
      triangles: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
      ],

      buttonText: "Read more",
      fullText: "This product is marked by the Keyhole, which means that it contain less sugars and salt, more fibre and wholegrain and healthier or less fat than food products of the same type that can not be labelled with the Keyhole.",
      isTextVisible: true,
      fullText1: "This product has been certified as organic by an authorised control agency or body. This means that the product has passed strict conditions on how it must be produced, processed, transported and stored. The product contain at least 95% organic ingredients and additionally, respect further strict conditions for the remaining 5%. Read more.",
      isTextVisible1: true,

    };
    
  }

}


    </script>

    <style>


</style>

