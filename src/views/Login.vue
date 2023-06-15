<template>
  <div class="flex flex-col items-center h-full justify-between common-container ">
  
    <div class="flex flex-col items-center w-full mt-44">
    <!-- Intructions -->
    <logo></logo>
    <p class="mt-4 text-2xl">Log in</p>

    <!-- Form -->
    <div class="flex flex-col justify-center items-center mt-10 w-full px-10">

      <input type="text" placeholder="Username" v-model="userName" class="txt-field-login w-full  ">
      <input type="password" placeholder="Password" v-model="password" class="txt-field-login w-full ">
      <hr/>
      <button  @click="authenticateUser(userName,password)"  class="bg-black mt-10 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 border border-blue-700 rounded-full ">
          Login
      </button>
      <router-link class=" my-4 underline" to="/registration">Create an account</router-link>
    
    </div>
  </div>

   <router-link  class="w-full py-4 text-center bg-black text-white mb-10" to="/onboarding">Check the onboarding🗒️ >></router-link>
  
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
            userName: '',
            password: ''
        };
    },
    methods: {
     authenticateUser(userName,password){ 
          AuthGuard.authenticateUser(userName, password);
          this.$router.push({name:'home'});
      },

    }

}
</script>
<style>
</style>