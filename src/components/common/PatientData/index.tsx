import { deletePatient } from '@/store/slices/patient'
import { PatientDataProps } from '@/types/components'
import React from 'react'
import { toast } from 'react-toastify'

import { Button, Data, Row } from './style'

const PatientData: React.FC<PatientDataProps> = ({
  patient,
  route,
  dispatch,
}) => {
  const onDelete = () => {
    dispatch(deletePatient({
      id: patient._id,
      successHandler: onDeleteSuccess,
      errorHandler: onDeleteFail,
    }))
  }

  const onDeleteSuccess = (message) => {
    toast.success(message)
  }

  const onDeleteFail = (message) => {
    toast.error(message)
  }

  const onEdit = () => {
    route.replace(`/patient/form?id=${patient._id}`)
  }

  const patientDetail = () => {
    route.replace(`/patient/${patient._id}`)
  }
  
  return (
    <Row key={patient._id}>
      <Data>{patient.nik}</Data>
      <Data pointer={true} onClick={() => patientDetail()}>
        {patient.name}
      </Data>
      <Data>{patient.age}</Data>
      <Data>{patient.gender}</Data>
      <Data>{patient.address}</Data>
      <Data>
        <Button onClick={() => onEdit()}>Edit</Button>
        <Button altBg={true} onClick={() => onDelete()}>
          Delete
        </Button>
      </Data>
    </Row>
  )
}

export default PatientData
