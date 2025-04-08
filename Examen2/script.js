// Función para validar el formulario de creación de cuenta
function validarFormulario(event) {
    // Validación de teléfono con el formato xxx xx xx xx
    const telefono = document.getElementById('telefono').value;
    const telefonoRegex = /^\d{3} \d{2} \d{2} \d{2}$/;
    
    if (!telefonoRegex.test(telefono)) {
        alert('El formato del teléfono no es válido. Debe ser xxx xx xx xx.');
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }

    // Validación de aceptación de los términos
    const aceptarTerminos = document.getElementById('aceptar-terminos').checked;
    if (!aceptarTerminos) {
        alert('Debe aceptar los términos de protección de datos.');
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }

    // Si todas las validaciones son correctas, se muestra un mensaje de éxito
    alert('Cuenta creada exitosamente. Ahora puede seleccionar un libro.');
    return true;
}

// Función para calcular el precio con IVA
function calcularIVA() {
    const precio = parseFloat(document.getElementById('precio').value);
    const ivaSeleccionado = document.getElementById('iva').value;
    let iva = 0;

    // Determinar el porcentaje de IVA según la selección
    if (ivaSeleccionado === 'reducido') {
        iva = 0.10; // IVA Reducido (10%)
    } else if (ivaSeleccionado === 'normal') {
        iva = 0.21; // IVA Normal (21%)
    }

    // Calcular el precio final con IVA
    const precioConIVA = precio + (precio * iva);
    
    // Mostrar el resultado en el campo correspondiente
    document.getElementById('resultado').value = precioConIVA.toFixed(2);
}
