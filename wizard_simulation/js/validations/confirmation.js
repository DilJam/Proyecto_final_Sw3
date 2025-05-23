"use strict";

function validate() {
  const confirmacionSi = document.getElementById('confirmacion-si').checked;
  const confirmacionNo = document.getElementById('confirmacion-no').checked;
  const errorDiv = document.getElementById('error-step-8');

  if (!confirmacionSi && !confirmacionNo) {
    errorDiv.textContent = 'Debe confirmar si el destinatario recibió la mercancía.';
    return false;
  }
  errorDiv.textContent = '';
  return true;
}

export { validate };
