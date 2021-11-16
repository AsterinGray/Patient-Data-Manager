import { NextRouter } from 'next/dist/client/router'

import { AppDispatch } from '@/store/index'
import { deletePatient, getPatients } from '@/store/slices/patientSlice'

import { Patient } from '@/types/models'

import { Button, Data, Row } from './style'

type Props = {
  patient: Patient
  route: NextRouter
  accessToken: string
  dispatch: AppDispatch
}

const PatientData: React.FC<Props> = ({
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
