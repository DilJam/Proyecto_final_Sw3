import { useState, useEffect } from 'react'

export default function DocumentPreparation({ data, updateData }) {
  const [documentos, setDocumentos] = useState({
    facturaComercial: false,
    listaEmpaque: false,
    certificadoOrigen: false
  })

  useEffect(() => {
    if (data) {
      setDocumentos({
        facturaComercial: data.facturaComercial || false,
        listaEmpaque: data.listaEmpaque || false,
        certificadoOrigen: data.certificadoOrigen || false
      })
    }
  }, [data])

  const handleChange = (e) => {
    const { name, checked } = e.target
    setDocumentos((prev) => ({ ...prev, [name]: checked }))
    updateData({ ...documentos, [name]: checked })
  }

  return (
    <div>
      <h3>Preparación de Documentos</h3>
      <label>
        <input
          type="checkbox"
          name="facturaComercial"
          checked={documentos.facturaComercial}
          onChange={handleChange}
        />
        Factura Comercial
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="listaEmpaque"
          checked={documentos.listaEmpaque}
          onChange={handleChange}
        />
        Lista de Empaque
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="certificadoOrigen"
          checked={documentos.certificadoOrigen}
          onChange={handleChange}
        />
        Certificado de Origen
      </label>
    </div>
  )
}
