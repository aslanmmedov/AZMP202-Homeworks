let cont = document.getElementById("container");
cont.style.display = "flex";
cont.style.flexDirection = "column"
cont.style.alignItems = "center";
cont.style.justifyContent = "center";

let value1 = document.getElementById("value1");
let num1 = +value1;
let value2 = document.getElementById("value2");
let num2 = +value2;
let addition = document.getElementById("addition");
let substract = document.getElementById("Substract");
let multiply = document.getElementById("Multiply");
let division = document.getElementById("Division");
let reset = document.getElementById("reset");
let answer =document.getElementById("answer")

addition.addEventListener("click",Addition);
substract.addEventListener("click",Substraction);
multiply.addEventListener("click",Multiply)
division.addEventListener("click",Divide)



function Divide(){
    answer.textContent = num1/num2;
}
function Multiply(){
    answer.textContent = num1*num2;
}
function Substraction(){
    answer.textContent = num1-num2;
}
function Addition(){
    answer.textContent = num1+num2;
}