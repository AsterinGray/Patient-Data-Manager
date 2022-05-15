import { AppDispatch } from '@/store/index'
import { deleteRecord } from '@/store/slices/record'

import { Record } from '@/types/models'
import { NextRouter } from 'next/dist/client/router'
import Image from 'next/image'

import { Button, Data } from './style'

const RecordData = (
  record: Record,
  route: NextRouter,
  dispatch: AppDispatch,
  patientId: any
) => {
  const onDelete = () => {
    dispatch(deleteRecord(record._id))
  }

  const onEdit = () => {
    route.replace(`/patient/${patientId}/form?record=${record._id}`)
  }

  return (
    <>
      <Data>{record.createdAt.slice(0, 10)}</Data>
      <Data>{record.symptoms}</Data>
      <Data>{record.treatment}</Data>
      <Data>{record.medicine || '-'}</Data>
      <Data>{record.description || '-'}</Data>
      <Data>{record.honor || '-'}</Data>
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

export default RecordData
