<template>
  <div class="flex flex-col items-center justify-end h-1/6 ">
    <logo></logo>
  </div>

  <div class="flex flex-col items-center justify-center h-1/6 text-2xl">
    <p>Registration</p>
  </div>

  <div class="flex flex-col justify-center items-center h-2/5">

    <input type="text" placeholder="First name" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-4 py-3 my-2">
    <input type="text" placeholder="Last name" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2">
    <input type="text" placeholder="E-mail" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2">
    <input type="text" placeholder="Create a password" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2">
    <input type="text" placeholder="Type your password again" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2">

  </div>

  <div class="flex flex-col justify-center items-center h-1/4">
    <button  class="placeholder-white bg-black outline-none shadow-md rounded-full w-2/4 h-1/3 text-white">
      Create account
    </button>

    <p class="my-2">Log in</p>

  </div>


</template>
<script>
import logo from "../components/icons/Logo.vue"

export default{
  components:{
    logo
  }
}
</script>
<style>
</style>