function showMobileMenu() {
  mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu.classList.contains("hiddenMenu")) {
    mobileMenu.classList.remove("hiddenMenu");
    mobileMenu.classList.add("visibleMenu");
  } else {
    mobileMenu.classList.remove("visibleMenu");
    mobileMenu.classList.add("hiddenMenu");
  }
}