const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav ul");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "flex";
    menuList.style.flexDirection = "column";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});
