import { AppDispatch, AppState } from '@/store/index'
import { login } from '@/store/slices/auth'

import { LoginRequest } from '@/types/connection'
import { LoginFormSchema } from '@/utils/form-schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { Button, Error, Form, Input, InputWrapper, Label } from './style'

const LoginForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const state = useSelector((state: AppState) => state.auth)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    if(state.isAuthenticate) router.push('/')
  })

  const onSubmit = (value: LoginRequest) => {
    setIsLoading(true)
    dispatch(login({ value, successHandler, errorHandler }))
  }

  const successHandler = (message: string) => {
    setIsLoading(false)
    toast.success(message)
    router.push('/')
  }

  const errorHandler = (message: string) => {
    toast.error(message)
    setIsLoading(false)
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
      </InputWrapper>
      <Button type="submit" disabled={!isValid || isLoading} >
        {!isLoading ? 'Login' : 'Loading...'}
      </Button>
    </Form>
  )
}

export default LoginForm
