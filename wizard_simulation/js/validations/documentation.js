"use strict";

function validate() {
  const factura = document.getElementById('doc-factura').checked;
  const empaque = document.getElementById('doc-empaque').checked;
  const certificado = document.getElementById('doc-certificado').checked;
  const errorDiv = document.getElementById('error-step-3');

  if (!factura && !empaque && !certificado) {
    errorDiv.textContent = 'Debe seleccionar al menos un documento requerido.';
    return false;
  }
  errorDiv.textContent = '';
  return true;
}

export { validate };
