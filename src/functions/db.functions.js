import {  db } from '../main.js';
import {  ref, onValue, child, get } from "firebase/database";

// / Gets all fruits by month 
export default async function getAllFruitsByMonth(month){
    return get(ref(db,month))
    .then((snapshot)=>{
        const data = snapshot.val();
        return data;
    });
}
