<template>
    <div class="w-full h-full flex flex-col justify-between" >
        <!-- Appbar -->
        <AppBarVue></AppBarVue>
          <div class="overflow-y-auto overflow-x-hidden h-full relative">
            <RouterView></RouterView>
          </div>
        <!-- Bottom Bar -->
       <BottomBarVue></BottomBarVue>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router';

import AppBarVue from '../components/common/AppBar.vue';
import BottomBarVue from '../components/common/BottomBar.vue';


export default{
   components:{
      AppBarVue,
      BottomBarVue
    }
}
</script>

<style scoped>

</style>