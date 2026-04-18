// botones de las cards para abrir una ventana modal
let botones = document.querySelectorAll(".btn-modal");
botones.forEach(boton => {
    boton.addEventListener("click", function () {
        let modal = new bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();
    });
});

// validación del formulario
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let correo = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // valores de prueba
    const USER_DEFAULT = "prueba@gmail.com";
    const PASSWORD_DEFAULT = "123456";

    if (correo === "" || password === "") {
        message.innerHTML = "¡Todos los campos son obligatorios!";
        message.className = "text-warning";
    } 
    else if (correo === USER_DEFAULT && password === PASSWORD_DEFAULT) {
        message.innerHTML = "Bienvenido al sistema";
        message.className = "text-success";
    } 
    else {
        message.innerHTML = "Error: Usuario o contraseña inválida!";
        message.className = "text-danger";
    }
});