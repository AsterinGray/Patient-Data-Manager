import PatientData from '@/common/PatientData'
import withAuth from '@/common/withAuth'

import { AppDispatch, AppState } from '@/store/index'
import { getPatients } from '@/store/slices/patient'

import { PatientResponse } from '@/types/connection'

import { useRouter } from 'next/dist/client/router'
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
            <PatientData
              key={patient._id}
              patient={patient}
              route={route}
              dispatch={dispatch}
            />
          )
        })
      else
        return patients
          .filter((patient) => patient.name.toLowerCase().includes(searchTerm))
          .map((patient) => {
            return (
              <PatientData
                key={patient._id}
                patient={patient}
                route={route}
                dispatch={dispatch}
              />
            )
          })
    } else {
      return <Text>No Data Found</Text>
    }
  }

  return (
    <Table>
      <Row>
        <Title>NIK</Title>
        <Title>Name</Title>
        <Title>Age</Title>
        <Title>Gender</Title>
        <Title>Address</Title>
        <Data>
          <Button onClick={() => onCreate()}>Create</Button>
        </Data>
      </Row>
      {renderData()}
    </Table>
  )
}

export default withAuth(PatientsData)
