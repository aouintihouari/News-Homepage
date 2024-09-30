const hamburgerMenuClose = document.querySelector(".hamburger-menu-close");
const hamburgerMenuOpen = document.querySelector(".hamburger-menu-open");
const navigation = document.querySelector(".nav-bar");
const overlay = document.querySelector(".overlay");

hamburgerMenuOpen.addEventListener("click", () => {
  hamburgerMenuOpen.style.display = "none";
  hamburgerMenuClose.style.display = "flex";
  navigation.style.display = "flex";
  navigation.classList.add("active");
  overlay.style.display = "block";
});

hamburgerMenuClose.addEventListener("click", () => {
  hamburgerMenuClose.style.display = "none";
  hamburgerMenuOpen.style.display = "flex";
  navigation.style.display = "none";
  navigation.classList.remove("active");
  overlay.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburgerMenuOpen.style.display = "none";
    hamburgerMenuClose.style.display = "none";
    navigation.style.display = "flex";
    navigation.classList.remove("active");
  } else {
    hamburgerMenuOpen.style.display = "block";
    navigation.style.display = "none";
  }
});
