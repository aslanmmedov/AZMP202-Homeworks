import { champs } from "./data.js";
import { exp } from "./functions.js";
exp();
let champCards = document.querySelector(".champ-cards");

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
        <i class="fa-solid fa-check champs-info" data-id = "${champ.id}"></i>
      </div>
        `
        champCards.appendChild(champCard);
    });
}

fillTable(champs);