document.addEventListener("DOMContentLoaded", (event) => {
  const burgerIcon = document.querySelector("#nav-burger");
  const navbarMenu = document.querySelector("#nav-menu-items");

  if (burgerIcon && navbarMenu) {
    burgerIcon.addEventListener("click", () => {
      navbarMenu.classList.toggle("is-active");
    });
  }
});
// document.querySelector(".navbar-burger").addEventListener("click", () => {
//   document.querySelector(".navbar-menu").classList.toggle("is-active");
// });
