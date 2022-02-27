async function getData(url) {
  try {
    let res = await fetch(url);

    let data = await res.json();
    //   appendData(data);
    return data
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

let selectedItem = []
let cart = JSON.parse(localStorage.getItem("cart")) || []


console.log("cart", cart)
async function appendData(data, location) {
  data.map((elem) => {
    let productDiv = document.createElement("div");
    productDiv.setAttribute("class", "productDiv");


    let productImg = document.createElement("img");
    productImg.setAttribute("src", elem.image);
    productImg.setAttribute("class", "productImg");

    let title = document.createElement("h3");
    title.textContent = elem.product_name;
    title.setAttribute("class", "title");

    let price = document.createElement("h4");
    price.textContent = "Price: " + "$" + elem.price;
    price.setAttribute("class", "price");

    let discount = document.createElement("p");
    discount.textContent = "BUY 1 GET 1 AT 30% OFF  ";
    discount.setAttribute("class", "discount");

    let mix = document.createElement("p");
    mix.textContent = "MIX & MATCH";
    mix.setAttribute("class", "mix");

    let add = document.createElement("button")
    add.textContent = "ADD"
    add.setAttribute("class", "add")
    add.addEventListener("click", function () {
      myCart(elem)
      // cartLen.textContent = cart.length;
      localStorage.setItem("cart", JSON.stringify(cart))
      // addToCart(elem)
      add.textContent = "ADDED"
    })


    productImg.onclick = () => {

      clickedProduct(elem)
    }

    title.onclick = () => {

      clickedProduct(elem)
    }


    productDiv.append(productImg, title, add, price, discount);

    location.append(productDiv);

    var cartLen = document.querySelector("#cartLen");



    function clickedProduct() {


      selectedItem.push(elem)

      localStorage.setItem("selectedItem", JSON.stringify(selectedItem))
      window.location.href = "../selectedProduct.html"


    }

  });
}

async function myCart(elem) {

  try {

    let product = {

      product_id: elem._id

    }

    product = JSON.stringify(product)

    let cartData = await fetch("https://pranjal077apinodejs.herokuapp.com/cart", {
      method: "POST",
      body: product,
      headers: {
        "Content-Type": "application/json",

      }

    })

  } catch (error) {
    console.log(error.message)
  }

}


export { getData, appendData }