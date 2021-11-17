import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import Input from '@/common/Input'

import { AppDispatch, AppState } from '@/store/index'
import {
  createPatient,
  editPatient,
  getPatientById,
} from '@/store/slices/patientSlice'

import { Patient } from '@/types/models'

import { getToken } from '@/utils/index'

import { Button, Form, InputWrapper, Label, Select } from './style'

const schema = yup.object().shape({
  name: yup.string().required('Nama wajib diisi'),
  nik: yup.string(),
  age: yup.number().required('Umur wajib diis'),
  gender: yup.string().required('Jenis Kelaming wajib diisi'),
  address: yup.string().required('Alamat wajib diisi'),
  allergy: yup.string(),
})

const PatientForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { patient } = useSelector((state: AppState) => state.patients)
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
    const id = route.query.id
    if (id && accessToken) dispatch(getPatientById(accessToken, id))
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
    const accessToken = getToken()
    if (patient?._id) {
      dispatch(editPatient(accessToken, patient?._id, value))
    } else {
      dispatch(createPatient(accessToken, value))
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
