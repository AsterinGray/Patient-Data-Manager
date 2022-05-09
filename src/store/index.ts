import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import auth from './slices/auth'
import patient from './slices/patient'
import record from './slices/record'

const store = configureStore({
  reducer: { auth, patient, record },
})

const makeStore = () => store

type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppState,
    unknown,
    Action>

export const wrapper = createWrapper<AppStore>(makeStore)
