// Función para abrir el modal de nuevo parentesco
document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modalParentesco').style.display = 'block';
});

// Función para cerrar el modal de nuevo parentesco
function cerrarModalParentesco() {
    document.getElementById('modalParentesco').style.display = 'none';
}

// Función para guardar el nuevo parentesco
function guardarParentesco() {
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Aquí puedes agregar la lógica para guardar los datos

    // Cerrar el modal
    cerrarModalParentesco();
}

// Función para eliminar una fila de la tabla
function eliminarFila(element) {
    const row = element.closest('tr');
    row.parentNode.removeChild(row);
}

// Función para guardar el registro y mostrar el modal de confirmación
document.getElementById('botonGuardar').addEventListener('click', function() {
    // Aquí puedes agregar la lógica para guardar el registro

    // Mostrar el modal de confirmación
    document.getElementById('nuevoModal').style.display = 'block';
});

// Función para cerrar el modal de confirmación
document.getElementById('aceptarBtn').addEventListener('click', function() {
    document.getElementById('nuevoModal').style.display = 'none';
});