import { champs } from "./data.js";

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
        <i class="fa-solid fa-circle-info champs-info"></i>
        <i class="fa-solid fa-check champs-info"></i>
      </div>
        `
        champCards.appendChild(champCard);
    });
    console.log("aslan")
}
fillTable(champs);