import { getAllData } from "./constants.js";


let row = document.querySelector(".row.js-spec");

async function getData(){
    let {data} = await getAllData("flowers");
    drawCards(data);
}
getData();

function drawCards(products){
    // console.log(products);
    row.innerHTML = "";
    products.forEach(product => {
        let prodElem = document.createElement("div");
        prodElem.className = "col-4 col-md-6 col-sm-12";
        prodElem.innerHTML = `
             <div class="js-card">
                            <div class="js-card-img">
                                <img src="${product.imgUrl}" alt="">
                            </div>
                            <div class="js-card-parag">
                                <h4>${product.name}</h4>
                                <p>${product.price}</p>
                            </div>
                        </div>
        `
        row.appendChild(prodElem);
    });
}