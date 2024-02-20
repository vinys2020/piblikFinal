document.addEventListener("DOMContentLoaded", function () {
  var isLoggedIn = false; 

  var navOptions = document.querySelectorAll(".navbar-nav a");

  navOptions.forEach(function (option) {

    if (option.classList.contains("nav-link") && !option.classList.contains("modal-trigger")) {

      if (option.getAttribute("data-auth") === "true" && !isLoggedIn) {

        option.setAttribute("href", "javascript:void(0);");
        option.addEventListener("click", function () {
          alert("Debes iniciar sesión para acceder a esta opción.");
        });
      }
    }
  });
});
