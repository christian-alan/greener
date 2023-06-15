import {  db } from '../main.js';
import {  onValue,ref } from "firebase/database";

// Gets all the recipes
 async function getAllRecipes(){  
    const starCountRef = ref(db, 'recipe');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
    });
}

//Get User 
async function getUser(userid){  
    const starCountRef = ref(db, `users/${userid}`);
    let user = '';
    onValue(starCountRef, (snapshot) => {
        user = snapshot.val();
    }); 

    return user;
}
        

export default{
    getAllRecipes,
    getUser
}