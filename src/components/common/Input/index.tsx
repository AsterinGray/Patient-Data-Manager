import { InputProps } from '@/types/components'

import { Error, Field, InputWrapper, Label, TextArea } from './style'

const Input: React.FC<InputProps> = ({
  register,
  name,
  error,
  label,
  textArea,
  ...rest
}) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      {!textArea ?
        <Field {...register(name)} {...rest} /> :
        <TextArea rows={3} {...register(name)} {...rest} />
      }
      {error && <Error>{error}</Error>}
    </InputWrapper>
  )
}

export default Input
