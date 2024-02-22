document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isAuthenticated = checkCredentials(storedUsers, username, password);

    if (isAuthenticated) {

      window.location.href = "pagina.html";

    } else {

      alert("Usuario o contraseña incorrectos. Por favor, verifica e inténtalo nuevamente.");

    }
  });

  var registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isUserRegistered = checkUserRegistration(existingUsers, newUsername, email);

    if (isUserRegistered) {

      alert("El nombre de usuario o email ya está registrado. Por favor, elige otro.");

    } else {

      const newUser = {
        fullName: fullName,
        email: email,
        username: newUsername,
        password: newPassword,
      };

      existingUsers.push(newUser);

      localStorage.setItem("users", JSON.stringify(existingUsers));

      alert(`Nuevo usuario registrado: ${newUsername}`);

      window.location.href = "index.html";
    }
  });

  //verificar las credenciales del usuario
  function checkCredentials(users, username, password) {
    return users.some(user => user.username === username && user.password === password);
  }

  //verificar si el usuario ya está registrado
  function checkUserRegistration(users, username, email) {
    return users.some(user => user.username === username || user.email === email);
  }

  
  
});
