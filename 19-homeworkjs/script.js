let tit = document.getElementById("title");
let pri = document.getElementById("price");
let desc = document.getElementById("description");
let img = document.getElementById("image");
let add = document.getElementById("add");


let bgcont = document.querySelector(".bg-container")
add.addEventListener("click",adding)


function adding(){
    let cont = document.createElement("div");
    cont.classList.add("container");
    let cardimg = document.createElement("div");
    cardimg.classList.add("img")
    let parag = document.createElement("div");
    parag.classList.add("parag")
    let btns = document.createElement("div");
    btns.classList.add("btns");
    
    let img1 = document.createElement("img");
    img1.src = img.value;
    img1.classList.add("img1");
    cardimg.append(img1);
    let h3parag = document.createElement("h3");
    h3parag.textContent = tit.value;
    h3parag.classList.add("h3-parag")
    parag.append(h3parag)
    let h4parag = document.createElement("h4");
    h4parag.classList.add("h4-parag")
    h4parag.textContent = pri.value;
    parag.append(h4parag)
    let pparag = document.createElement("p");
    pparag.classList.add("p-parag")
    pparag.textContent = desc.value;
    parag.append(pparag)
    let btnone = document.createElement("button");
    btnone.textContent = "Details";
    btnone.classList.add("btn-1");
    // btnone.addEventListener("click",detailing)
    btns.appendChild(btnone)
    let btntwo = document.createElement("button");
    btntwo.textContent = "Delete"
    btntwo.classList.add("btn-2")
    btntwo.addEventListener("click",deleting)
    btns.appendChild(btntwo)

    cont.append(cardimg);
    cont.append(parag);
    cont.append(btns);
    bgcont.appendChild(cont)

    function deleting(){
        cont.classList.add("deleting");
    }
    
}
