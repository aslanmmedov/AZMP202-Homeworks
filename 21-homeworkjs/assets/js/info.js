import { champs } from "./data.js";
import { exp } from "./functions.js";
exp();
const pId = new URLSearchParams(window.location.search).get("id");
const champ = champs.find((q) => q.id == pId);
let champInfo = document.querySelector(".champ-info")


champInfo.innerHTML = `
            <div class="img">
                <img src="${champ.icon}" alt="" class = "img-champ">
            </div>
            <div class="inf-parag">
                <h1 class = "champ-name" style = "font-size:60px;">${champ.name}</h1>
                <h2 class = "champ-title">${champ.title}</h2>
                <h3 class = "champ-desc">${champ.description}</h3>
            </div>
            
`;