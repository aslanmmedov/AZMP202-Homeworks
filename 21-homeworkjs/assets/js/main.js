const playerLogin = document.querySelector(".player-login")
const playerRegister = document.querySelector(".player-register")
const playerLogOut = document.querySelector(".player-log-out")

const players = JSON.parse(localStorage.getItem("players")) || [];

let isLogged;
players.forEach(player => {
    if(player.islogged === true){
        isLogged = true;
    }
    else{
        isLogged = false;
    }
});

window.addEventListener("DOMContentLoaded",function(){
    if(isLogged){
        playerRegister.classList.add("dis-none");
    }
    else{
        playerLogOut.classList.add("dis-none")
    }
})

playerLogin.addEventListener("click",function(){
    window.location.replace("login.html")
})
playerRegister.addEventListener("click",function(){
    window.location.replace("register.html")
})
playerLogOut.addEventListener("click",function(){
    players.forEach(out => {
        out.islogged = false;
        playerLogOut.classList.add("dis-none");
        playerRegister.classList.remove("dis-none");
    });
    localStorage.setItem("players", JSON.stringify(players));
})