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
        img.setAttribute("src", `../${item.image}`);
        header.textContent = item.name;
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

        price.textContent = item.price;
        rating.textContent = item.rating.rate;
        count.textContent = item.rating.count;
      }
    });
    console.log(data);
    //! Hämtar priset i första id:t
    // document.querySelector(".price-card").textContent = data[0].price;
  });