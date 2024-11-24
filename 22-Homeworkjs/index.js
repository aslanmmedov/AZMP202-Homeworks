const BASE_DIR = "https://fakestoreapi.com/products";
let productCards = document.querySelector(".product-cards");
fetch(`${BASE_DIR}`).then((res) =>{
    return res.json();
}).then((data)=>{
    // console.log(data);
    createCard(data);
}).catch((err)=>{
    console.log(err)
})

function deleteElement(id,btn){
    fetch(`${BASE_DIR}/${id}`,{method:"DELETE"})
    .then((res)=>{
        if(res.ok){
            btn.parentElement.parentElement.remove();
        }
    })
}


function createCard(products){
    productCards.innerHTML = "";
    products.forEach(product => {
        let cardHolder = document.createElement("div");
        cardHolder.className = "product-card";
        cardHolder.innerHTML = `
                <div class="card" style="width: 20rem;padding:1rem;">
                    <img class="card-img-top " style = "height:300px;"src=${product.image} alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.description}</p>
                      <p class="card-text">${product.price}$</p>
                      <a href="#" class="btn btn-danger" data-id = ${product.id}>Delete</a>
                    </div>
                </div>
        `
        productCards.appendChild(cardHolder);
    });
    
    let dltButton= document.querySelectorAll(".btn")
    dltButton.forEach(btn => {
        btn.addEventListener("click",function(){
        let dltElem = this.getAttribute("data-id");
        deleteElement(dltElem,this)
    });
    })
    
}