import { useState, useEffect } from 'react'

export default function TransportContracting({ data, updateData }) {
  const [transport, setTransport] = useState({
    tipoTransporte: '',
    empresaTransporte: '',
    fechaContratacion: ''
  })

  const empresasTransporte = [
    'DHL',
    'FedEx',
    'UPS',
    'Maersk',
    'MSC',
    'CMA CGM'
  ]

  useEffect(() => {
    if (data) {
      setTransport({
        tipoTransporte: data.tipoTransporte || '',
        empresaTransporte: data.empresaTransporte || '',
        fechaContratacion: data.fechaContratacion || ''
      })
    }
  }, [data])

  const handleChange = (e) => {
    const { name, value } = e.target
    setTransport((prev) => ({ ...prev, [name]: value }))
    updateData({ ...transport, [name]: value })
  }

  return (
    <div>
      <h3>Contratación de Transporte</h3>
      <label>
        Tipo de Transporte:
        <select
          name="tipoTransporte"
          value={transport.tipoTransporte}
          onChange={handleChange}
        >
          <option value="">Seleccione</option>
          <option value="aereo">Aéreo</option>
          <option value="maritimo">Marítimo</option>
          <option value="terrestre">Terrestre</option>
        </select>
      </label>
      <br />
      <label>
        Empresa de Transporte:
        <select
          name="empresaTransporte"
          value={transport.empresaTransporte}
          onChange={handleChange}
        >
          <option value="">Seleccione</option>
          {empresasTransporte.map((empresa) => (
            <option key={empresa} value={empresa}>
              {empresa}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Fecha de Contratación:
        <input
          type="date"
          name="fechaContratacion"
          value={transport.fechaContratacion}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}
