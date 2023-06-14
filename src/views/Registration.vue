<template>
  <div class="flex flex-col items-center justify-end h-1/6 ">
    <logo></logo>
  </div>

  <div class="flex flex-col items-center justify-center h-1/6 text-2xl">
    <p>Registration</p>
  </div>

  <div class="flex flex-col justify-center items-center h-2/5">

    <input type="text" placeholder="User name" class="txt-field-login" v-model="userName">
    <input type="text" placeholder="Create a password" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2" v-model="password">
   
  </div>

  <div class="flex flex-col justify-center items-center h-1/4">
    <button ref="createbtn" @click="createUser(userName,password)"  class="placeholder-white bg-black outline-none shadow-md rounded-full w-2/4 h-1/3 text-white">
      Create account
    </button>

    <router-link to="login" class="my-2">Log in</router-link>

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