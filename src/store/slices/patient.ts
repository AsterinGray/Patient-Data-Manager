import api from '@/config/api'
import {
  CREATE_PATIENT,
  DELETE_PATIENT,
  EDIT_PATIENT,
  GET_PATIENT,
  GET_PATIENT_BY_ID
} from '@/constants/api-route'
import { PATIENT } from '@/constants/slice'

import { BaseState, PatientResponse } from '@/types/connection'
import { Patient } from '@/types/models'
import { createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { HYDRATE } from 'next-redux-wrapper'

import { AppDispatch, AppThunk } from '..'

const initialState: BaseState & PatientResponse = {
  patients: [],
  patient: {} as Patient,
  status: 404,
  message: ''
}

const patient = createSlice({
  name: PATIENT,
  initialState,
  reducers: {
    setPatients(state, { payload }) {
      state.patients = payload
    },
    setPatient(state, { payload }) {
      state.patient = payload
    },
    setStatus(state, { payload }) {
      state.status = payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return { ...state, ...payload }
    },
  },
})

export const getPatients =
    (updatedAt?: string): AppThunk =>
      async (dispatch: AppDispatch) => {
        try {
          const res: AxiosResponse<PatientResponse, any> = await api.get(
            GET_PATIENT,
            { params: { updatedAt },
            }
          )
          dispatch(patient.actions.setStatus(res.status))
          dispatch(patient.actions.setPatients(res.data.patients))
        } catch {
          dispatch(patient.actions.setStatus(500))
        }
      }

export const getPatientById = (id: any): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res: AxiosResponse<any, any> = await api.get(GET_PATIENT_BY_ID(id))
      dispatch(patient.actions.setStatus(res.status))
      dispatch(patient.actions.setPatient(res.data.patient))
    } catch {
      dispatch(patient.actions.setStatus(500))
    }
  }

export const deletePatient = ({ id, successHandler, errorHandler }): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res: AxiosResponse<PatientResponse, any> = await api.delete(
        DELETE_PATIENT(id)
      )
      dispatch(patient.actions.setStatus(res.status))
      dispatch(patient.actions.setPatients(res.data.patients))
      successHandler(res.data.message)
    } catch (e) {
      errorHandler(e.response.data.message || e.message)
      dispatch(patient.actions.setStatus(500))
    }
  }

export const editPatient = ({
  id,
  value,
  successHandler,
  errorHandler
}): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await api.patch(EDIT_PATIENT(id), { ...value })
      successHandler(res.data.message)
    } catch (e) {
      errorHandler(e.response.data.message || e.message)
      dispatch(patient.actions.setStatus(500))
    }
  }

export const createPatient = ({
  value,
  successHandler,
  errorHandler
}): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await api.post(CREATE_PATIENT, { ...value })
      successHandler(res.data.message)
    } catch (e) {
      errorHandler(e.response.data.message || e.message)
      dispatch(patient.actions.setStatus(500))
    }
  }

export default patient.reducer
