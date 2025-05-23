"use strict";

function validate() {
  const nombre = document.getElementById('empresa-nombre').value.trim();
  const nit = document.getElementById('empresa-nit').value.trim();
  const direccion = document.getElementById('empresa-direccion').value.trim();
  const contacto = document.getElementById('empresa-contacto').value.trim();
  const email = document.getElementById('empresa-email').value.trim();
  const errorDiv = document.getElementById('error-step-1');

  if (!nombre) {
    errorDiv.textContent = 'El nombre de la empresa es obligatorio.';
    return false;
  }
  if (!nit) {
    errorDiv.textContent = 'El NIT es obligatorio.';
    return false;
  }
  if (!direccion) {
    errorDiv.textContent = 'La dirección es obligatoria.';
    return false;
  }
  if (!contacto) {
    errorDiv.textContent = 'El contacto es obligatorio.';
    return false;
  }
  if (!email) {
    errorDiv.textContent = 'El e-mail es obligatorio.';
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorDiv.textContent = 'El formato del e-mail no es válido.';
    return false;
  }
  errorDiv.textContent = '';
  return true;
}

export { validate };
