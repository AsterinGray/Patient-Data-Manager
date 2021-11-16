export type User = {
  _id: string
  name: string
  username: string
  role: string
  password: string
  createdAt: string
  updatedAt: string
}

export type Record = {
  _id: string
  symptoms: string
  treatment: string
  medicine: string
  createdAt: string
  updatedAt: string
  patient: Patient
}

export type Patient = {
  _id: string
  name: string
  nik: string
  age: number
  gender: string
  address: string
  allergy?: string
  createdAt: string
  updatedAt: string
  record: Record[]
}
