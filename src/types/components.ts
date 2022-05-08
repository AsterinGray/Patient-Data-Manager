import { AppDispatch } from '@/store/index'
import { Patient } from '@/types/models'
import { NextRouter } from 'next/dist/client/router'
import { ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'

export type InputProps = {
  register: UseFormRegister<any>
  name: string
  error?: string
  label?: string
}

export type LayoutProps = {
  children: ReactNode
  title?: string
}

export type PatientDataProps = {
  patient: Patient
  route: NextRouter
  dispatch: AppDispatch
}