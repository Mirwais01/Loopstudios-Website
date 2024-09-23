const hamburgerBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});
