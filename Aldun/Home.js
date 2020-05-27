var firebaseConfig = {
  apiKey: "AIzaSyCTyDfnwzevINtQpkv1wWMN_9VeHde28CU",
  authDomain: "aldun-7c913.firebaseapp.com",
  databaseURL: "https://aldun-7c913.firebaseio.com",
  projectId: "aldun-7c913",
  storageBucket: "aldun-7c913.appspot.com",
  messagingSenderId: "429273107966",
  appId: "1:429273107966:web:835bb541d75fa922eac4af",
  measurementId: "G-9VLYHNPCHW"
};

firebase.initializeApp(firebaseConfig);
  
const auth = firebase.auth();

function signIn(){

  var email = document.getElementById("email")
  var password = document.getElementById("password")

  promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  auth.onAuthStateChanged(function(user){

    if(user){
      var email = user.email;
      alert("Welcome To Aldun! " + email)
      return window.location.replace("Main.html");
  
    }
  
  
  });
}

function signOut(){

  auth.signOut();
  alert("Signed Out");
  return window.location.replace("Home.html");
}

$(document).ready(function(){
  $('.newAccount').click (function(){
    $('.registration').fadeIn("slow");
  });
});

function signUp(){
		
  var email = document.getElementById("nemail");
  var password = document.getElementById("npassword");
  
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  
  alert("Signed Up");
}
