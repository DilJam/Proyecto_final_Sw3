"use strict";

function validate() {
  const transporte = document.getElementById('transporte').value;
  const errorDiv = document.getElementById('error-step-4');

  if (!transporte) {
    errorDiv.textContent = 'El método de transporte es obligatorio.';
    return false;
  }
  errorDiv.textContent = '';
  return true;
}

export { validate };
