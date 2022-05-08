import api from '@/config/api'
import { PATIENT } from '@/constants/slicesName'

import { BaseState, RecordResponse } from '@/types/connection'
import { Record } from '@/types/models'
import { createSlice } from '@reduxjs/toolkit'

import { AxiosResponse } from 'axios'
import { HYDRATE } from 'next-redux-wrapper'

import { AppDispatch, AppThunk } from '..'

const initialState: BaseState & RecordResponse = {
  records: [],
  record: {} as Record,
  status: 404,
}

const record = createSlice({
  name: PATIENT,
  initialState,
  reducers: {
    setRecords(state, { payload }) {
      state.records = payload
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

export const getPatientRecords = (accessToken: any, patientId: any): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res: AxiosResponse<RecordResponse, any> = await api.get(
        `patient/${patientId}/record`, 
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      dispatch(record.actions.setStatus(res.status))
      dispatch(record.actions.setRecords(res.data.records))
    } catch {
      dispatch(record.actions.setStatus(500))
    }
  }

export const deleteRecord =
    (accessToken: any, _id: any): AppThunk =>
      async (dispatch: AppDispatch) => {
        try {
          const res: AxiosResponse<RecordResponse, any> = await api.delete(
            `record/${_id}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          dispatch(record.actions.setStatus(res.status))
          dispatch(record.actions.setRecords(res.data.records))
        } catch {
          dispatch(record.actions.setStatus(500))
        }
      }

export const getAllRecord = (accessToken: any, date?: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const res: AxiosResponse<RecordResponse, any> = await api.get('record', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          updatedAt: date,
        },
      })
      dispatch(record.actions.setStatus(res.status))
      dispatch(record.actions.setRecords(res.data.records))
    } catch {
      dispatch(record.actions.setStatus(500))
    }
  }

export const editRecord = (accessToken: any, id: string, value: Record): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      await api.patch(
        `record/${id}`,
        { ...value },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
    } catch {
      dispatch(record.actions.setStatus(500))
    }
  }

export const createRecord = (accessToken: any, value: Record): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      await api.post(
        'record',
        { ...value },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
    } catch {
      dispatch(record.actions.setStatus(500))
    }
  }

export const getRecordById = (accessToken: any, id: any): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      await api.get(`record/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
    } catch {
      dispatch(record.actions.setStatus(500))
    }
  }

export default record.reducer
 