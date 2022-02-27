document.querySelector("#sub").addEventListener("click", function () {

  var text = document.querySelector("#text").value;
  var card = document.querySelector("#card").value;
  var cvv = document.querySelector("#cvv").value;

  // if (text.length == 0 || card.length == 0 || cvv.length == 0) {
  //   alert("Please Enter Required Fields....!");
  // }



  if (card.length > 4 && cvv.length == 3 && text.length != 0) {
    let otimep = random();
    alert(otimep);
    let enter = prompt("Enter OTP");
    //console.log(enter);
    if (enter != null && Number(enter) === otimep) {
      setTimeout(function () {
        // alert("Order Placed Successfully!!!");
        window.location.href = "./success.html"
      }, 0);
    } else {
      alert("Invalid OTP");
    }
    // alert("Payment Successful..!");
    // window.location.href = "./success.html";
  }

  // else {
  //   alert("Invalid Card Details");
  // }
  // document.querySelector("#card").value = "";
  // document.querySelector("#cvv").value = "";

});


// var totalprice = JSON.parse(localStorage.getItem("totalprice"));
// console.log(totalprice);
// document.querySelector("#amount").textContent =
//   "TOTAL" + " " + "AMOUNT" + ":" + totalprice;


function random() {
  var otp = Math.round(1000 + Math.random() * 8999);
  return otp;
}





