import { addData, deleteDataById, getAllData } from "./constants.js";


let adminForm = document.querySelector("form");
let productName = document.querySelector(".name")
let price = document.querySelector(".price")
let quantity = document.querySelector(".quantity")
let image = document.querySelector(".image")



let { data } = await getAllData("flowers");
let tbody = document.querySelector("tbody");
function selectCategory() {
    // let {data} = await getDataById("products");
    adminForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        let product = {
            name:productName.value.trim(),
            price:price.value.trim(),
            quantity:quantity.value.trim(),
            imgUrl:image.value.trim(),
        }
        async function addNewProduct(){
            let {data} = await addData("flowers",product);
        }
        addNewProduct();
    })
}
selectCategory();


function drawTable(products,event) {
    // console.log(products);
    tbody.innerHTML = "";
    products.forEach(product => {
        let prodElem = document.createElement("tr");
        prodElem.className = "product-table";
        prodElem.innerHTML = `
                    <td><img src="${product.image}" alt="" class = "img-table"></td>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.quantity}</td>
                    <td class = "actions">
                        <a href = "edit.html?id=${product.id}" target = "blanck" class = "btn btn-warning edit">Edit</a>
                        <button class = "btn btn-danger delete" data-id =${product.id}>Delete</button>
                    </td>
        `
        tbody.appendChild(prodElem);
    });
    let dltBtn = document.querySelectorAll(".delete");
    dltBtn.forEach(btn => {
        // console.log(btn)
        let dataId = btn.getAttribute("data-id");
        btn.addEventListener("click",function(){
            deleteDataById("flowers",dataId);
            btn.closest("tr").remove();
        })
    });
}
drawTable(data);