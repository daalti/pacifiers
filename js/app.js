const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
const btnMenu = document.querySelector(".header__btn-menu");
const close = document.querySelector(".main-nav-close");
const menu = document.querySelector(".main-nav");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
  header.classList.remove("white", window.scrollY > 0);
});

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("activo");
  body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menu.classList.toggle("activo");
});
