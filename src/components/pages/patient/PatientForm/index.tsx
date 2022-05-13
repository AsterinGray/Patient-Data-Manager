import Input from '@/common/Input'

import { AppDispatch, AppState } from '@/store/index'
import {
  createPatient,
  editPatient,
  getPatientById,
} from '@/store/slices/patient'

import { Patient } from '@/types/models'
import { PatientFormSchema } from '@/utils/form-schema'

import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { Button, Form, InputWrapper, Label, Select } from './style'

const PatientForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { patient } = useSelector((state: AppState) => state.patient)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const id = router.query.id || ''

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(PatientFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    if (id) dispatch(getPatientById(id))
  }, [dispatch, id])

  useEffect(() => {
    const id = router.query.id
    if (patient && id) {
      setValue('name', patient.name)
      setValue('nik', patient.nik)
      setValue('age', patient.age)
      setValue('gender', patient.gender)
      setValue('address', patient.address)
      setValue('allergy', patient.allergy)
    }
  }, [patient, setValue, router.query.id])

  const onSubmit = (value: Patient) => {
    setIsLoading(true)
    if (patient?._id) {
      dispatch(editPatient( {
        id: patient?._id,
        value,
        successHandler,
        errorHandler
      }))
    } else {
      dispatch(createPatient({ value, successHandler, errorHandler }))
    }
  }

  const successHandler = (message) => {
    setIsLoading(false)
    router.push('/patient')
    toast.success(message)
  }

  const errorHandler = (message) => {
    toast.error(message)
    setIsLoading(false)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        name="name"
        label="Nama"
        error={errors.name?.message}
      />
      <Input
        register={register}
        name="nik"
        label="NIK"
        error={errors.nik?.message}
      />
      <Input
        register={register}
        name="age"
        label="Umur"
        error={errors.age?.message}
      />
      <InputWrapper>
        <Label>Jenis Kelamin</Label>
        <Select {...register('gender')}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </InputWrapper>
      <Input
        register={register}
        name="address"
        label="Alamat"
        error={errors.address?.message}
      />
      <Input
        register={register}
        name="allergy"
        label="Alergi"
        error={errors.allergy?.message}
      />

      <Button type="submit" disabled={!isValid || isLoading}>
        {!isLoading ? patient && id ? 'Edit' : 'Submit' : 'Loading...'}
      </Button>
    </Form>
  )
}

export default PatientForm
