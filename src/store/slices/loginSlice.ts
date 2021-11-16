import { createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { HYDRATE } from 'next-redux-wrapper'

import api from '@/apis/index'

import { LOGIN } from '@/constants/slicesName'

import { BaseState, LoginRequest, LoginResponse } from '@/types/connection'

import { AppDispatch, AppThunk } from '..'

const initialState: BaseState & LoginResponse = {
  token: '',
  message: '',
  status: 404,
}

const loginSlice = createSlice({
  name: LOGIN,
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
      dispatch(loginSlice.actions.setStatus(res.status))
      dispatch(loginSlice.actions.setToken(res.data.token))
      dispatch(loginSlice.actions.setMessage(res.data.message))
    } catch {
      dispatch(loginSlice.actions.setMessage('Invalid Credential'))
      dispatch(loginSlice.actions.setStatus(500))
    }
  }

export const { setToken } = loginSlice.actions

export default loginSlice.reducer
