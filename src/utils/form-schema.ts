import * as yup from 'yup'

export const RecordFormSchema = yup.object().shape({
  symptoms: yup.string(),
  treatment: yup.string(),
  medicine: yup.string(),
})

export const LoginFormSchema = yup.object().shape({
  username: yup.string().required('Username wajib diisi'),
  password: yup.string().required('Password wajib diisi'),
})

export const PatientFormSchema = yup.object().shape({
  name: yup.string().required('Nama wajib diisi'),
  nik: yup.string(),
  age: yup.number().required('Umur wajib diis'),
  gender: yup.string().required('Jenis Kelaming wajib diisi'),
  address: yup.string().required('Alamat wajib diisi'),
  allergy: yup.string(),
})