import Input from '@/common/Input'

import { AppDispatch, AppState } from '@/store/index'
import { createRecord, editRecord, getRecordById, } from '@/store/slices/record'

import { Record } from '@/types/models'
import { RecordFormSchema } from '@/utils/form-schema'

import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Form } from './style'

const RecordForm: React.FC<{ id: any }> = ({ id }) => {
  const dispatch: AppDispatch = useDispatch()
  const { record } = useSelector((state: AppState) => state.record)
  const route = useRouter()

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
    if (route.query.id) dispatch(getRecordById(route.query.id))
  }, [route.query.id, dispatch])

  useEffect(() => {
    if (record && id) {
      setValue('symptoms', record?.symptoms)
      setValue('treatment', record?.treatment)
      setValue('medicine', record?.medicine)
    }
  }, [record, setValue, id])

  const onSubmit = (value: Record) => {
    const data = { ...value, patient: id }

    if (record?._id) {
      dispatch(editRecord(record._id, data))
    } else {
      dispatch(createRecord(data))
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
