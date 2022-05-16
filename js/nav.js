const burgerIcon = document.querySelector("#nav-burger");
const navMenu = document.querySelector("#nav-menu");
const selectedNav = document.querySelectorAll(".select");

burgerIcon.addEventListener("click", () => {
  console.log("clicked");
  navMenu.classList.contains("hidden")
    ? navMenu.classList.remove("hidden")
    : navMenu.classList.add("hidden");
});

selectedNav.forEach((e) => {
  e.addEventListener("click", () => {
    console.log("nav item clicked");
    navMenu.classList.add("hidden");
  });
});
