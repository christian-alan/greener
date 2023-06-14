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

    <input type="text" placeholder="Username" v-model="username" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2">
    <input type="password" placeholder="Password" v-model="password" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2">

  </div>

  <div class="flex flex-col justify-center items-center h-1/6">
    <button  @click="authenticateUser(userName,password)"  class="placeholder-white bg-black outline-none shadow-md rounded-full w-2/4 h-2/4 text-white">
        Login
    </button>

    <router-link class="my-2" to="/registration">Create an account</router-link>

  </div>



</template>

<script>
import logo from "../components/icons/Logo.vue";
import AuthGuard from "../functions/authentication";

export default{

  components:{
    logo
  },
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
     authenticateUser(userName,password){ 
          AuthGuard.authenticateUser(userName, password);
          console.log("UserName authenticated");
          this.$router.push({name:'/'});
      }
    }

}
</script>
<style>
</style>