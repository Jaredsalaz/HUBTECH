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

    // Mostrar el modal de confirmación
    document.getElementById('modalConfirmacion').style.display = 'block';

    document.getElementById('modalConfirmacion-no').style.display = 'block';
}

// Función para cerrar el modal de confirmación
function cerrarModal() {
    document.getElementById('modalConfirmacion').style.display = 'none';
    document.getElementById('modalConfirmacion-no').style.display = 'none';
}