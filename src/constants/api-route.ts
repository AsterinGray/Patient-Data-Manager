export const GET_PATIENT = 'patient'
export const GET_PATIENT_BY_ID = (id) => `patient/${id}`
export const DELETE_PATIENT = (id) => `patient/${id}`
export const EDIT_PATIENT = (id) => `patient/${id}`
export const CREATE_PATIENT = 'patient'

export const GET_RECORD = 'record'
export const GET_RECORD_BY_ID = (id) => `record/${id}`
export const GET_PATIENT_RECORD = (id) => `patient/${id}/record`
export const DELETE_RECORD = (id) => `record/${id}`
export const EDIT_RECORD = (id) => `record/${id}`
export const CREATE_RECORD = 'record'

export const LOGIN = 'auth/login'