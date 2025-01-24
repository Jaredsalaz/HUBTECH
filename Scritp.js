// Redirigir a otra página o componente
function redirigir() {
    window.location.href = "formulario2.html";
}

// Mostrar ventana de identificación
function mostrarVentana() {
    document.getElementById('ventanaIdentificacion').style.display = 'block';
}

function ocultarVentana() {
    document.getElementById('ventanaIdentificacion').style.display = 'none';
}

// Redirigir a formulario3.html
function FotosRedirigir() {
    window.location.href = "formulario3.html";
}

// Función para guardar el registro y mostrar el modal de confirmación
function guardarRegistro() {
    // Aquí puedes agregar la lógica para guardar el registro
    const exito = true; // Cambia esto según la lógica de tu aplicación

    if (exito) {
        // Mostrar el modal de confirmación de guardado exitoso
        document.getElementById('modalConfirmacion').style.display = 'block';
        setTimeout(function() {
            window.location.href = 'formulario_familiares.html';
        }, 2000); // Redirigir después de 2 segundos
    } else {
        // Mostrar el modal de error
        document.getElementById('modalConfirmacion-no').style.display = 'block';
    }
}