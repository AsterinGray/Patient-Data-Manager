import api from '@/config/api'
import { LOGIN } from '@/constants/api-route'
import { AUTH } from '@/constants/slice'

import { BaseState, LoginResponse } from '@/types/connection'
import { removeAuthentication, setAuthentication } from '@/utils/auth'
import { createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { HYDRATE } from 'next-redux-wrapper'

import { AppDispatch, AppThunk } from '..'

type LoginStateProps = {
  isAuthenticate: boolean,
  message: string,
  isLoading: boolean
}

const initialState: BaseState & LoginStateProps = {
  isAuthenticate: false,
  message: '',
  status: 404,
  isLoading: true
}

const auth = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    setIsAuthenticate(state, { payload }) {
      state.isAuthenticate = payload
      state.isLoading = false
    },
    setMessage(state, { payload }) {
      state.message = payload
    },
    setStatus(state, { payload }) {
      state.status = payload
    },
    setIsLoading(state, { payload }) {
      state.isLoading = payload
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
    ({ value, successHandler, errorHandler }): AppThunk =>
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
          successHandler(res.data.message)
        } catch (e) {
          console.log(e)
          const message = e.response.data.message || e.message
          dispatch(auth.actions.setMessage(message))
          dispatch(auth.actions.setStatus(500))
          errorHandler(message)
        }
      }

export const { setIsAuthenticate, logout } = auth.actions

export default auth.reducer
