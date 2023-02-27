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

document.querySelector("#kor-btn").addEventListener("click", function () {
  const allCards = document.getElementById("cards");
  allCards.innerHTML = "";
  let koreans = [];
  let i = 0;
  while (i < data.length) {
    if (data[i].nationality === "Korean") {
      koreans.push(data[i]);
    }
    i++;
  }
  koreans.forEach((element) => {
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

document.querySelector("#cn-btn").addEventListener("click", function () {
  const allCards = document.getElementById("cards");
  allCards.innerHTML = "";
  let china = [];
  let i = 0;
  while (i < data.length) {
    if (data[i].nationality === "Chinese") {
      china.push(data[i]);
    }
    i++;
  }
  china.forEach((element) => {
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

document.querySelector("#us-btn").addEventListener("click", function () {
  const allCards = document.getElementById("cards");
  allCards.innerHTML = "";
  let americans = [];
  let i = 0;
  while (i < data.length) {
    if (data[i].nationality === "American") {
      americans.push(data[i]);
    }
    i++;
  }
  americans.forEach((element) => {
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

document.querySelector("#all-btn").addEventListener("click", function () {
  const allCards = document.getElementById("cards");
  allCards.innerHTML = "";
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
});
