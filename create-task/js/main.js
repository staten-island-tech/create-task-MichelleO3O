import "../styles/style.css";
import data from "./array.js";
console.log(data);

const DOMSelectors = {
  card: document.getElementById("cards"),
};

data.forEach((element) => {
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `
    <div id="member-cards">
    <h2 class="names"> ${element.member}</h2>
    <img src="${element.image}">
    <p class="age">${element.age}</p>
    <p class="nationality">${element.nationality}</p>
    </div>
  `
  );
});
