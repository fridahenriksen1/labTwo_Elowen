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

//! function and template to get the cards
const dataUserCards = document.querySelector("[data-user-cards]");
const dataTemplate = document.querySelector("[data-template]");

let fetchData = [];
let products = [];

function getCard() {
  const maxCardsToShow = 9;
  if (!fetchData.length) {
    console.warn("No data in fetchData array.");
    return;
  }

  products = fetchData.slice(0, maxCardsToShow).map((product) => {
    const card = dataTemplate.content.cloneNode(true).children[0];

    const img = card.querySelector("[data-image]");
    const header = card.querySelector("[data-header]");
    const price = card.querySelector("[data-price]");
    const link = card.querySelector("[data-link]");
    img.setAttribute("src", `${product.image}`);
    header.textContent = product.name;
    //!url to fakestoreapi in json
    price.textContent = product.fakeStoreApiUrl;
    link.setAttribute("href", product.htmlUrl);
    console.log(product.price);
    console.log(card);

    fetch(`https://fakestoreapi.com/products/${product.id}`)
      .then((response) => response.json())
      .then((data) => {
        price.textContent = `${data.price} SEK`;
      });

    dataUserCards.append(card);

    return {
      element: card,
      image: product.image,
      name: product.name,
    };
  });
}
//!fetch to get flowers.json
fetch("json/flowers.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((d) => {
      fetchData.push(d);
    });
    if (dataUserCards) {
      getCard();
    }
  });

//! search in the searchbar
const searchInput = document.querySelector("#product-search");

searchInput.addEventListener("input", (e) => {
  const valuInput = e.target.value.toLowerCase();

  products.filter((flower) => {
    const isVisible = flower.name.toLowerCase().includes(valuInput);
    flower.element.classList.toggle("hide", !isVisible);
  });
});

//! Filter sort

// function sortDropdown(a, b) {
//   return a.price.localCompare(b.price);
// }

// dropdownSort.addEventListener("input", sortDropdown);

// //products.sort(sortDropdown);

// const dropdownSort = document.querySelector("#dropdown-sort");

// const lowPrice = document.querySelector("#low-price");
// const highPrice = document.querySelector("#high-price");

// products.sort((a, b) => {
//   if (lowPrice === "Lägsta pris") {
//     return a.price - b.price;
//   } else if (highPrice === "Högsta pris") {
//     return b.price - a.price;
//   }
// });

//! Category filter

const catergoryFilter = document.querySelector("#categorys");

const chip = document.querySelector(".chip");


function category() {


}
