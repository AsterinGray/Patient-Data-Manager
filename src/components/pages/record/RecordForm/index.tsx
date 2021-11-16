import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import Input from '@/common/Input'

import { AppDispatch, AppState } from '@/store/index'
import {
  createRecord,
  editRecord,
  getRecordById,
} from '@/store/slices/recordSlice'

import { Record } from '@/types/models'

import { getToken } from '@/utils/index'

import { Button, Form } from './style'

const schema = yup.object().shape({
  symptoms: yup.string(),
  treatment: yup.string(),
  medicine: yup.string(),
})

const RecordForm: React.FC<{ id: any }> = ({ id }) => {
  const dispatch: AppDispatch = useDispatch()
  const { record } = useSelector((state: AppState) => state.records)
  const route = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    const accessToken = getToken()
    if (route.query.id) dispatch(getRecordById(accessToken, route.query.id))
  }, [route.query.id, dispatch])

  useEffect(() => {
    if (record) {
      setValue('symptoms', record?.symptoms)
      setValue('treatment', record?.treatment)
      setValue('medicine', record?.medicine)
    }
  }, [record, setValue])

  const onSubmit = (value: Record) => {
    const data = { ...value, patient: id }
    const accessToken = getToken()

    if (record?._id) {
      dispatch(editRecord(accessToken, record._id, data))
    } else {
      dispatch(createRecord(accessToken, data))
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        name="symptoms"
        label="Penyakit"
        error={errors.symptoms?.message}
      />
      <Input
        register={register}
        name="treatment"
        label="Pengobata"
        error={errors.treatment?.message}
      />
      <Input
        register={register}
        name="medicine"
        label="Obat"
        error={errors.medicine?.message}
      />
      <Button type="submit" disabled={!isValid}>
        {record && record._id ? 'Edit' : 'Submit'}
      </Button>
    </Form>
  )
}

export default RecordForm
