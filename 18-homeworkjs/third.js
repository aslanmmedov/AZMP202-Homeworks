let cont = document.getElementById("container");
let name = document.getElementById("inside");
cont.style.display = "flex";
cont.style.flexDirection = "column"
cont.style.alignItems = "center";
cont.style.justifyContent = "center";

let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let addition = document.getElementById("addition");
let substract = document.getElementById("Substract");
let multiply = document.getElementById("Multiply");
let division = document.getElementById("Division");
let reset = document.getElementById("reset");
let answer =document.getElementById("answer")

addition.addEventListener("click",Addition);
substract.addEventListener("click",Substraction);
multiply.addEventListener("click",Multiply);
division.addEventListener("click",Divide);
reset.addEventListener("click",Reset);



function Divide(){
    let sumdiv = +value1.value/ +value2.value;
    answer.textContent = sumdiv;
}
function Multiply(){
    answer.textContent = value1.value*value2.value;
}
function Substraction(){
    answer.textContent = value1.value-value2.value;
}
function Addition(){
    let sum = +value1.value+ +value2.value;
    answer.textContent = sum;
}
function Reset(){
    answer.textContent = 0;
}