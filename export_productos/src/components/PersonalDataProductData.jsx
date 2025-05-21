import { useState, useEffect } from 'react'

export default function PersonalDataProductData({ data, updateData }) {
  const [personalData, setPersonalData] = useState({
    nombre: '',
    email: '',
    telefono: ''
  })
  const [productData, setProductData] = useState({
    nombreProducto: '',
    cantidad: '',
    descripcion: ''
  })

  useEffect(() => {
    if (data) {
      setPersonalData({
        nombre: data.nombre || '',
        email: data.email || '',
        telefono: data.telefono || ''
      })
      setProductData({
        nombreProducto: data.nombreProducto || '',
        cantidad: data.cantidad || '',
        descripcion: data.descripcion || ''
      })
    }
  }, [data])

  const handlePersonalChange = (e) => {
    const { name, value } = e.target
    setPersonalData((prev) => ({ ...prev, [name]: value }))
    updateData({ personalData: { ...personalData, [name]: value }, productData })
  }

  const handleProductChange = (e) => {
    const { name, value } = e.target
    setProductData((prev) => ({ ...prev, [name]: value }))
    updateData({ personalData, productData: { ...productData, [name]: value } })
  }

  return (
    <div>
      <h3>Datos Personales</h3>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={personalData.nombre}
          onChange={handlePersonalChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={personalData.email}
          onChange={handlePersonalChange}
        />
      </label>
      <br />
      <label>
        Teléfono:
        <input
          type="tel"
          name="telefono"
          value={personalData.telefono}
          onChange={handlePersonalChange}
        />
      </label>

      <h3>Datos del Producto</h3>
      <label>
        Nombre del Producto:
        <input
          type="text"
          name="nombreProducto"
          value={productData.nombreProducto}
          onChange={handleProductChange}
        />
      </label>
      <br />
      <label>
        Cantidad:
        <input
          type="number"
          name="cantidad"
          value={productData.cantidad}
          onChange={handleProductChange}
        />
      </label>
      <br />
      <label>
        Descripción:
        <textarea
          name="descripcion"
          value={productData.descripcion}
          onChange={handleProductChange}
        />
      </label>
    </div>
  )
}
