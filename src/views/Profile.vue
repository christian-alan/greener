<template>
    <div class="flex justify-between flex-col h-full common-container">
        <!-- Appbar -->
        <AppBarVue></AppBarVue>

        <!--Body -->
        <div class="h-full common-container">
          
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