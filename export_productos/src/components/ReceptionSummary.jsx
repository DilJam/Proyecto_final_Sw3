import { useState, useEffect } from 'react'

export default function ReceptionSummary({ data, allData, updateData }) {
  const [confirmacion, setConfirmacion] = useState({
    recibido: false,
    comentarios: ''
  })

  useEffect(() => {
    if (data) {
      setConfirmacion({
        recibido: data.recibido || false,
        comentarios: data.comentarios || ''
      })
    }
  }, [data])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setConfirmacion((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    updateData({
      ...confirmacion,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div>
      <h3>Confirmación de Recepción y Resumen</h3>
      <label>
        Confirmar Recepción:
        <input
          type="checkbox"
          name="recibido"
          checked={confirmacion.recibido}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Comentarios:
        <textarea
          name="comentarios"
          value={confirmacion.comentarios}
          onChange={handleChange}
          style={{ width: '100%', minHeight: '80px', padding: '8px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>

      <h4 style={{ marginTop: '20px', borderBottom: '2px solid #3498db', paddingBottom: '5px', color: '#2c3e50' }}>Resumen del Proceso</h4>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        color: '#2c3e50',
        fontSize: '1rem',
        lineHeight: '1.5',
        maxHeight: '400px',
        overflowY: 'auto'
      }}>
        <h5 style={{ marginTop: '10px', marginBottom: '5px', color: '#34495e', borderBottom: '1px solid #bdc3c7', paddingBottom: '3px' }}>Datos Personales</h5>
        <p><strong>Nombre:</strong> {allData.personalData.nombre}</p>
        <p><strong>Email:</strong> {allData.personalData.email}</p>
        <p><strong>Teléfono:</strong> {allData.personalData.telefono}</p>

        <h5 style={{ marginTop: '10px', marginBottom: '5px', color: '#34495e', borderBottom: '1px solid #bdc3c7', paddingBottom: '3px' }}>Datos del Producto</h5>
        <p><strong>Nombre del Producto:</strong> {allData.productData.nombreProducto}</p>
        <p><strong>Cantidad:</strong> {allData.productData.cantidad}</p>
        <p><strong>Descripción:</strong> {allData.productData.descripcion}</p>

        <h5 style={{ marginTop: '10px', marginBottom: '5px', color: '#34495e', borderBottom: '1px solid #bdc3c7', paddingBottom: '3px' }}>Documentos</h5>
        <p><strong>Factura Comercial:</strong> {allData.documents.facturaComercial ? 'Sí' : 'No'}</p>
        <p><strong>Lista de Empaque:</strong> {allData.documents.listaEmpaque ? 'Sí' : 'No'}</p>
        <p><strong>Certificado de Origen:</strong> {allData.documents.certificadoOrigen ? 'Sí' : 'No'}</p>

        <h5 style={{ marginTop: '10px', marginBottom: '5px', color: '#34495e', borderBottom: '1px solid #bdc3c7', paddingBottom: '3px' }}>Transporte</h5>
        <p><strong>Tipo de Transporte:</strong> {allData.transport.tipoTransporte}</p>
        <p><strong>Empresa de Transporte:</strong> {allData.transport.empresaTransporte}</p>
        <p><strong>Fecha de Contratación:</strong> {allData.transport.fechaContratacion}</p>

        <h5 style={{ marginTop: '10px', marginBottom: '5px', color: '#34495e', borderBottom: '1px solid #bdc3c7', paddingBottom: '3px' }}>Embalaje</h5>
        <p><strong>Tipo de Embalaje:</strong> {allData.packaging.tipoEmbalaje}</p>
        <p><strong>Confirmado:</strong> {allData.packaging.confirmado ? 'Sí' : 'No'}</p>

        <h5 style={{ marginTop: '10px', marginBottom: '5px', color: '#34495e', borderBottom: '1px solid #bdc3c7', paddingBottom: '3px' }}>Aduanas</h5>
        <p><strong>Agente Aduanal:</strong> {allData.customs.agenteAduanal}</p>
        <p><strong>Número de Declaración:</strong> {allData.customs.numeroDeclaracion}</p>
        <p><strong>Estado:</strong> {allData.customs.estado}</p>

        <h5 style={{ marginTop: '10px', marginBottom: '5px', color: '#34495e', borderBottom: '1px solid #bdc3c7', paddingBottom: '3px' }}>Envío y Seguimiento</h5>
        <p><strong>Número de Guía:</strong> {allData.shipping.numeroGuia}</p>
        <p><strong>Estado del Envío:</strong> {allData.shipping.estadoEnvio}</p>
        <p><strong>Fecha de Envío:</strong> {allData.shipping.fechaEnvio}</p>
      </div>
    </div>
  )
}
