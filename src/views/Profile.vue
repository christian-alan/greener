<template>
    <div class="flex justify-between flex-col h-full common-container">
       

        <!--Body -->
        <div class="h-full common-container">
            <h1 ref="heading" class="text-2xl font-bold p-4">Account</h1>

          <button @click="signOut()" class="card w-full flex items-center" style="background-color: #E9EDF0">
            <div>
            <img src=".././assets/images/logout.png" width="80" height="80">
            </div>
            <p class="flex justify-center flex-col h-full items-center">Log out</p>
          </button>

        </div>

    </div>
</template>
<script>
  import AuthGuard from "../functions/authentication";

   export default{
      meta: {
         requiresAuth: true, 
        },
      methods:{
        signOut(){
          AuthGuard.deauthenticateUser();

          this.$router.push('/login')
        }
      }  
    }

</script>
<style>
</style>