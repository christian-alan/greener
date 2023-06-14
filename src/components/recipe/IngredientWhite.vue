<template>

    <div class="flex">
            <div>      
              <button v-if="showOriginalButton" @click="replaceButton" class="bg-white border-2 border-gray-300 p-2 rounded-full text-black font-bold pl-4 pr-4">{{ buttonText }}</button>
              <button v-else @click="replaceButton" class="bg-darkgreen border-2 border-white p-2 rounded-full text-white font-bold pl-4 pr-4">{{ buttonText }}</button>
           
            </div>
           </div>
           
    </template>

    <script>
    export default {
        props: {
            buttonText:String,
        },
        data(){
            return{
                showOriginalButton: true
            }
        },
        async created(){
        },

 
  methods: {
   replaceButton(){
    this.showOriginalButton = !this.showOriginalButton;
   }
  }

    }
    </script>

    <style></style>