import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/main.css'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase} from "firebase/database";

const app = createApp(App);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBROv6PrwZGPWQlI-G1xniiJROsgFMEevQ",
    authDomain: "greener-app-2618b.firebaseapp.com",
    projectId: "greener-app-2618b",
    storageBucket: "greener-app-2618b.appspot.com",
    messagingSenderId: "559790124662",
    appId: "1:559790124662:web:6a8924b2f3dd4a3e92f957",
    measurementId: "G-6PVBK0HRE0"
};

app.use(router);

// Initialize Firebase

const firebase = initializeApp(firebaseConfig); 
export const storage = getStorage(firebase, "gs://greener-app-2618b.appspot.com");
export const db = getDatabase(firebase, "https://greener-app-2618b-default-rtdb.firebaseio.com/");
app.mount('#app');

