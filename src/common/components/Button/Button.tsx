import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { StyledButton } from './Button.styled'

type PropsType = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<PropsWithChildren<PropsType>> = props => {
  return <StyledButton {...props} />
}
