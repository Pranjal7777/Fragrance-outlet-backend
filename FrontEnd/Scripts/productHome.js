import sidebar from "./Components/sidebar.js";

document.querySelector(".sidebar").innerHTML = sidebar()

import header from "./Components/header.js";



document.querySelector(".header").innerHTML = header();

import footer from "./Components/footer.js";

document.querySelector(".footerDiv").innerHTML = footer();

let product = document.querySelector(".products");

import { getData, appendData } from "./Components/get&appned.js";




document.querySelector(".sidebar").innerHTML = sidebar();

let menSection = document.querySelector(".Men");
menSection.addEventListener("click", menPage);

function menPage() {
    let res = getData(
        "https://fakestoreapi.com/products/category/men's clothing"
    );

    res.then((res) => {
        console.log(res);
        product.innerHTML = null;
        appendData(res, product);
    });
}

let womenSection = document.querySelector(".Women");
womenSection.addEventListener("click", WomenPage);

function WomenPage() {
    let res = getData(
        "https://fakestoreapi.com/products/category/women's clothing"
    );

    res.then((res) => {
        console.log(res);
        product.innerHTML = null;
        appendData(res, product);
    });
}

let menclothing = document.querySelector(".Menclothing");
menclothing.addEventListener("click", men);

function men() {
    let res = getData(
        "https://fakestoreapi.com/products/category/men's clothing"
    );

    res.then((res) => {
        console.log(res);
        product.innerHTML = null;
        appendData(res, product);
    });
}

let womenclothing = document.querySelector(".Womenclothing");
womenclothing.addEventListener("click", Women);

function Women() {
    let res = getData(
        "https://fakestoreapi.com/products/category/women's clothing"
    );

    res.then((res) => {
        console.log(res);
        product.innerHTML = null;
        appendData(res, product);
    });
}

let elect = document.querySelector(".elect");
elect.addEventListener("click", electronic);

function electronic() {
    let res = getData("https://fakestoreapi.com/products/category/electronics");

    res.then((res) => {
        console.log(res);
        product.innerHTML = null;
        appendData(res, product);
    });
}

let jewel = document.querySelector(".jewelery");
jewel.addEventListener("click", jewelery);

function jewelery() {
    let res = getData("https://fakestoreapi.com/products/category/jewelery");

    res.then((res) => {
        console.log(res);
        product.innerHTML = null;
        appendData(res, product);
    });
}

menSection = document.querySelector(".Men");

let id;
let id2;
import searchedQ from "./Scripts/searchedItem.js";

let response = getData("https://fakestoreapi.com/products");

response.then((response) => {
    appendData(response, product);
});

let respo = await response;
console.log(respo);

let sortOption = document.querySelector("#sortOption");

sortOption.onchange = () => {
    sort();
};

function sort() {
    product.innerHTML = null;
    let selected = document.querySelector("#sortOption").value;

    if (selected == "low") {
        console.log("low");
        respo.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    if (selected == "high") {
        console.log("high");
        respo.sort(function (a, b) {
            return b.price - a.price;
        });
    }
    appendData(respo, product);
}

let input = document.querySelector(".searched");

input.addEventListener("keypress", searchUser);

async function searchUser(event) {
    if (event.key === "Enter") {
        //   console.log(event);
        product.innerHTML = null;
        let q = input.value;
        console.log(q);

        let res = await searchedQ(q);
        appendData(res, product);
        // console.log(res);
    }
}

let im = [
    "https://scontent.fpnq7-4.fna.fbcdn.net/v/t39.30808-6/272196459_262122286028346_5005771080536906027_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=pPBRoEYgpw8AX_e3zXr&_nc_ht=scontent.fpnq7-4.fna&oh=00_AT8kOo8rNcrK50BnyzVcCUstVRsr6Z9AiG3CZP8lmwlGVw&oe=61EBC60E",
    "https://scontent.fpnq7-2.fna.fbcdn.net/v/t39.30808-6/272095031_262122289361679_1516305440017454324_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=yIwun72OiJYAX9CTcBI&_nc_ht=scontent.fpnq7-2.fna&oh=00_AT-m7Z1SWc1jkLErBe7GQziKf-YqfkXZJKi_8QpHsPrMPQ&oe=61EBB50D",
    "https://scontent.fpnq7-2.fna.fbcdn.net/v/t39.30808-6/272129266_262122279361680_1159559430303429156_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=cIVd_qJjfpEAX_xhOE6&_nc_ht=scontent.fpnq7-2.fna&oh=00_AT-PYZT-4BO3V3ArP2Edh3aDtja-MJ0SPTLMUTBnlppirg&oe=61EBB838",
    "https://scontent.fpnq7-2.fna.fbcdn.net/v/t39.30808-6/272085431_262122299361678_3772888004896485683_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=kLZFfzUGwrMAX8IQ_Vt&_nc_ht=scontent.fpnq7-2.fna&oh=00_AT__RWvf0jhkjUQ5r3DN1yRR10FeQy_k78XAP_wEhgxkbg&oe=61EC49D8",
    "https://scontent.fpnq7-4.fna.fbcdn.net/v/t39.30808-6/272165048_262122282695013_1580901225383193383_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=V1sp3h_3UUQAX_B0x3i&_nc_ht=scontent.fpnq7-4.fna&oh=00_AT-7XnAW7RYBiU3CvI64k-DEOr4Dx8tFrcndlPdDxQeJWQ&oe=61EB8906",
];

function carousal() {
    let carousalDiv = document.querySelector(".carousal");
    let Img = document.createElement("img");
    // Img.setAttribute("src", im[0]);

    var i = 0;

    id = setInterval(function () {
        if (i == im.length) {
            i = 0;
        }
        Img.src = im[i];
        carousalDiv.append(Img);
        i++;
    }, 2000);
}

carousal();

let ratingImg = [
    "https://scontent.fpnq7-1.fna.fbcdn.net/v/t39.30808-6/272194570_262134342693807_6499350201359551524_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=zQ8l1X90_F8AX-TLXTg&_nc_ht=scontent.fpnq7-1.fna&oh=00_AT-zOpcCXb9BY6VteXdfrDk4ejwrjbPwhpRxK1wPlyf-Sw&oe=61ED23B0",
    "https://scontent.fpnq7-3.fna.fbcdn.net/v/t39.30808-6/272164162_262134346027140_7703156975455239242_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=eY9Z_eh9etkAX_63mB4&_nc_ht=scontent.fpnq7-3.fna&oh=00_AT_u54_XAeoZSLOjKaAT0q4xv65vmmt6IHoWTnXacxaWwQ&oe=61ECB0F2",
    "https://scontent.fpnq7-4.fna.fbcdn.net/v/t39.30808-6/272133405_262134349360473_4708579499876079723_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=b9CviEGxQNUAX96lYHy&_nc_ht=scontent.fpnq7-4.fna&oh=00_AT8yKDpoMtQb4kQWVpAb5yWEIwjXrRn5AOF2z-FJMM3GOg&oe=61EC3F82",
    "https://scontent.fpnq7-2.fna.fbcdn.net/v/t39.30808-6/272125537_262134396027135_3324663818092854752_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=QnXCg24FO0UAX-7rILY&tn=uF12ZIIv-NcbMCBB&_nc_ht=scontent.fpnq7-2.fna&oh=00_AT-jrqt3pArG8PYKEApqM5JzUFIaJU07pDABfBlw_1bBbw&oe=61EC2BF1",
    "https://scontent.fpnq7-2.fna.fbcdn.net/v/t39.30808-6/272106688_262134406027134_5686371395934094153_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=6DpHMQG_V94AX8k5knf&_nc_ht=scontent.fpnq7-2.fna&oh=00_AT-huxdvPRUU2nLOEoOiSyHwnkpghCfnVBrDKNU_YsDD-g&oe=61EC9EF0",
];

function ratingC() {
    let ratingDiv = document.querySelector(".rating");
    let ratingim = document.createElement("img");
    ratingim.setAttribute("class", "ratingimg");

    var j = 0;

    id2 = setInterval(function () {
        if (j == ratingImg.length) {
            j = 0;
        }
        ratingim.src = ratingImg[j];
        ratingDiv.append(ratingim);
        j++;
    }, 1000);
}
// console.log(ratingImg);
ratingC();