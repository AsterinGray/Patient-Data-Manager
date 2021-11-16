import { createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { HYDRATE } from 'next-redux-wrapper'
import patient from 'pages/api/patient'

import api from '@/apis/index'

import { PATIENT } from '@/constants/slicesName'

import { BaseState, PatientResponse } from '@/types/connection'
import { Patient } from '@/types/models'

import { AppDispatch, AppThunk } from '..'

const initialState: BaseState & PatientResponse = {
  patients: [],
  patient: {} as Patient,
  status: 404,
}

const patientSlice = createSlice({
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
  (accessToken: any, date?: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res: AxiosResponse<PatientResponse, any> = await api.get(
        'patient',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            updatedAt: date,
          },
        }
      )
      dispatch(patientSlice.actions.setStatus(res.status))
      dispatch(patientSlice.actions.setPatients(res.data.patients))
    } catch {
      dispatch(patientSlice.actions.setStatus(500))
    }
  }

export const getPatientById =
  (accessToken: any, _id: any): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res: AxiosResponse<any, any> = await api.get(`patient/${_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      dispatch(patientSlice.actions.setStatus(res.status))
      dispatch(patientSlice.actions.setPatient(res.data.patient))
    } catch {
      dispatch(patientSlice.actions.setStatus(500))
    }
  }

export const deletePatient =
  (accessToken: any, _id: any): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res: AxiosResponse<PatientResponse, any> = await api.delete(
        `patient/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      dispatch(patientSlice.actions.setStatus(res.status))
      dispatch(patientSlice.actions.setPatients(res.data.patients))
    } catch {
      dispatch(patientSlice.actions.setStatus(500))
    }
  }

export const editPatient =
  (accessToken: any, _id: any, value: Patient): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await api.patch(
        `patient/${_id}`,
        { ...value },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
    } catch {
      dispatch(patientSlice.actions.setStatus(500))
    }
  }

export const createPatient =
  (accessToken: any, value: Patient): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await api.post(
        `patient`,
        { ...value },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
    } catch {
      dispatch(patientSlice.actions.setStatus(500))
    }
  }

export default patientSlice.reducer
