fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log("data.data[0].medium_display", Array.isArray(data.price));
    console.log(data);
    //! Hämtar priset i första id:t
    document.querySelector(".price-card").textContent = data[0].price;
  });
