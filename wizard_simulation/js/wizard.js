"use strict";

import { validate as validateCompany } from './validations/company.js';
import { validate as validateSelection } from './validations/selection.js';
import { validate as validateDocumentation } from './validations/documentation.js';
import { validate as validateTransport } from './validations/transport.js';
import { validate as validatePackaging } from './validations/packaging.js';
import { validate as validateCustoms, setupCustomsApproval } from './validations/customs.js';
import { startEnvio, resetProgress, progress } from './components/tracking.js';
import { validate as validateConfirmation } from './validations/confirmation.js';
import { fillSummary, printSummary, downloadSummary, showDestinationSummary } from './components/summary.js';
import { resetForm } from './components/reset.js';

let step = 0;
const stepsCount = 10;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const startEnvioBtn = document.getElementById('start-envio');
const btnReiniciar = document.getElementById('btn-reiniciar');
const btnImprimir = document.getElementById('btn-imprimir');
const btnDescargar = document.getElementById('btn-descargar');

function showStep(n) {
  const steps = document.querySelectorAll('.step');
  steps.forEach((stepEl, i) => {
    stepEl.classList.toggle('active', i === n);
  });
  prevBtn.disabled = n === 0;
  nextBtn.style.display = n === stepsCount - 1 ? 'none' : 'inline-block';
  prevBtn.style.display = n === stepsCount - 1 ? 'none' : 'inline-block';

  if (n === stepsCount - 2) {
    fillSummary();
  }
}

function validateStep(n) {
  switch (n) {
    case 0: return validateCompany();
    case 1: return validateSelection();
    case 2: return validateDocumentation();
    case 3: return validateTransport();
    case 4: return validatePackaging();
    case 5: return validateCustoms();
    case 7: return validateConfirmation();
    default: return true;
  }
}

prevBtn.addEventListener('click', () => {
  if (step > 0) {
    step--;
    showStep(step);
  }
});

nextBtn.addEventListener('click', () => {
  if (!validateStep(step)) return;

  if (step === 6) {
    if (progress < 100) {
      alert('Debe iniciar y completar el envío antes de continuar.');
      return;
    }
  }
  if (step === 7) {
    const confirmacion = document.querySelector('input[name="confirmacion"]:checked')?.value;
    if (confirmacion !== 'Sí') {
      alert('Solo se muestra el resumen final si la respuesta es "Sí".');
      return;
    }
  }
  step++;
  showStep(step);
});

startEnvioBtn.addEventListener('click', () => {
  startEnvio();
});

btnReiniciar.addEventListener('click', () => {
  resetForm();
  resetProgress();
  step = 1;
  showStep(step);
});

btnImprimir.addEventListener('click', () => {
  printSummary();
});

btnDescargar.addEventListener('click', () => {
  downloadSummary();
});

const paisDestinoSelect = document.getElementById('pais-destino');
paisDestinoSelect.addEventListener('change', () => {
  showDestinationSummary();
});

setupCustomsApproval(nextBtn);
