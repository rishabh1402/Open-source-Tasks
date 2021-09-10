import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    location.replace("welcome.html")
    // ...
  } else {
    // User is signed out
    // ...
  }
});
function login()
{
const auth = getAuth();
const email = document.getElementById("email").value
const password = document.getElementById("password").value
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("error").innerHTML = error.message
  });
}

function signUp()
{
const auth = getAuth();
const email = document.getElementById("email").value
const password = document.getElementById("password").value
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("error").innerHTML = error.message
    // ..
  });
}