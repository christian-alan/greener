<template>

  <div class="flex flex-col items-center justify-end h-1/4 ">
    <!-- Intructions -->
    <!-- 0. To access this component use the link: http://localhost:5173/login -->
    <!-- 1. Add the logo. Use the SVG version. I have created the component for the logo. With this approach the logo has been turned into a reusable component. -->
    <logo></logo>

    <!-- 2. Add the text and the text boxes -->
    <!-- 3. Add the button -->
  </div>

  <div class="flex flex-col items-center justify-center h-1/6 text-2xl">
    <p>Log in</p>
  </div>

  <div class="flex flex-col justify-center items-center h-1/4">

    <input type="text" placeholder="E-mail" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2">
    <input type="text" placeholder="Password" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2">

  </div>

  <div class="flex flex-col justify-center items-center h-1/6">
    <button  class="placeholder-white bg-black outline-none shadow-md rounded-full w-2/4 h-2/4 text-white">
      Continue
    </button>

    <p class="my-2">Create an account</p>

  </div>



</template>
<script>
import logo from "../components/icons/Logo.vue"

export default{

  components:{
    logo
  },

    data(){
        return {
            id:0,
            newTodo:'',
            todos:[
                {
                    id:this.id++,
                    text:'hey'
                }
            ]
        }
    },
    methods:{
        addTodo(){
            console.log(this.newTodo);
            this.todos.push({id:this.id++,text:this.newTodo});
        },
        removeTodo(){

        }
    },
    async created(){
        
    }

}
</script>
<style>
</style>