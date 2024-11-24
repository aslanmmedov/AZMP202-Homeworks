import { champs } from "./data.js";
import { exp } from "./functions.js";
exp();
let champCards = document.querySelector(".champ-cards");
let players = JSON.parse(localStorage.getItem("players")) || [];
let player = players.find((p) => p.islogged);

function fillTable(champs){
    champCards.innerHTML = "";
    champs.forEach(champ => {
        const champCard = document.createElement("div");
        champCard.className = "champ-card"
        champCard.innerHTML =`
        <div class="img-champ">
        <img src="${champ.icon}">
      </div>
      <div class="champ-content">
        <h3 class = "champ-name">${champ.name}</h3>
        <p class="champ-fakename">${champ.title}</p>
      </div>
      <div class="champ-icns">
      <a href="info.html?id=${champ.id}" class = "aaaa">
      <i class="fa-solid fa-circle-info champs-info"></i>
      </a>
          <i class="fa-solid fa-check champs-main" data-id =${champ.id}></i>
      </div>
        `
        champCards.appendChild(champCard);
    });

    let mainAdd = document.querySelectorAll(".champs-main");
    mainAdd.forEach(btn => {
      btn.addEventListener("click",function(btn){
        if(player){
        let mainId = this.getAttribute("data-id");
        if(player.main.includes(mainId) !== true){
        player.main.push(mainId)
        localStorage.setItem("players", JSON.stringify(players));
        }
        } 
        else{
          Swal.fire({
            icon: "error",
            title: "Login or Register please",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            window.location.replace("login.html");
          });
        }
      })
    }); 
}

fillTable(champs);