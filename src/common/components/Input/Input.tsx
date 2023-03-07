import React, { FC, InputHTMLAttributes } from 'react'
import { InputError, InputLabel, StyledInput } from './Input.styled'

type PropsType = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string | false
  isRequired?: boolean
}

export const Input: FC<PropsType> = ({ label, error, isRequired, ...props }) => {
  return (
    <StyledInput error={error}>
      {label && <InputLabel>{`${label}${isRequired ? '*' : ''}`}</InputLabel>}
      <input {...props} />
      {error && <InputError>{error}</InputError>}
    </StyledInput>
  )
}
