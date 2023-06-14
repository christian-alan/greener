import {  db } from '../main.js';
import {  ref, set ,get , child} from "firebase/database";



async function authGuard(to, from,next) {
    // Check if the user is authenticated
    const isAuthenticated = checkIfUserIsAuthenticated();

    console.log(to.name, from.name);
    // If user not authenticated & is going to the locked routes then return to login
  if (from.name === 'onboarding' && to.name === 'login' && !isAuthenticated) next('/login');
  if (from.name === 'login' && to.name === 'regstration' && !isAuthenticated) next ('/regiration');
  if (from.name === 'registration' && to.name === 'login' && !isAuthenticated) next ('/login');
//   if (!isAuthenticated ||
//         (to.name!== 'login' || to.name!== 'registration' || to.name!== 'onboarding') || 
//         (from.name!== 'login' || from.name!== 'registration' || from.name!== 'onboarding')
//     ) next('/login');
  else next();

  }



function checkIfUserIsAuthenticated() {
// // Retrieve the authentication token from the session storage or local storage
const authToken = localStorage.getItem('userid');
// if Token exist then user exists 
if (authToken) return true
else false;

}

//Generates a random ID
function makeid() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 9) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}



// Creates a user in the database
async function createUser(userName,password) {
    const userId = makeid();
    localStorage.setItem('userid', userId);
    set(ref(db, 'users/' + userId), {
        username: userName,
        password: password
      });
}

function authenticateUser(userName,password) { 
    const authToken = localStorage.getItem('userid');

    get(child(db,`users/${authToken}`)).then((snapshot) => {
        if (snapshot.exists()) {
            if(snapshot.useName === userName && snapshot.password === password) {
                console.log('userAuthenticated');
                this.$router.push('/');
            }else {
                // Invalid credentials
                console.log('Invalid username or password');
            }
        } else {
          console.log("User doesnt exist");
        }
      }).catch((error) => {
        console.error(error);
      });

}

function signOutUser(){

}



export default{
    authGuard,
    checkIfUserIsAuthenticated,
    authenticateUser,
    createUser

}