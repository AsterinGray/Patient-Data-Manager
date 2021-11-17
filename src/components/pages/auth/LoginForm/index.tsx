import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import { AppState, AppDispatch } from '@/store/index'
import { login } from '@/store/slices/loginSlice'

import { LoginRequest } from '@/types/connection'

import { Button, Error, Form, Input, InputWrapper, Label } from './style'

const schema = yup.object().shape({
  username: yup.string().required('Username wajib diisi'),
  password: yup.string().required('Password wajib diisi'),
})

const LoginForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const state = useSelector((state: AppState) => state.login)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const onSubmit = (value: LoginRequest) => {
    dispatch(login(value))
  }

  useEffect(() => {
    if (state.token) localStorage.setItem('pdmAuthToken', state.token)
    const token = localStorage.getItem('pdmAuthToken')
    if (token) router.replace('/')
  }, [state, router])

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