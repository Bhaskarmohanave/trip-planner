const burgerMenuBtn = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
const darkModeIcon = document.getElementById("dark-mode-icon");
const main = document.querySelector("main");
const expBtn = document.querySelector(".explore-button");
const hero = document.querySelector(".hero");



burgerMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

console.log("Script loaded successfully.");





expBtn.addEventListener("click", () => {
  hero.style.display = "none";
  main.style.display = "block";
});