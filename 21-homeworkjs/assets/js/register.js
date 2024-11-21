
const registerForm = document.querySelector(".register-form")
const registerUserName = document.querySelector("#reg-user-name")
const registerUserEmail = document.querySelector("#reg-user-email")
const registerUserPassword = document.querySelector("#reg-user-password")
const registerUserAge = document.querySelector("#reg-user-age")

const players = JSON.parse(localStorage.getItem("players")) || [];

registerForm.addEventListener("submit",function(event){
    event.preventDefault();
    let isThere = false;
    players.forEach(player => {
        if(players.userName === registerUserName.value.trim() || player.userEmail === registerUserEmail.value.trim()){
            isThere = true;
        }
    });
    if(!isThere){
        if(registerUserAge.value.trim() >= 18){
            const player = {
                id:Date.now(),
                userName:registerUserName.value.trim(),
                userEmail:registerUserEmail.value.trim(),
                userPassword:registerUserPassword.value.trim(),
                islogged: false,
                main:[],
                basket:[],
                userage: registerUserAge.value.trim(),
            }
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                window.location.replace("login.html");
              });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops..",
                text: "You have to be at least 18 years old!!",
              });
        }
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops..",
            text: "There is already a user with that name or email!!",
          });
    }
    
    
})