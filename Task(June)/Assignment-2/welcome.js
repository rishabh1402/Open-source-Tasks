import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    
    location.replace("index.html")
    }
    else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
});



function logout(){
    firebase.auth().signOut()
}








