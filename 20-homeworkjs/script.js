let inpt = document.querySelector(".inp")
let add = document.querySelector(".add")
let alltodo = document.querySelector(".all-todos")
let allcomp = document.querySelector(".all-comp")
let allpend = document.querySelector(".all-pend")
let parag = document.querySelector(".parag");
let spn = document.querySelector(".num")
let todos = document.querySelector(".todos");
let idcount = 0;
   
add.addEventListener("click",function(){
    idcount++;
    spn.textContent = idcount;
    let list = document.createElement("div");
    let idlist = list.id = idcount;
    list.innerHTML = `
    <div class="todos-p">
                <div class ="row1">
                <input type="checkbox" class = "check">
                <h4 class="h4">${inpt.value}</h4>
                </div>
                <div><button class="edit">Edit</button>
            <button class="delete">Delete</button></div>
        </div>
            </div>
    `;
    let check = document.querySelector(".check");
    let h4 = document.querySelector(".h4")
    let edit = document.querySelector(".edit");
    let dlt = document.querySelector(".delete")
    todos.appendChild(list);

    check.addEventListener("click",function(){
        h4.innerHTML = `
        <del class="h4">${inpt.value}</del>
        `
    });
    
    edit.addEventListener("click",function(){
        
        inpt.textContent = "aaaaaaa";
    })
})




