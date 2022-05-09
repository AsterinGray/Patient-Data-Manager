import { AppDispatch, AppState } from '@/store/index'
import { getAllRecord } from '@/store/slices/record'

import { Record } from '@/types/models'

import { getCurrentDate } from '@/utils/index'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { Data, Row, Section, Title } from './style'

const TodayRecord: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { records } = useSelector((state: AppState) => state.record)
  const route = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(getAllRecord({
      updatedAt: getCurrentDate(),
      successHandler,
      errorHandler
    }))
  }, [dispatch])

  const successHandler = () => {
    setIsLoading(false)
  }

  const errorHandler = (message) => {
    setIsLoading(false)
    toast.error(message)
  }

  const renderRecords = () => {
    return records.map((record: Record) => {
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
    })
  }

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
      {isLoading ? <div>Loading...</div> : records.length ? renderRecords() : <div>No Record</div>}
    </Section>
  )
}

export default TodayRecord
