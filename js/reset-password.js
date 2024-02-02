document.addEventListener('DOMContentLoaded', function () {
    var resetPasswordForm = document.getElementById('resetPasswordForm');

    resetPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtiene los valores del formulario
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;

        // Obtiene los usuarios almacenados en el localStorage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Busca el usuario por correo electrónico y nombre de usuario
        const user = storedUsers.find(u => u.email === email && u.username === username);

        if (user) {
            // Muestra la contraseña al usuario en el campo de contraseña
            document.getElementById('password').value = user.password;
        } else {
            // Muestra un mensaje si no se encuentra la cuenta correspondiente
            alert('No se encontró ninguna cuenta con este correo electrónico y nombre de usuario.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const resetPasswordForm = document.getElementById('resetPasswordForm');

    resetPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input values
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const oldPassword = document.getElementById('oldPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Get users from localStorage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Find the user by email and username
        const userIndex = storedUsers.findIndex(u => u.email === email && u.username === username);

        if (userIndex !== -1) {
            // Check if the old password matches
            if (oldPassword === storedUsers[userIndex].password) {
                // Check if the new passwords match
                if (newPassword === confirmPassword) {
                    // Update the user's password in the array
                    storedUsers[userIndex].password = newPassword;

                    // Update localStorage with the modified array
                    localStorage.setItem('users', JSON.stringify(storedUsers));

                    // Show a success message
                    alert('Contraseña actualizada con éxito');

                    // Redirect to the login page or any other page
                    window.location.href = 'index.html';
                } else {
                    alert('Las nuevas contraseñas no coinciden');
                }
            } else {
                alert('La contraseña anterior no es correcta');
            }
        } else {
            alert('No se encontró ninguna cuenta con este correo electrónico y nombre de usuario.');
        }
    });
});
