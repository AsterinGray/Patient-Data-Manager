import { AppDispatch, AppState } from '@/store/index'
import { getAllRecord } from '@/store/slices/record'

import { Record } from '@/types/models'

import { getCurrentDate } from '@/utils/index'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Data, Row, Section, Title } from './style'

const TodayRecord: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { records } = useSelector((state: AppState) => state.record)
  const route = useRouter()

  useEffect(() => {
    dispatch(getAllRecord(getCurrentDate()))
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
      {records && records.map((record: Record) => {
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
