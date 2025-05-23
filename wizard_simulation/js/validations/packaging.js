"use strict";

function validate() {
  const embalajeSi = document.getElementById('embalaje-si').checked;
  const embalajeNo = document.getElementById('embalaje-no').checked;
  const errorDiv = document.getElementById('error-step-5');

  if (!embalajeSi && !embalajeNo) {
    errorDiv.textContent = 'Debe confirmar si el embalaje cumple con estándares internacionales.';
    return false;
  }
  errorDiv.textContent = '';
  return true;
}

export { validate };
