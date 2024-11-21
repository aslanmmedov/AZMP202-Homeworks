const loginForm = document.querySelector(".login-form");
const loginUserNameorEmail = document.querySelector("#reg-user-email-username")
const loginPassword = document.querySelector("#reg-user-password")


let players = JSON.parse(localStorage.getItem("players")) || [];

loginForm.addEventListener("submit",function(event){
    event.preventDefault();
    players.forEach(player => {
        if(player.userName === loginUserNameorEmail.value.trim() || player.userEmail === loginUserNameorEmail.value.trim()){
            if(player.userPassword === loginPassword.value.trim()){
                player.islogged = true;
                localStorage.setItem("players", JSON.stringify(players));
                window.location.replace("main.html")
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Oops..",
                    text: "Player password is not correct",
                  });
            }
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops..",
                text: "Player username or email is not correct",
              });
        }
    });
})