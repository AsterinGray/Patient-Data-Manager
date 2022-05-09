import api from '@/config/api'
import { LOGIN } from '@/constants/api-route'
import { AUTH } from '@/constants/slice'

import { BaseState, LoginRequest, LoginResponse } from '@/types/connection'
import { removeAuthentication, setAuthentication } from '@/utils/auth'
import { createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { HYDRATE } from 'next-redux-wrapper'

import { AppDispatch, AppThunk } from '..'

const initialState: BaseState & { isAuthenticate: boolean, message: string } = {
  isAuthenticate: false,
  message: '',
  status: 404,
}

const auth = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    setIsAuthenticate(state, { payload }) {
      state.isAuthenticate = payload
    },
    setMessage(state, { payload }) {
      state.message = payload
    },
    setStatus(state, { payload }) {
      state.status = payload
    },
    logout(state) {
      state.isAuthenticate = false
      removeAuthentication()
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
            LOGIN,
            { ...value }
          )
          dispatch(auth.actions.setStatus(res.status))
          dispatch(auth.actions.setMessage(res.data.message))
          dispatch(auth.actions.setIsAuthenticate(true))
          setAuthentication(res.data.token)
        } catch {
          dispatch(auth.actions.setMessage('Invalid Credential'))
          dispatch(auth.actions.setStatus(500))
        }
      }

export const { setIsAuthenticate, logout } = auth.actions

export default auth.reducer
