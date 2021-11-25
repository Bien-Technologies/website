$(function(){
  'use strict';
   $( "#ajax-contact" ).submit(function( event ) {
      event.preventDefault();
      submitToAPI(event);
  });
});

function submitToAPI(e) {
  var name = document.getElementById("name").value || document.getElementById("name-input").value || document.getElementById("ph-name-input").value;
  var email = document.getElementById("email").value || document.getElementById("email-input").value || document.getElementById("ph-email-input").value;
  var phone = document.getElementById("tel").value || document.getElementById("phone-input").value || document.getElementById("ph-phone-input").value;
  var message = document.getElementById("message").value || document.getElementById("message-input").value || document.getElementById("ph-message-input").value;

  var Namere = /[A-Za-z]{1}[A-Za-z]/;
  if (name.length < 1) {
    alert ("Name can not be empty");
    return;
  }

  var mobilere = /[0-9]{10}/;
  if (!mobilere.test(phone)) {
    alert ("Please enter valid mobile number");
    return;
  }

  if (email == "") {
    alert ("Please enter your email id");
    return;
  }

  var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  if (!reeamil.test(email)) {
    alert ("Please enter valid email address");
    return;
  }

  var URL = "https://bienemailapi.azurewebsites.net/api/bienemailer?code=Qs1znmF8WAHd47oMPKB0DcFGHvlynMRg6fxma9tU3i6/XnLX2FOZuw==";

  var data = {
    "name" : name,
    "phone" : phone,
    "email" : email,
    "message" : message
  };

  $.ajax({
   type: "POST",
   url : URL,
   dataType: "json",
   crossDomain: true,
   contentType: "application/json; charset=utf-8",
   data: JSON.stringify(data),

   success: function (response) {
     // clear form and show a success message
      console.info(response);
    //  if (response.status == "success") {
    //     alert("Thanks for showing interest. We will get back to you shortly.");
    //     document.getElementById("contact").reset();
    //     location.reload();
    //  }
    //  else {
    //     alert("Your data could not be saved. Please try again!");
    //  }
   },

   error: function () {
     // show an error message
     // alert("Your data could not be saved. Please try again!");
   }});
}
