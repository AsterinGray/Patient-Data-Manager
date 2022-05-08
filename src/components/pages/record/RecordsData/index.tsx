import RecordData from '@/common/RecordData'

import { AppDispatch, AppState } from '@/store/index'
import { getPatientRecords } from '@/store/slices/record'

import { RecordResponse } from '@/types/connection'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Data, Row, Section } from './style'

const RecordsData = () => {
  const dispatch: AppDispatch = useDispatch()
  const { records }: RecordResponse = useSelector(
    (state: AppState) => state.record
  )
  const [id, setId] = useState<any>()
  const route = useRouter()

  useEffect(() => {
    const id = route.query.id
    if (id) {
      setId(id)
      dispatch(getPatientRecords(id))
    }
  }, [dispatch, route.query.id])

  const renderData = () => {
    return records.map((record) => {
      return RecordData(record, route, dispatch, id)
    })
  }

  return (
    <Section>
      <Row>
        <Data>Tanggal</Data>
        <Data>Penyakit</Data>
        <Data>Pengobatan</Data>
        <Data>Obat</Data>
        <Data>
          <Button onClick={() => route.replace(`/patient/${id}/form`)}>
                        Create
          </Button>
        </Data>
      </Row>
      {records && records.length !== 0 && renderData()}
    </Section>
  )
}

export default RecordsData
