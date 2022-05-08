import api from '@/config/api'
import { AUTH } from '@/constants/slice'

import { BaseState, LoginRequest, LoginResponse } from '@/types/connection'
import { createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { HYDRATE } from 'next-redux-wrapper'

import { AppDispatch, AppThunk } from '..'

const initialState: BaseState & LoginResponse = {
  token: '',
  message: '',
  status: 404,
}

const auth = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    setToken(state, { payload }) {
      state.token = payload
    },
    setMessage(state, { payload }) {
      state.message = payload
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

export const login =
    (value: LoginRequest): AppThunk =>
      async (dispatch: AppDispatch) => {
        try {
          const res: AxiosResponse<LoginResponse, any> = await api.post(
            'auth/login',
            { ...value }
          )
          dispatch(auth.actions.setStatus(res.status))
          dispatch(auth.actions.setToken(res.data.token))
          dispatch(auth.actions.setMessage(res.data.message))
        } catch {
          dispatch(auth.actions.setMessage('Invalid Credential'))
          dispatch(auth.actions.setStatus(500))
        }
      }

export const { setToken } = auth.actions

export default auth.reducer
