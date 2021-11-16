import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import loginReducer from './slices/loginSlice'
import patientReducer from './slices/patientSlice'
import recordReducer from './slices/recordSlice'

const store = configureStore({
  reducer: {
    login: loginReducer,
    patients: patientReducer,
    records: recordReducer,
  },
})

const makeStore = () => store

type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
