import { UseFormRegister } from 'react-hook-form'

export type InputComponentProps = {
  register: UseFormRegister<any>
  name: string
  error?: string
  label?: string
}
