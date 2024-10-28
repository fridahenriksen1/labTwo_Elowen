// ! Product data for the cards in index (array with products)
let defineProductCards = [
  { imageUrl1: "img/cutFlowers.jpg", description: "Snittblommor" },
  { imageUrl1: "img/bridalBouquet.jpg", description: "Brudbukett" },
  { imageUrl1: "img/pottedPlants.jpg", description: "Krukväxter" },
  { imageUrl1: "img/GardenFlowers.jpg", description: "Trädgårdsblommor" },
  { imageUrl1: "img/coffinDecoration.jpg" },
  { imageUrl1: "img/mourningDecoration.jpg", description: "Sorgdekorationer" },
];

console.log(defineProductCards);
let getProducts = function () {
  let buildProductArchive = "";
  buildProductArchive += '<section class="section-flower-pic">';

  for (let i = 0; i < defineProductCards.length; i++) {
    buildProductArchive += `<article class="card"><imgclass="border-radius-top"src=${defineProductCards[i].imageUrl1}alt="An picture of cut flowers"/><div class="center">${defineProductCards[i].description}</div></article>`;
  }
  buildProductArchive += "</section>";
};

// '<article class="card"><imgclass="border-radius-top"src="img/cutFlowers.jpg"alt="An picture of cut flowers"/><div class="center">Snittblommor</div></article>';
