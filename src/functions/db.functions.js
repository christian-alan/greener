import {  db } from '../main.js';
import {  child, get } from "firebase/database";



// Gets all the recipes
export default async function getAllRecipes(){

    return get(child(db, 'recipe/'));
      
}
