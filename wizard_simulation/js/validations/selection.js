"use strict";

function validate() {
  const producto = document.getElementById('producto').value;
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const paisDestino = document.getElementById('pais-destino').value;
  const errorDiv = document.getElementById('error-step-2');

  if (!producto) {
    errorDiv.textContent = 'Debe seleccionar un producto.';
    return false;
  }
  if (isNaN(cantidad) || cantidad <= 0) {
    errorDiv.textContent = 'La cantidad debe ser mayor que cero.';
    return false;
  }
  if (!paisDestino) {
    errorDiv.textContent = 'Debe seleccionar un país de destino.';
    return false;
  }
  errorDiv.textContent = '';
  return true;
}

export { validate };
