function chekcforblank(event) {

  event.preventDefault();

  var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var count = 0;
    
    for (var i = 0; i < user_details.length; i++) {
      
    if (
      email == user_details[i].email &&
      password == user_details[i].password
    ) {
      count++;
      alert("login in sucess");
      window.location.href = "./productHome.html";
    }
  }

    
  if (count == 0) {
    alert("please check your details");
  }

  if (email == "") {
    alert("enter ur email");
    return false;
  } else if (password == "") {
    alert("enter ur password");
    return false;
  }
}

// var btn =   document.getElementById("btn")
// btn.addEventListener("click",function(){
//   window.location.href="register.html"
// })

let user_details = JSON.parse(localStorage.getItem("usercred"));
