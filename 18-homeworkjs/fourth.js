let side = document.getElementById("sidebar");
let btnx = document.getElementById("x-button");
let btnmenu = document.getElementById("menu")

btnx.addEventListener("click",closing);
btnmenu.addEventListener("click",opening);

function closing(){
    side.style.display = "none";
    btnmenu.style.display = "block";
}
function opening(){
    side.style.display = "flex";
    btnmenu.style.display = "none";
}