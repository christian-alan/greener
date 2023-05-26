<template>
    <div class="flex justify-between flex-col h-full common-container">
        <!-- Appbar -->
        <AppBarVue></AppBarVue>

        <!--Body -->
        <div class="h-full common-container">
            <h1 ref="heading" class="text-2xl font-bold p-4">Account</h1>

          <div class="card p-4 flex flex-row h-1/6 m-4" style="background-color: #E9EDF0">
            <div>
                <img src=".././assets/images/recipe.png" width="80" height="80" alt="beat root">
            </div>
            <p class="flex justify-center flex-col h-full items-center">My recipes</p>
          </div>

          <div class="card p-4 flex flex-row h-1/6 m-4 " style="background-color: #E9EDF0">
            <div>
            <img src=".././assets/images/gear.png" width="80" height="80">
            </div>
            <p class="flex justify-center flex-col h-full items-center">Settings</p>
          </div>

          <div class="card p-4 flex flex-row h-1/6 m-4" style="background-color: #E9EDF0">
            <div>
            <img src=".././assets/images/logout.png" width="80" height="80">
            </div>
            <p class="flex justify-center flex-col h-full items-center">Log out</p>
          </div>

        </div>

        <BottomBarVue></BottomBarVue>

    </div>
</template>
<script>
import AppBarVue from '../components/common/AppBar.vue';
import BottomBarVue from '../components/common/BottomBar.vue';
    export default{
        components:{
                AppBarVue,
                BottomBarVue
        },
    }

</script>
<style>
</style>