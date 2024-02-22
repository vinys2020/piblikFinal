document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.getElementById("togglePassword");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const oldPasswordInput = document.getElementById("oldPassword");

  
  const toggleConfirmPasswordButton = document.getElementById(
    "toggleConfirmPassword"
  );

  togglePasswordButton.addEventListener("click", function () {
    togglePasswordVisibility(passwordInput, togglePasswordButton);
  });



  function togglePasswordVisibility(inputField, toggleButton) {
    const type =
      inputField.getAttribute("type") === "password" ? "text" : "password";
    inputField.setAttribute("type", type);

    // Cambiar el ícono del botón
    if (type === "password") {
      toggleButton.innerHTML = '<i class="bi bi-eye"></i>';
    } else {
      toggleButton.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
  }
});
