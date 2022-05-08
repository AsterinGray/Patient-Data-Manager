import Input from '@/common/Input'

import { AppDispatch, AppState } from '@/store/index'
import {
  createPatient,
  editPatient,
  getPatientById,
} from '@/store/slices/patient'

import { Patient } from '@/types/models'
import { PatientFormSchema } from '@/utils/form-schema'

import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Form, InputWrapper, Label, Select } from './style'

const PatientForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { patient } = useSelector((state: AppState) => state.patient)
  const route = useRouter()

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
    const id = route.query.id
    if (id) dispatch(getPatientById(id))
  }, [dispatch, route.query.id])

  useEffect(() => {
    const id = route.query.id
    if (patient && id) {
      setValue('name', patient.name)
      setValue('nik', patient.nik)
      setValue('age', patient.age)
      setValue('gender', patient.gender)
      setValue('address', patient.address)
      setValue('allergy', patient.allergy)
    }
  }, [patient, setValue, route.query.id])

  const onSubmit = (value: Patient) => {
    if (patient?._id) {
      dispatch(editPatient( patient?._id, value))
    } else {
      dispatch(createPatient(value))
    }

    route.push('/')
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

      <Button type="submit" disabled={!isValid}>
        {patient && patient._id ? 'Edit' : 'Submit'}
      </Button>
    </Form>
  )
}

export default PatientForm
