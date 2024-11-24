import { champs } from "./data.js";
import { exp } from "./functions.js";
exp();


const players = JSON.parse(localStorage.getItem("players")) || [];
let player = players.find((p) => p.islogged);
const yourMain = player.main;
let  yourMains = document.querySelector(".your-Mains")
yourMain.forEach(main => {
    champs.forEach(champ =>{
        if(champ.id === main){
            let champCard = document.createElement("div");
            champCard.className = "your-mains"
            champCard.innerHTML = `
            <div class="img">
                <img src="${champ.icon}"class = "img-main">
            </div>
            <div class="inf-parag">
                <h1 class = "champ-name" style = "font-size:60px;">${champ.name}</h1>
                <h2 class = "champ-title">${champ.title}</h2>
                <h3 class = "main-desc">${champ.description}</h3>
            </div>
`;
            yourMains.appendChild(champCard)
        }
    })
});




