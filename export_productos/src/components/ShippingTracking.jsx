import { useState, useEffect } from 'react'

export default function ShippingTracking({ data, updateData }) {
  const [envio, setEnvio] = useState({
    numeroGuia: '',
    estadoEnvio: '',
    fechaEnvio: ''
  })

  useEffect(() => {
    if (data) {
      setEnvio({
        numeroGuia: data.numeroGuia || '',
        estadoEnvio: data.estadoEnvio || '',
        fechaEnvio: data.fechaEnvio || ''
      })
    }
  }, [data])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEnvio((prev) => ({ ...prev, [name]: value }))
    updateData({ ...envio, [name]: value })
  }

  return (
    <div>
      <h3>Envío y Seguimiento</h3>
      <label>
        Número de Guía:
        <input
          type="text"
          name="numeroGuia"
          value={envio.numeroGuia}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Estado del Envío:
        <select name="estadoEnvio" value={envio.estadoEnvio} onChange={handleChange}>
          <option value="">Seleccione</option>
          <option value="en_transito">En tránsito</option>
          <option value="entregado">Entregado</option>
          <option value="retrasado">Retrasado</option>
        </select>
      </label>
      <br />
      <label>
        Fecha de Envío:
        <input
          type="date"
          name="fechaEnvio"
          value={envio.fechaEnvio}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}
