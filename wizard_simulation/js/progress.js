"use strict";

const progressBar = document.getElementById('progress-bar');

let envioInterval = null;
let progress = 0;

function startEnvio() {
  if (envioInterval) return;
  progress = 0;
  progressBar.style.width = '0%';
  envioInterval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(envioInterval);
      envioInterval = null;
      alert('Envío completado');
    } else {
      progress += 10;
      progressBar.style.width = progress + '%';
    }
  }, 500);
}

function resetProgress() {
  progress = 0;
  progressBar.style.width = '0%';
}

export { startEnvio, resetProgress, progress };
