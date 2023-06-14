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

    <input type="text" placeholder="E-mail" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2">
    <input type="text" placeholder="Password" class="placeholder-white bg-gray-400 outline-none  shadow-md rounded-full w-2/3 h-10 px-2 py-3 my-2">

  </div>

  <div class="flex flex-col justify-center items-center h-1/6">
<<<<<<< Updated upstream



    <button   class="placeholder-white bg-black outline-none shadow-md rounded-full w-2/4 h-2/4 text-white" @click="login">
=======
    <audio ref="audioPlayer" :src="soundFile"></audio>
    <button    class="placeholder-white bg-black outline-none shadow-md rounded-full w-2/4 h-2/4 text-white" @click="login">
>>>>>>> Stashed changes
      Continue
    </button>

    <p class="my-2">Create an account</p>

  </div>



</template>
<script>
import logo from "../components/icons/Logo.vue"
import soundFile from '@/assets/button-pressed-38129.mp3'
export default{

  components:{
    logo
  },

    data(){
        return {

            username: '',
            password: '',
            soundFile: soundFile,
        };
    },
    methods: {
        addTodo() {
            console.log(this.newTodo);
            this.todos.push({ id: this.id++, text: this.newTodo });
        },
        removeTodo() {
            // Add logic to remove a todo
        },
        login() {
          const audioPlayer = this.$refs.audioPlayer;
          audioPlayer.play();
            // Our local database, can be created outside of the method as well
            const database = [
                { username: 'sammow', password: '1234' },
                { username: 'alacri', password: '1234' },
                { username: 'tuvkin', password: '1234' },
                { username: 'larost', password: '1234' },
                // Add more user objects as needed
            ];
           // Find a user with matching credentials in the database
            const user = database.find((user) => user.username === this.username && user.password === this.password);

            if (user) {
                // Successful login
                console.log('Logged in!');
<<<<<<< Updated upstream
                this.$router.push('/');
=======
              setTimeout(() => {
                this.$router.push('/');
              }, 1000); // Delay in milliseconds
>>>>>>> Stashed changes
            } else {
                // Invalid credentials
                console.log('Invalid username or password');
            }
<<<<<<< Updated upstream

        }
=======
        },


>>>>>>> Stashed changes
    },


}
</script>
<style>
</style>