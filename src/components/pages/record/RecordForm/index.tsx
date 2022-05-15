import Input from '@/common/Input'

import { AppDispatch, AppState } from '@/store/index'
import { createRecord, editRecord, getRecordById, } from '@/store/slices/record'

import { Record } from '@/types/models'
import { RecordFormSchema } from '@/utils/form-schema'

import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { Button, Form } from './style'

type RecordFormProps = {
  id: any,
  patientId: any
}

const RecordForm: React.FC<RecordFormProps> = ({ id, patientId }) => {
  const dispatch: AppDispatch = useDispatch()
  const { record } = useSelector((state: AppState) => state.record)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(RecordFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    if (id) dispatch(getRecordById(id))
  }, [id, dispatch])

  useEffect(() => {
    if (record && id) {
      setValue('symptoms', record?.symptoms)
      setValue('treatment', record?.treatment)
      setValue('medicine', record?.medicine)
      setValue('description', record?.description)
      setValue('honor', record?.honor)
    }
  }, [record, setValue, id])

  const onSubmit = (value: Record) => {
    const data = { ...value, patient: patientId }
    setIsLoading(true)
    if (id) {
      dispatch(editRecord({
        id: record._id,
        value: data,
        successHandler,
        errorHandler
      }))
    } else {
      dispatch(createRecord({
        value: data,
        successHandler,
        errorHandler
      }))
    }
  }

  const successHandler = (message) => {
    setIsLoading(false)
    router.push(`/patient/${patientId}`)
    toast.success(message)
  }

  const errorHandler = (message) => {
    setIsLoading(false)
    toast.error(message)
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
        label="Pengobatan"
        error={errors.treatment?.message}
      />
      <Input
        textArea={true}
        register={register}
        name="medicine"
        label="Obat"
        error={errors.medicine?.message}
      />
      <Input
        textArea={true}
        register={register}
        name="description"
        label="Keterangan"
        error={errors.description?.message}
      />
      <Input
        register={register}
        name="honor"
        label="#"
        error={errors.honor?.message}
      />
      <Button type="submit" disabled={!isValid || isLoading}>
        {!isLoading ? id ? 'Edit' : 'Submit' : 'Loading...'}
      </Button>
    </Form>
  )
}

export default RecordForm
