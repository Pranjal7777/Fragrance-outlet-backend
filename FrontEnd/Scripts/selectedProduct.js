


// import header from "../Components/header"
// document.querySelector(".header").innerHTML = header()


// import footer from "./footer.js"
// document.querySelector(".footer").innerHTML = footer()


function display(items) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    var maindiv1 = document.getElementById("one")
    var maindiv2 = document.getElementById("two")

    items.map(function (elem) {
        let productDiv = document.createElement("div");



        let productImg = document.createElement("img");
        productImg.setAttribute("src", elem.image);
        productImg.setAttribute("class", "productImg");
        productImg.style.width = "400px"
        productImg.style.height = "400px"

        let title = document.createElement("h3");
        title.textContent = elem.product_name;
        title.setAttribute("class", "title");

        let price = document.createElement("h4");
        price.textContent = "Price: " + "$" + elem.price;
        price.setAttribute("class", "price");



        let discount = document.createElement("h5");
        discount.textContent = "MIX & MATCH! BUY 1 GET 1 AT 30% OFF  ";
        discount.setAttribute("class", "discount");

        let mix = document.createElement("p");
        mix.textContent = "MIX & MATCH";
        mix.setAttribute("class", "mix");




        let newlabel = document.createElement("label");
        newlabel.setAttribute("for", "quantity");
        newlabel.innerHTML = "Quantity:";


        let quantity = document.createElement("input")
        quantity.setAttribute("type", "number");

        let brea = document.createElement("br")
        brea.innerHTML = ""

        let button = document.createElement("button")
        button.setAttribute("class", "addToBag")
        button.innerText = "ADD GO TO MY BAG"

        button.style.marginTop = "40px";

        button.onclick = () => {

            // window.location.href = "./cart.html"

            alert("Added sucessfully")
            cart.push(elem)
            console.log(cart)

            localStorage.setItem("cart", JSON.stringify(cart))
        }





        maindiv1.append(productImg)
        maindiv2.append(title, price, discount, newlabel, quantity, brea, button)


    })
}

export default display;