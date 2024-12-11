//! Collapsible for the product page
const collapsible = document.querySelectorAll(".collapsible");

for (i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function (e) {
    const element = e.currentTarget;
    element.classList.toggle("active");
    const content = element.nextElementSibling;
    const removeIcon = element.querySelector(".remove-icon");
    const addIcon = element.querySelector(".add-icon");
    if (content.style.maxHeight) {
      //* show addIcon
      content.style.maxHeight = null;
      removeIcon.style.display = "none";
      addIcon.style.display = "block";
    } else {
      //* show removeIcon
      content.style.maxHeight = content.scrollHeight + "px";
      removeIcon.style.display = "block";
      addIcon.style.display = "none";
    }
  });
}
