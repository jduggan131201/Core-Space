const navEl = document.querySelector(".mainMenu");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("mainMenu--open");
  hamburgerEl.classList.toggle("hamburger--open");
});
