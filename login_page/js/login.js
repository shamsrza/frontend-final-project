
$(document).ready(function () {
  
function validation() {
  let email = document.getElementById("email").value;

  if (email == "") {
    document.getElementById("mail").innerHTML =
      "No account found with that email.";
    document.getElementById("email").style.borderColor = "red";
    return false;
  }
}
 
});
