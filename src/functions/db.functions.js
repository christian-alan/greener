import {  db } from '../main.js';
import {  child, get,onValue,ref } from "firebase/database";

// Gets all the recipes
export default async function getAllRecipes(){  
const starCountRef = ref(db, 'recipe');
onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
});
}
