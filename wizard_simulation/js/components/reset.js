"use strict";

function resetForm() {
  document.querySelectorAll('input, select').forEach(el => {
    if (el.type === 'checkbox' || el.type === 'radio') {
      el.checked = false;
    } else {
      el.value = '';
    }
  });
  const errorDivs = document.querySelectorAll('.error');
  errorDivs.forEach(div => div.textContent = '');
  const resumenEnvioDiv = document.getElementById('resumen-envio');
  if (resumenEnvioDiv) resumenEnvioDiv.textContent = '';
}

export { resetForm };
