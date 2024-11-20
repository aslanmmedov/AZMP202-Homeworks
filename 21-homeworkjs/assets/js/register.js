
const registerForm = document.querySelector(".register-form")
const registerUserName = document.querySelector("#reg-user-name")
const registerUserEmail = document.querySelector("#reg-user-email")
const registerUserPassword = document.querySelector("#reg-user-password")


const players = JSON.parse(localStorage.getItem("players")) || [];

registerForm.addEventListener("submit",function(event){
    event.preventDefault();

    const player = {
        id:Date.now(),
        userName:registerUserName.value.trim(),
        userEmail:registerUserEmail.value.trim(),
        userPassword:registerUserPassword.value.trim(),
        islogged: false,
        main:[],
        basket:[],
    }
    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));

})