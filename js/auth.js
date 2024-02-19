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
  
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = storedUsers.find(user => user.username === username && user.password === password);

    if (userFound) {

      window.location.href = "pagina.html";
      return;
      
    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  });
});
