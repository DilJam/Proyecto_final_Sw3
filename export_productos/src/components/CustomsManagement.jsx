import { useState, useEffect } from 'react'

export default function CustomsManagement({ data, updateData }) {
  const [aduanas, setAduanas] = useState({
    agenteAduanal: '',
    numeroDeclaracion: '',
    estado: ''
  })

  useEffect(() => {
    if (data) {
      setAduanas({
        agenteAduanal: data.agenteAduanal || '',
        numeroDeclaracion: data.numeroDeclaracion || '',
        estado: data.estado || ''
      })
    }
  }, [data])

  const handleChange = (e) => {
    const { name, value } = e.target
    setAduanas((prev) => ({ ...prev, [name]: value }))
    updateData({ ...aduanas, [name]: value })
  }

  return (
    <div>
      <h3>Gestión de Aduanas</h3>
      <label>
        Agente Aduanal:
        <input
          type="text"
          name="agenteAduanal"
          value={aduanas.agenteAduanal}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Número de Declaración:
        <input
          type="text"
          name="numeroDeclaracion"
          value={aduanas.numeroDeclaracion}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Estado:
        <select name="estado" value={aduanas.estado} onChange={handleChange}>
          <option value="">Seleccione</option>
          <option value="pendiente">Pendiente</option>
          <option value="aprobado">Aprobado</option>
          <option value="rechazado">Rechazado</option>
        </select>
      </label>
    </div>
  )
}
