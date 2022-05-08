import { AppDispatch, AppState } from '@/store/index'
import { login } from '@/store/slices/auth'

import { LoginRequest } from '@/types/connection'
import { LoginFormSchema } from '@/utils/form-schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Error, Form, Input, InputWrapper, Label } from './style'

const LoginForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const state = useSelector((state: AppState) => state.auth)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const onSubmit = (value: LoginRequest) => {
    dispatch(login(value))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" {...register('username')} />
        {errors.username && <Error>{errors.username?.message}</Error>}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" {...register('password')} />
        {errors.password && <Error>{errors.password?.message}</Error>}
        {state.message && <Error>{state.message}</Error>}
      </InputWrapper>
      <Button type="submit" disabled={!isValid}>
        Login
      </Button>
    </Form>
  )
}

export default LoginForm
