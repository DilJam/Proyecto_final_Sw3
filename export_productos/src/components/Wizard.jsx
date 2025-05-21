import { useState } from 'react'
import PersonalDataProductData from './PersonalDataProductData'
import DocumentPreparation from './DocumentPreparation'
import TransportContracting from './TransportContracting'
import PackagingConfirmation from './PackagingConfirmation'
import CustomsManagement from './CustomsManagement'
import ShippingTracking from './ShippingTracking'
import ReceptionSummary from './ReceptionSummary'

const steps = [
  'Datos Personales y de Productos',
  'Preparación de Documentos',
  'Contratación de Transporte',
  'Confirmación de Embalaje',
  'Gestión de Aduanas',
  'Envío y Seguimiento',
  'Confirmación de Recepción y Resumen'
]

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    personalData: {},
    productData: {},
    documents: {},
    transport: {},
    packaging: {},
    customs: {},
    shipping: {},
    reception: {}
  })

  const validateStep = () => {
    switch (currentStep) {
      case 0: {
        const { personalData, productData } = formData
        if (
          !personalData.nombre ||
          !personalData.email ||
          !personalData.telefono ||
          !productData.nombreProducto ||
          !productData.cantidad
        ) {
          alert('Por favor complete todos los campos obligatorios en Datos Personales y de Productos.')
          return false
        }
        return true
      }
      case 1: {
        const { facturaComercial, listaEmpaque, certificadoOrigen } = formData.documents
        if (!facturaComercial || !listaEmpaque || !certificadoOrigen) {
          alert('Por favor seleccione todos los documentos requeridos.')
          return false
        }
        return true
      }
      case 2: {
        const { tipoTransporte, empresaTransporte, fechaContratacion } = formData.transport
        if (!tipoTransporte || !empresaTransporte || !fechaContratacion) {
          alert('Por favor complete todos los campos en Contratación de Transporte.')
          return false
        }
        return true
      }
      case 3: {
        const { tipoEmbalaje, confirmado } = formData.packaging
        if (!tipoEmbalaje || !confirmado) {
          alert('Por favor complete la Confirmación de Embalaje.')
          return false
        }
        return true
      }
      case 4: {
        const { agenteAduanal, numeroDeclaracion, estado } = formData.customs
        if (!agenteAduanal || !numeroDeclaracion || !estado) {
          alert('Por favor complete todos los campos en Gestión de Aduanas.')
          return false
        }
        return true
      }
      case 5: {
        const { numeroGuia, estadoEnvio, fechaEnvio } = formData.shipping
        if (!numeroGuia || !estadoEnvio || !fechaEnvio) {
          alert('Por favor complete todos los campos en Envío y Seguimiento.')
          return false
        }
        return true
      }
      case 6: {
        const { recibido } = formData.reception
        if (!recibido) {
          alert('Por favor confirme la recepción para continuar.')
          return false
        }
        return true
      }
      default:
        return true
    }
  }

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data
      }
    }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalDataProductData
            data={{...formData.personalData, ...formData.productData}}
            updateData={(data) => {
              updateFormData('personalData', data.personalData || {})
              updateFormData('productData', data.productData || {})
            }}
          />
        )
      case 1:
        return (
          <DocumentPreparation
            data={formData.documents}
            updateData={(data) => updateFormData('documents', data)}
          />
        )
      case 2:
        return (
          <TransportContracting
            data={formData.transport}
            updateData={(data) => updateFormData('transport', data)}
          />
        )
      case 3:
        return (
          <PackagingConfirmation
            data={formData.packaging}
            updateData={(data) => updateFormData('packaging', data)}
          />
        )
      case 4:
        return (
          <CustomsManagement
            data={formData.customs}
            updateData={(data) => updateFormData('customs', data)}
          />
        )
      case 5:
        return (
          <ShippingTracking
            data={formData.shipping}
            updateData={(data) => updateFormData('shipping', data)}
          />
        )
      case 6:
        return (
          <ReceptionSummary
            data={formData.reception}
            allData={formData}
            updateData={(data) => updateFormData('reception', data)}
          />
        )
      default:
        return <div>Step no encontrado</div>
    }
  }

  return (
    <div className="wizard-container">
      <h2 className="wizard-header">Proceso de Exportación - Paso {currentStep + 1}: {steps[currentStep]}</h2>
      <div className="wizard-step">{renderStep()}</div>
      <div className="wizard-buttons">
        {currentStep > 0 && (
          <button onClick={prevStep}>
            Anterior
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button onClick={nextStep}>
            Siguiente
          </button>
        )}
        {currentStep === steps.length - 1 && (
          <button onClick={() => alert('Proceso de exportación completado!')}>
            Finalizar
          </button>
        )}
      </div>
    </div>
  )
}
