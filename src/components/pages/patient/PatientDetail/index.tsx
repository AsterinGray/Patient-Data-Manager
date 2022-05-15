import { AppDispatch, AppState } from '@/store/index'
import { getPatientById } from '@/store/slices/patient'

import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header, Info, Section, Text } from './style'

const PatientDetail = () => {
  const dispatch: AppDispatch = useDispatch()
  const { patient } = useSelector((state: AppState) => state.patient)
  const route = useRouter()

  useEffect(() => {
    if (route.query.id) {
      dispatch(getPatientById(route.query.id))
    }
  }, [dispatch, route.query.id])

  return (
    <>
      {patient && (
        <>
          <Header>{patient.name}</Header>
          <Section>
            <Info>NIK</Info>
            <Text>{patient?.nik || '-'}</Text>
            <Info>Gender</Info>
            <Text>{patient.gender}</Text>
            <Info>Alamat</Info>
            <Text>{patient?.address || '-'}</Text>
            <Info>Umur</Info>
            <Text>{patient?.age}</Text>
            <Info>Alergi</Info>
            <Text>{patient?.allergy || '-'}</Text>
            <Info>Telp</Info>
            <Text>{patient?.phoneNumber || '-'}</Text>
          </Section>
        </>
      )
      }
    </>
  )
}

export default PatientDetail
