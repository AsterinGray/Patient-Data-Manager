import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, AppState } from '@/store/index'
import { getAllRecord } from '@/store/slices/recordSlice'

import { Record } from '@/types/models'

import { getCurrentDate, getToken } from '@/utils/index'

import { Data, Row, Section, Title } from './style'

const TodayRecord: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { records } = useSelector((state: AppState) => state.records)
  const route = useRouter()

  useEffect(() => {
    const token = getToken()
    if (token) dispatch(getAllRecord(token, getCurrentDate()))
  }, [dispatch])

  return (
    <Section>
      <h1>Today Patient: {records.length}</h1>
      <Row head={true}>
        <Title>Nama</Title>
        <Title>Penyakit</Title>
        <Title>Pengobatan</Title>
        <Title>Obat</Title>
        <Data></Data>
      </Row>
      {records &&
        records.map((record: Record) => {
          return (
            <Row
              key={record._id}
              onClick={() => route.replace(`/patient/${record.patient._id}`)}
            >
              <div>{record.patient.name}</div>
              <div>{record.symptoms}</div>
              <div>{record.treatment}</div>
              <div>{record.medicine}</div>
            </Row>
          )
        })}
    </Section>
  )
}

export default TodayRecord
