let inpt = document.querySelector(".inp")
let add = document.querySelector(".add")
let alltodo = document.querySelector(".all-todos")
let allcomp = document.querySelector(".all-comp")
let allpend = document.querySelector(".all-pend")
let parag = document.querySelector(".parag");
let spn = document.querySelector(".num")
let todos = document.querySelector(".todos");
add.addEventListener("click",function(){
    let list = document.createElement("div");

    list.innerHTML = `
    <div class="todos-p">
                <input type="checkbox" class = "check">
                <h4 class="h4">${inpt.value}</h4>
            </div>
    `
    todos.appendChild(list);
    let check = document.querySelector(".check");
    let h4 = document.querySelector(".h4")
    check.addEventListener("check",function(){
        h4.innerHTML = `
        <del class="h4">${inpt.value}</del>
        `
    });
})


