document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".product");
  console.log("Container element:", container);
  const productTemplate = document.querySelector("[data-product]");

  fetch("../json/flowers.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("data for product", data);
      data.forEach((item) => {
        if (item.id == container.id) {
          const product = productTemplate.content.cloneNode(true);
          console.log("klonad produkt:", product.outerHTML);
          console.log("item data:", item);
          console.log("helluuuu", product);
          const img = product.querySelector("[data-image]");
          console.log("found img element:", img);
          const header = product.querySelector("[data-header]");
          console.log("found img element:", img);
          console.log("found header element:", header);

          img.setAttribute("src", `../${item.image}`);
          header.textContent = item.name;
          container.append(product);
        }
      });
    });
});
