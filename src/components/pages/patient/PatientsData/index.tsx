import PatientData from '@/common/PatientData'
import withAuth from '@/common/withAuth'

import { AppDispatch, AppState } from '@/store/index'
import { getPatients } from '@/store/slices/patient'

import { PatientResponse } from '@/types/connection'

import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Data, Row, Table, Text, Title } from './style'

const PatientsData: React.FC<{ searchTerm?: string }> = ({ searchTerm }) => {
  const dispatch: AppDispatch = useDispatch()
  const { patients }: PatientResponse = useSelector(
    (state: AppState) => state.patient
  )
  const route = useRouter()

  useEffect(() => {
    dispatch(getPatients())
  }, [dispatch])

  const onCreate = () => {
    route.replace('/patient/form')
  }

  const renderData = () => {
    if (patients) {
      if (!searchTerm)
        return patients.map((patient) => {
          return (
            <Row key={patient._id}>
              <PatientData
                key={patient._id}
                patient={patient}
                route={route}
                dispatch={dispatch}
              />
            </Row>
          )
        })
      else
        return patients
          .filter((patient) => patient.name.toLowerCase().includes(searchTerm))
          .map((patient) => {
            return (
              <Row key={patient._id}>
                <PatientData
                  key={patient._id}
                  patient={patient}
                  route={route}
                  dispatch={dispatch}
                />
              </Row>
            )
          })
    } else {
      return <Text>No Data Found</Text>
    }
  }

  return (
    <Table>
      <Row header={true}>
        <Title>Name</Title>
        <Title>Age</Title>
        <Title>Gender</Title>
        <Title>Phone</Title>
        <Title>Address</Title>
        <Data>
          <Button onClick={() => onCreate()}>
            <Image
              src={'/images/add.svg'}
              width={20}
              height={20}
              alt={'Add Icon'}
            />
          </Button>
        </Data>
      </Row>
      {renderData()}
    </Table>
  )
}

export default withAuth(PatientsData)
