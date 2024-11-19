let inpt = document.querySelector(".inp");
let add = document.querySelector(".add")
let alltodo = document.querySelector(".all-todos")
let allcomp = document.querySelector(".all-comp")
let allpend = document.querySelector(".all-pend")
let parag = document.querySelector(".parag");
let spn = document.querySelector(".num")
let alert = document.querySelector(".alert");
let list = document.querySelector(".list")

let arr = [];
let idcount = 1;
add.addEventListener("click",function(){

    if(inpt.value.trim() === ""){
        alert.textContent = "Please fill input"
        inpt.classList.add("red")
        inpt.value = "";
    }
    else{
        const obj = {
            id : idcount++,
            text: inpt.value.trim(),
            iscomp:false,
            createDate:new Date().toLocaleString(),
        }
        localStorage.setItem(obj.id,JSON.stringify(obj))
        let arrget = JSON.parse(localStorage.getItem(obj.id));
        arr.push(arrget)
        resetfield();
        createTodo(arr);
        spn.textContent = idcount-1;
        inpt.classList.remove("red")
        alert.textContent = ""
    }
    
})



    


function createTodo(todosemiArr){
    list.innerHTML = "";
    todosemiArr.forEach((todo) => {
        const litodo = document.createElement("li");
        // let getTodo = localStorage.getItem("todo array")
        litodo.innerHTML = `
        <div class="todos-p">
              <div class="row1">
                <input type="checkbox" class="check">;
                <h4 class = "h4">${todo.text} <span>${todo.createDate}</span></h4>
              </div>
              <div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
              </div>
            </div>
        `;
        list.appendChild(litodo);
    });
    let change = document.querySelector(".check")
    let h4 = document.querySelector(".h4")

   
    
}
function resetfield(){
    inpt.value = "";
}



