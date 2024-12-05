//! Collapsible for the product page
const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    const removeIcon = this.querySelector(".remove-icon");
    const addIcon = this.querySelector(".add-icon");
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
