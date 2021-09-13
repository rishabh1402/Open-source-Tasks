const firebaseConfig = {
  apiKey: "AIzaSyC_nKG5UUGpMRvlH_xo1OYVYUkLSc0YW7s",
  authDomain: "web-login-50d88.firebaseapp.com",
  projectId: "web-login-50d88",
  storageBucket: "web-login-50d88.appspot.com",
  messagingSenderId: "144708372281",
  appId: "1:144708372281:web:e37318ec33e12bb531cae8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function login() {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
          alert("Enter Correct details!!")
      })
}

firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
      location.replace("welcome.html")
  }
})


function signup(){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
          alert("Enter correct details!!")
          
      });
}
