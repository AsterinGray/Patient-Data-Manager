import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, AppState } from '@/store/index'
import { getPatientById } from '@/store/slices/patientSlice'

import { getToken } from '@/utils/index'

import { Info, Section, Text } from './style'

const PatientDetail = () => {
  const dispatch: AppDispatch = useDispatch()
  const { patient } = useSelector((state: AppState) => state.patients)
  const route = useRouter()

  useEffect(() => {
    if (route.query.id) {
      const accessToken = getToken()
      if (accessToken) dispatch(getPatientById(accessToken, route.query.id))
    }
  }, [dispatch, route.query.id])

  return (
    <Section>
      {patient && (
        <>
          <Info>NIK</Info>
          <Text>{patient?.nik}</Text>
          <Info>Gender</Info>
          <Text>{patient?.gender}</Text>
          <Info>Nama</Info>
          <Text>{patient?.name}</Text>
          <Info>Alamat</Info>
          <Text>{patient?.address}</Text>
          <Info>Umur</Info>
          <Text>{patient?.age}</Text>
          <Info>Alergi</Info>
          <Text>{patient?.allergy}</Text>
        </>
      )}
    </Section>
  )
}

export default PatientDetail
