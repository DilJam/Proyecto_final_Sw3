import { useState, useEffect } from 'react'

export default function PackagingConfirmation({ data, updateData }) {
  const [embalaje, setEmbalaje] = useState({
    tipoEmbalaje: '',
    confirmado: false
  })

  const tiposEmbalaje = [
    'Caja de madera',
    'Caja de cartón',
    'Palet',
    'Bolsa',
    'Tambor'
  ]

  useEffect(() => {
    if (data) {
      setEmbalaje({
        tipoEmbalaje: data.tipoEmbalaje || '',
        confirmado: data.confirmado || false
      })
    }
  }, [data])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setEmbalaje((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    updateData({
      ...embalaje,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div>
      <h3>Confirmación de Embalaje</h3>
      <label>
        Tipo de Embalaje:
        <select
          name="tipoEmbalaje"
          value={embalaje.tipoEmbalaje}
          onChange={handleChange}
        >
          <option value="">Seleccione</option>
          {tiposEmbalaje.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Confirmado:
        <input
          type="checkbox"
          name="confirmado"
          checked={embalaje.confirmado}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}
