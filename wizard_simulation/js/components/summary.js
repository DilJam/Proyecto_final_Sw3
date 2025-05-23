"use strict";

function fillSummary() {
  const summaryDiv = document.getElementById('summary');
  const empresaNombre = document.getElementById('empresa-nombre').value.trim();
  const empresaNIT = document.getElementById('empresa-nit').value.trim();
  const empresaDireccion = document.getElementById('empresa-direccion').value.trim();
  const empresaContacto = document.getElementById('empresa-contacto').value.trim();
  const empresaEmail = document.getElementById('empresa-email').value.trim();

  const producto = document.getElementById('producto').value;
  const cantidad = document.getElementById('cantidad').value;
  const paisDestinoSelect = document.getElementById('pais-destino');
  const paisDestino = paisDestinoSelect.value;
  const paisCosto = paisDestinoSelect.options[paisDestinoSelect.selectedIndex]?.getAttribute('data-costo') || 'No especificado';

  const docs = [];
  if (document.getElementById('doc-factura').checked) docs.push('Factura comercial');
  if (document.getElementById('doc-empaque').checked) docs.push('Lista de empaque');
  if (document.getElementById('doc-certificado').checked) docs.push('Certificado de origen');

  const transporte = document.getElementById('transporte').value;

  const embalaje = document.querySelector('input[name="embalaje"]:checked')?.value || 'No especificado';
  const aduanas = document.querySelector('input[name="aduanas"]:checked')?.value || 'No especificado';

  const confirmacion = document.querySelector('input[name="confirmacion"]:checked')?.value || 'No especificado';

  let envioEstado = 'No iniciado';
  if (window.progress >= 100) {
    envioEstado = 'Envío completado';
  } else if (window.progress > 0) {
    envioEstado = 'Envío en progreso';
  }

  summaryDiv.innerHTML = `
    <h3>Datos de la Empresa</h3>
    <p><strong>Nombre:</strong> ${empresaNombre}</p>
    <p><strong>NIT:</strong> ${empresaNIT}</p>
    <p><strong>Dirección:</strong> ${empresaDireccion}</p>
    <p><strong>Contacto:</strong> ${empresaContacto}</p>
    <p><strong>E-mail:</strong> ${empresaEmail}</p>

    <h3>Producto y Destino</h3>
    <p><strong>Producto:</strong> ${producto}</p>
    <p><strong>Cantidad (toneladas):</strong> ${cantidad}</p>
    <p><strong>País de destino:</strong> ${paisDestino}</p>
    <p><strong>Costo de envío:</strong> $${paisCosto}</p>

    <h3>Documentación</h3>
    <p>${docs.length > 0 ? docs.join(', ') : 'Ninguno'}</p>

    <h3>Transporte</h3>
    <p>${transporte}</p>

    <h3>Embalaje</h3>
    <p>${embalaje}</p>

    <h3>Aduanas</h3>
    <p>${aduanas}</p>

    <h3>Estado del Envío</h3>
    <p>${envioEstado}</p>

    <h3>Confirmación de Recepción</h3>
    <p>${confirmacion}</p>
  `;
}

function printSummary() {
  const printContents = document.getElementById('summary').innerHTML;
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}

function downloadSummary() {
  const summaryText = document.getElementById('summary').innerText;
  const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resumen_exportacion.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function showDestinationSummary() {
  const paisDestinoSelect = document.getElementById('pais-destino');
  const resumenEnvioDiv = document.getElementById('resumen-envio');
  const selectedOption = paisDestinoSelect.options[paisDestinoSelect.selectedIndex];
  const pais = selectedOption.value;
  const costo = selectedOption.getAttribute('data-costo');
  if (pais) {
    resumenEnvioDiv.textContent = `Resumen: Envío a ${pais} con costo de envío $${costo}`;
  } else {
    resumenEnvioDiv.textContent = '';
  }
}

export { fillSummary, printSummary, downloadSummary, showDestinationSummary };
