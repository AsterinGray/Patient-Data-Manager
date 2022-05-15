import { deletePatient } from '@/store/slices/patient'
import { PatientDataProps } from '@/types/components'
import Image from 'next/image'
import React from 'react'
import { toast } from 'react-toastify'

import { Button, Data } from './style'

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
    <>
      <Data pointer={true} onClick={() => patientDetail()}>
        <b>{patient.name}</b>
      </Data>
      <Data>{patient.age}</Data>
      <Data>{patient.gender}</Data>
      <Data>{patient.phoneNumber || '-'}</Data>
      <Data>{patient.address || '-'}</Data>
      <Data>
        <Button onClick={() => onEdit()}>
          <Image
            src={'/images/edit.svg'}
            width={20}
            height={20}
            alt={'Edit Icon'}
          />
        </Button>
        <Button altBg={true} onClick={() => onDelete()}>
          <Image
            src={'/images/delete.svg'}
            width={20}
            height={20}
            alt={'Delete Icon'}
          />
        </Button>
      </Data>
    </>
  )
}

export default PatientData
