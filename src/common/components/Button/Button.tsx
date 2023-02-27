import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { StyledButton } from './Button.styled'

type ButtonSizeType = 'small' | 'medium'
export type ButtonVariantsType = 'primary' | 'secondary'

export type ButtonType = {
  size: ButtonSizeType
  variant: ButtonVariantsType
}

type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & Partial<ButtonType>

export const Button: FC<PropsWithChildren<PropsType>> = ({
  size = 'medium',
  variant = 'primary',
  ...props
}) => {
  return <StyledButton size={size} variant={variant} {...props} />
}
