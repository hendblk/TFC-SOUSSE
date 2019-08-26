
document.querySelector("#product-form").addEventListener("submit" , function(e){
    e.preventDefault()
    submitContact()
})


var firebaseConfig = {
    apiKey: "AIzaSyBgXsATCAZ6rqW-I8IjhfHj6Rh1de_1UV0",
    authDomain: "tfcs-84c8d.firebaseapp.com",
    databaseURL: "https://tfcs-84c8d.firebaseio.com",
    projectId: "tfcs-84c8d",
    storageBucket: "",
    messagingSenderId: "521327482325",
    appId: "1:521327482325:web:b0914796f402767c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  let database = firebase.database()

  let ref = database.ref("contact")

  
  function submitContact(){
      let data = {
          rate1 : document.querySelector("#rate").value ,
          rate2 : document.querySelector("#rate2").value ,
          message : document.querySelector("#message").value ,
          address : document.querySelector("#address").value ,
          email : document.querySelector("#email").value ,
      }


      function sendContact(){
        let data = {
            rate1 : document.querySelector("#rate").value ,
            rate2 : document.querySelector("#rate2").value ,
            message : document.querySelector("#message").value ,
            address : document.querySelector("#address").value ,
            email : document.querySelector("#email").value ,
        }
      ref.push(data)

  }