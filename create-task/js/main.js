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

document.querySelector("kor-btn").addEventListener("click", function () {
  const allCards = document.getElementById("cards");
  allCards.innerHTML = "";
  data
    .filter((e) => e.nationality === "Korean")
    .forEach((element) => {
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
});

document.querySelector("cn-btn").addEventListener("click", function () {
  const allCards = document.getElementById("cards");
  allCards.innerHTML = "";
  data
    .filter((e) => e.nationality === "Chinese")
    .forEach((element) => {
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
});

document.querySelector("us-btn").addEventListener("click", function () {
  const allCards = document.getElementById("cards");
  allCards.innerHTML = "";
  data
    .filter((e) => e.nationality === "American")
    .forEach((element) => {
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
});
