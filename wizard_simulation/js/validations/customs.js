"use strict";

function validate() {
  const aduanasSi = document.getElementById('aduanas-si').checked;
  const aduanasNo = document.getElementById('aduanas-no').checked;
  const errorDiv = document.getElementById('error-step-6');

  if (!aduanasSi && !aduanasNo) {
    errorDiv.textContent = 'Debe seleccionar Sí o No para la aprobación de permisos aduaneros.';
    return false;
  }
  errorDiv.textContent = '';
  return true;
}

function setupCustomsApproval(nextBtn) {
  const aduanasRadios = document.querySelectorAll('input[name="aduanas"]');
  const errorDiv = document.getElementById('error-step-6');

  aduanasRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'No') {
        errorDiv.textContent = 'Permisos aduaneros denegados. No se puede continuar.';
        nextBtn.disabled = true;
      } else {
        errorDiv.textContent = '';
        nextBtn.disabled = false;
      }
    });
  });
}

export { validate, setupCustomsApproval };
