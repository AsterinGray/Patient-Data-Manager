import { InputProps } from '@/types/components'

import { Error, Field, InputWrapper, Label } from './style'

const Input: React.FC<InputProps> = ({
  register,
  name,
  error,
  label,
  ...rest
}) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <Field {...register(name)} {...rest} />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  )
}

export default Input
