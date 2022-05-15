import RecordData from '@/common/RecordData'

import { AppDispatch, AppState } from '@/store/index'
import { getPatientRecords } from '@/store/slices/record'

import { RecordResponse } from '@/types/connection'
import { useRouter } from 'next/dist/client/router'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Header, Row, Section } from './style'

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
      dispatch(getPatientRecords(id))
      setId(id)
    }
  }, [dispatch, route.query.id])

  const renderData = () => {
    return records.map((record) => {
      return <Row>{RecordData(record, route, dispatch, id)}</Row>
    })
  }

  return (
    <Section>
      <Row header={true}>
        <Header>Tanggal</Header>
        <Header>Penyakit</Header>
        <Header>Pengobatan</Header>
        <Header>Obat</Header>
        <Header>Keterangan</Header>
        <Header>#</Header>
        <Header>
          <Button onClick={() => route.replace(`/patient/${id}/form`)}>
            <Image
              src={'/images/add.svg'}
              width={20}
              height={20}
              alt={'Add Icon'}
            />
          </Button>
        </Header>
      </Row>
      {records && records.length !== 0 ? renderData() : 'No Data'}
    </Section>
  )
}

export default RecordsData
