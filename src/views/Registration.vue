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

  
      <button ref="createbtn" @click="createUser(userName,password)"  class="bg-black mt-10 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 border border-blue-700 rounded-full">
        Create account
      </button>

      <router-link to="login" class=" my-4 underline">Back to Log in</router-link>

    </div>
    </div>
</div>
</template>
<script>
import logo from "../components/icons/Logo.vue";
import AuthGuard from "../functions/authentication";

export default{
  components:{
    logo
  },
  data(){
    return {
      userName:'',
      password:''
    }
  },
  methods:{
   async createUser(userName,password){ 
      await AuthGuard.createUser(this.userName, this.password);
      console.log("UserName Created");
      this.$router.push({name:'login'});
    }
  },
  meta: {
      requiresAuth: true, 
  },
}
</script>
<style>
</style>