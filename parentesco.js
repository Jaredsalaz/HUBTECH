// Función para cerrar el modal
function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Función para guardar el nuevo parentesco
function guardarParentesco() {
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Aquí puedes agregar la lógica para guardar los datos
    // Simulando una operación de guardado con éxito o error
    const exito = true; // Cambia esto según la lógica de tu aplicación

    if (exito) {
        // Mostrar el modal de confirmación de guardado exitoso
        document.getElementById('modalExito').style.display = 'block';
    } else {
        // Mostrar el modal de error
        document.getElementById('modalError').style.display = 'block';
    }
}

// Función para guardar el registro y mostrar el modal de confirmación
document.getElementById('botonGuardar').addEventListener('click', function() {
    guardarParentesco();
});