import { Patient, Record } from './models'

export type BaseState = {
    status: number
}

export type LoginResponse = {
    token: string
    message: string
}

export type PatientResponse = {
    patients: Patient[]
    patient: Patient
}

export type RecordResponse = {
    records: Record[]
    record: Record
}

export type LoginRequest = {  
    username: string
    password: string
}
