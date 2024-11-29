// ! Product data for the cards in index (array with products)
let defineProductCards = [
  { imageUrl1: "img/cutFlowers.jpg", description: "Snittblommor" },
  { imageUrl1: "img/bridalBouquet.jpg", description: "Brudbukett" },
  { imageUrl1: "img/pottedPlants.jpg", description: "Krukväxter" },
  { imageUrl1: "img/GardenFlowers.jpg", description: "Trädgårdsblommor" },
  { imageUrl1: "img/coffinDecoration.jpg", description: "Kistdekorationer" },
  { imageUrl1: "img/mourningDecoration.jpg", description: "Sorgdekorationer" },
];
console.log(defineProductCards);

//! Function to build the section for the cards and the flower cards in it, and a switch to set the right class to the img to get the right border radius
let getProducts = function () {
  let buildProductArchive = "";
  buildProductArchive += '<section class="section-flower-pic">';

  for (let i = 0; i < defineProductCards.length; i++) {
    let imageClass = "";

    switch (i) {
      case 0:
        imageClass = "border-radius-top";
        break;
      case 1:
        imageClass = "border-radius-topTwo";
        break;
      case 2:
        imageClass = "border-radius-topThree";
        break;
      case 3:
        imageClass = "border-radius-btmFour";
        break;
      case 4:
        imageClass = "border-radius-btmTwo";
        break;
      case 5:
        imageClass = "border-radius-btm";
        break;
      default:
    }
    buildProductArchive += `<article class="card">
    <img class= "${imageClass}" src=${defineProductCards[i].imageUrl1} alt="An picture of cut flowers"/><div class="center">${defineProductCards[i].description}</div></article>`;
  }
  buildProductArchive += "</section>";
  let containerCards = document.querySelector(".section-text");
  containerCards.insertAdjacentHTML("afterend", buildProductArchive);
};

//!fetch to get flowers.json

const dataUserCards = document.querySelector("[data-user-cards]");
const dataTemplate = document.querySelector("[data-template]");

//let products = [];

let fetchData = [];

function getCard() {
  console.log("getCard körs med fetchData:", fetchData); // Kontrollera om getCard körs
  if (!fetchData.length) {
    console.warn("No data in fetchData array.");
    return;
  }
  products = fetchData.map((product) => {
    const card = dataTemplate.content.cloneNode(true).children[0];

    const img = card.querySelector("[data-image]");
    const header = card.querySelector("[data-header]");
    const price = card.querySelector("[data-price]");

    img.setAttribute("src", `${product.image}`);
    header.textContent = product.name;
    price.textContent = product.price;
    console.log(product.price);
    dataUserCards.append(card);
    console.log(card);
    return {
      image: product.image,
      name: product.name,
      price: product.price,
    };
  });
}

fetch("/json/flowers.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((d) => {
      fetchData.push(d);
    });
    if (dataUserCards) {
      console.log("fetchData:", fetchData); // Kontrollera innehållet i fetchData
      getCard();
    }
  });
