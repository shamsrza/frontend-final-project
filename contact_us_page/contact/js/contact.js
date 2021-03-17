$(document).ready(function (){

    function validation() {
        let email = document.getElementById("email").value;
        let textarea = document.getElementById("textarea").value;
      
        if (email == "") {
          document.getElementById("mail").innerHTML =
            "No account found with that email.";
          document.getElementById("email").style.borderColor = "red";
        }
      
        if (textarea == "") {
          document.getElementById("textArea").innerHTML =
            "No account found with that email.";
          document.getElementById("textarea").style.borderColor = "red";
        }
      }
});
