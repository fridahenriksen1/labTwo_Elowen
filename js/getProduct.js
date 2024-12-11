//! //! fetch for the flowers.json
const container = document.querySelector(".product");
const productTemplate = document.querySelector("[data-product]");

fetch("../json/flowers.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("data for product", data);
    data.forEach((item) => {
      if (item.id == container.id) {
        const product = productTemplate.content.cloneNode(true);
        const img = product.querySelector("[data-image]");
        console.log("found img element:", img);
        const header = product.querySelector("[data-header]");
        const description = product.querySelector("[data-description]");

        img.setAttribute("src", `../${item.image}`);
        header.textContent = item.name;
        description.textContent = item.description;

        container.append(product);
      }
    });
  });
//! fetch for the fake store api
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      if (item.id == container.id) {
        const price = document.querySelector("[data-price]");
        const rating = document.querySelector("[data-rating]");
        const count = document.querySelector("[data-count]");

        price.textContent = `${item.price} SEK`;
        rating.textContent = item.rating.rate;
        count.textContent = `${item.rating.count} i lager`;
      }
    });
    console.log(data);
  });
