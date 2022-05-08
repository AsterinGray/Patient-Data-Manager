import { deletePatient, getPatients } from '@/store/slices/patient'
import { PatientDataProps } from '@/types/components'
import React from 'react'

import { Button, Data, Row } from './style'

const PatientData: React.FC<PatientDataProps> = ({
  patient,
  route,
  accessToken,
  dispatch,
}) => {
  const onDelete = () => {
    dispatch(deletePatient(accessToken, patient._id))
    dispatch(getPatients(accessToken))
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
