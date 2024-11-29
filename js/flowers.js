//!fetch to get flowers.json

const dataUserCards = document.querySelector("[data-user-cards]");
const dataTemplate = document.querySelector("[data-template]");

let fetchData = [];

function getCard() {
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
      getCard();
    }
  });
