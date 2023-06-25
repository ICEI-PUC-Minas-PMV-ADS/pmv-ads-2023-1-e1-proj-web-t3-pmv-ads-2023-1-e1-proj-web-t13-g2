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

window.onload = function () {
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    let linkcadastropet = document.querySelectorAll(".linkcadastropet");
    linkcadastropet.forEach(function(element) {
      element.classList.remove("hidden");
    });
    
    let linkadotar = document.querySelectorAll(".linkadotar");
    linkadotar.forEach(function(element) {
      element.classList.remove("hidden");
    });
  } else {
    let linkcadastropet = document.querySelectorAll(".linkcadastropet");
    linkcadastropet.forEach(function(element) {
      element.classList.add("hidden");
    });
    
    let linkadotar = document.querySelectorAll(".linkadotar");
    linkadotar.forEach(function(element) {
      element.classList.add("hidden");
    });
  }
};
