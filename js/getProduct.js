//! Script to get a specific product
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
