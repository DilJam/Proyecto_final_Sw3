"use strict";

const steps = document.querySelectorAll('.step');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentStep = 0;

function showStep(n) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === n);
  });
  prevBtn.disabled = n === 0;
  nextBtn.style.display = n === steps.length - 1 ? 'none' : 'inline-block';
  prevBtn.style.display = n === steps.length - 1 ? 'none' : 'inline-block';
}

function validateStep(n) {
  clearError(n);
  switch (n) {
    case 0:
      if (!document.getElementById('empresa-nombre').value.trim()) {
        showError(n, 'El nombre de la empresa es obligatorio.');
        return false;
      }
      if (!document.getElementById('empresa-nit').value.trim()) {
        showError(n, 'El NIT es obligatorio.');
        return false;
      }
      if (!document.getElementById('empresa-direccion').value.trim()) {
        showError(n, 'La dirección es obligatoria.');
        return false;
      }
      if (!document.getElementById('empresa-contacto').value.trim()) {
        showError(n, 'El contacto es obligatorio.');
        return false;
      }
      if (!document.getElementById('empresa-email').value.trim()) {
        showError(n, 'El e-mail es obligatorio.');
        return false;
      }
      const email = document.getElementById('empresa-email').value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError(n, 'El formato del e-mail no es válido.');
        return false;
      }
      return true;
    case 1:
      if (!document.getElementById('producto').value) {
        showError(n, 'Debe seleccionar un producto.');
        return false;
      }
      const cantidad = parseFloat(document.getElementById('cantidad').value);
      if (isNaN(cantidad) || cantidad <= 0) {
        showError(n, 'La cantidad debe ser mayor que cero.');
        return false;
      }
      if (!document.getElementById('pais-destino').value) {
        showError(n, 'Debe seleccionar un país de destino.');
        return false;
      }
      return true;
    case 3:
      if (!document.getElementById('transporte').value) {
        showError(n, 'El método de transporte es obligatorio.');
        return false;
      }
      return true;
    case 4:
      return true;
    case 5:
      if (!document.querySelector('input[name="aduanas"]:checked')) {
        showError(n, 'Debe seleccionar Sí o No para la aprobación de permisos aduaneros.');
        return false;
      }
      return true;
    case 7:
      if (!document.querySelector('input[name="confirmacion"]:checked')) {
        showError(n, 'Debe confirmar si el destinatario recibió la mercancía.');
        return false;
      }
      return true;
    default:
      return true;
  }
}

function showError(stepIndex, message) {
  const errorDiv = document.getElementById('error-step-' + (stepIndex + 1));
  if (errorDiv) {
    errorDiv.textContent = message;
  }
}

function clearError(stepIndex) {
  const errorDiv = document.getElementById('error-step-' + (stepIndex + 1));
  if (errorDiv) {
    errorDiv.textContent = '';
  }
}

export { currentStep, showStep, validateStep, showError, clearError };
