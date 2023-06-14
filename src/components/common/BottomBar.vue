<template>
    <div class="w-full border-t-slate-400 relative flex py-4 px-12 justify-between " style="border-top:0.5px solid">

        <!-- Home -->
        <div class="flex flex-col rounded-full h-12 w-16 justify-center items-center relative" @click="gotoHome()" v-bind:style="getCurrentRoute === '/' ? 'background-color:#34CB7C50;':''">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.386 20H4.61395C2.06512 20 0 17.9233 0 15.3717V8.47115C0 7.20463 0.781395 5.6122 1.78605 4.82995L6.8 0.918707C8.30698 -0.254661 10.7163 -0.310536 12.2791 0.788332L18.0279 4.82063C19.1349 5.59357 20 7.25119 20 8.60153V15.381C20 17.9233 17.9349 20 15.386 20ZM7.65581 2.01758L2.64186 5.92882C1.9814 6.45032 1.39535 7.633 1.39535 8.47115V15.3717C1.39535 17.1504 2.83721 18.6031 4.61395 18.6031H15.386C17.1628 18.6031 18.6047 17.1597 18.6047 15.381V8.60153C18.6047 7.7075 17.9628 6.46894 17.2279 5.96607L11.4791 1.93377C10.4186 1.18877 8.66977 1.22602 7.65581 2.01758Z" fill="#445E72"/>
                <path d="M9.99998 16.275C9.61859 16.275 9.30231 15.9584 9.30231 15.5766V12.7828C9.30231 12.401 9.61859 12.0844 9.99998 12.0844C10.3814 12.0844 10.6977 12.401 10.6977 12.7828V15.5766C10.6977 15.9584 10.3814 16.275 9.99998 16.275Z" fill="#151D23"/>
            </svg>
                
        </div>

        <!-- <div class="relative flex w-full justify-center">

        <button class="h-16 w-16 flex justify-center items-center absolute -top-12 rounded-full" style="background-color:#34CB7C;">
            
            <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.65 31H21.35C28.6 31 31.5 28.1 31.5 20.85V12.15C31.5 4.9 28.6 2 21.35 2H12.65C5.4 2 2.5 4.9 2.5 12.15V20.85C2.5 28.1 5.4 31 12.65 31Z" stroke="white" stroke-width="3.03163" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 21.575C19.8028 21.575 22.075 19.3029 22.075 16.5C22.075 13.6972 19.8028 11.425 17 11.425C14.1971 11.425 11.925 13.6972 11.925 16.5C11.925 19.3029 14.1971 21.575 17 21.575Z" stroke="white" stroke-width="3.03163" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.1723 9.24997H25.1838" stroke="white" stroke-width="4.04217" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        </button>

        </div> -->

        <!-- Profile -->
        <div class="flex rounded-full h-12 w-16 flex-col justify-center items-center relative" @click="gotoProfile()" v-bind:style="getCurrentRoute != '/' ? 'background-color:#34CB7C50;':''">
            <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.59015 11C12.3515 11 14.5901 8.76142 14.5901 6C14.5901 3.23858 12.3515 1 9.59015 1C6.82873 1 4.59015 3.23858 4.59015 6C4.59015 8.76142 6.82873 11 9.59015 11Z" stroke="#445E72" stroke-width="1.53029" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.18 21C18.18 17.13 14.33 14 9.58999 14C4.85 14 1 17.13 1 21" stroke="#445E72" stroke-width="1.53029" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>    
    </div>
</template>

<script>
    export default{

        methods:{
                gotoProfile(){
                    this.$router.push({path:"/profile", name:'profile'});

                },
                gotoHome(){
                    this.$router.push({path:"/", name:'home'});
        
                }
        },
        computed:{
            getCurrentRoute(){
                return this.$router.currentRoute.value.fullPath
            }
        }
    }
</script>

<style>


</style>