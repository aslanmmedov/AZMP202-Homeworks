export function exp(){
    const playerLogin = document.querySelector(".player-login")
    const playerRegister = document.querySelector(".player-register")
    const playerLogOut = document.querySelector(".player-log-out")
    const yourMains = document.querySelector(".mns")
    const players = JSON.parse(localStorage.getItem("players")) || [];
    
    let isLogged = false;
    const player = players.find((p) => p.islogged);
    if(player){
        isLogged = true;
    }
    window.addEventListener("DOMContentLoaded",function(){
        if(isLogged){
            playerRegister.classList.add("dis-none");
        }
        else{
            playerLogOut.classList.add("dis-none")
        }
    })
    yourMains.addEventListener("click",function(){
        if(isLogged){
            window.location.replace("mains.html")
        }
        else{
            console.log("aaa")
            Swal.fire({
                icon: "error",
                title: "Login or register please",
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                window.location.replace("login.html");
              });
        }
    })
    playerLogin.addEventListener("click",function(){
        window.location.replace("login.html")
    })
    playerRegister.addEventListener("click",function(){
        window.location.replace("register.html")
    })
    playerLogOut.addEventListener("click",function(){
            player.islogged = false;
            playerLogOut.classList.add("dis-none");
            playerRegister.classList.remove("dis-none");
            window.location.replace("main.html");
        localStorage.setItem("players", JSON.stringify(players));
    })
    }