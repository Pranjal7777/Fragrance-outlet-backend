
let data;


async function cartData() {
    // document.querySelector("tbody").innerHTML = null
    try {
        let cartItems = await fetch(
            "https://pranjal077apinodejs.herokuapp.com/cart"
        );

        data = await cartItems.json();

        console.log("data", data)
        display(data)
    } catch (error) {
        console.log(error.message);
    }
}

cartData()

async function display(data) {


    var grandSub = 0;
    data.forEach((elem) => {


        let row = document.createElement("tr");

        let hr = document.createElement("hr");

        let product = document.createElement("th");
        let imgAndNameDiv = document.createElement("div");
        imgAndNameDiv.setAttribute("class", "imgAndNameDiv");

        let image = document.createElement("img");
        image.setAttribute("class", "productImg");
        image.src = elem.product_id.image;

        let title = document.createElement("p");
        title.setAttribute("class", "title");
        title.textContent = elem.product_id.product_name;

        let Delete = document.createElement("p")
        Delete.setAttribute("class", "Delete");
        Delete.textContent = "remove"
        Delete.addEventListener('click', (event) => {

            event.target.parentNode.parentNode.parentNode.remove();
            console.log(event.target.parentNode.parentNode.parentNode)
            deleteItem(elem)
            // window.location.reload()
        })


        imgAndNameDiv.append(image, title, Delete);
        product.append(imgAndNameDiv);

        let price = document.createElement("th");
        price.textContent = "$" + elem.product_id.price;

        let qty = document.createElement("th");
        qty.textContent = "1";

        let subtotal = document.createElement("th");
        subtotal.textContent = "$" + elem.product_id.price;

        row.append(product, price, qty, subtotal);

        document.querySelector("tbody").append(row);

        grandSub += elem.product_id.price;

        grand(grandSub);
    });
}

function grand(grandSub) {
    console.log(grandSub);
    localStorage.setItem("totalprice", JSON.stringify(grandSub));
    document.querySelector(".grandTotal").textContent =
        "$" + grandSub.toFixed(2);
}





async function deleteItem(elem) {

    console.log("elem", elem)
    try {

        let deleteProductId = await elem._id

        console.log("deleteProductId", deleteProductId)

        let deleteProduct = await fetch(`https://pranjal077apinodejs.herokuapp.com/cart/${deleteProductId}`, {

            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })

        // cartData(data)
    } catch (error) {

        console.log(error.message)
    }

}

