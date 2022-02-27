function chekcforblank() {
  var email = document.getElementById("email").value;
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
    var password = document.getElementById("password").value;
    

  var userobj = {
    email: email,
    password: password,
    };
    

  user_details.push(userobj);
  localStorage.setItem("usercred", JSON.stringify(user_details));

  var count = 0;

  if (count > 1 && email == "") {
    alert("enter ur email");
    return false;
  } else if (password == "") {
    alert("enter ur password");
    return false;
  } else if (first == "") {
    alert("enter ur password");
    return false;
  } else if (last == "") {
    alert("enter ur password");
    return false;
  }
}


var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  window.location.href = "signin.html";
});


var user_details = JSON.parse(localStorage.getItem("usercred")) || [];
