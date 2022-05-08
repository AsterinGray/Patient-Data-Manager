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

export const deletePatient = (id: any): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res: AxiosResponse<PatientResponse, any> =
        await api.delete(DELETE_PATIENT(id))
      dispatch(patient.actions.setStatus(res.status))
      dispatch(patient.actions.setPatients(res.data.patients))
    } catch {
      dispatch(patient.actions.setStatus(500))
    }
  }

export const editPatient = (id: any, value: Patient): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      await api.patch(
        EDIT_PATIENT(id),
        { ...value }
      )
    } catch {
      dispatch(patient.actions.setStatus(500))
    }
  }

export const createPatient = (value: Patient): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      await api.post(CREATE_PATIENT, { ...value })
    } catch { 
      dispatch(patient.actions.setStatus(500))
    }
  }

export default patient.reducer
