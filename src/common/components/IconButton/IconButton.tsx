import React, { ButtonHTMLAttributes, FC, MouseEvent, PropsWithChildren, useState } from 'react'
import { StyledIconButton } from './IconButton.styled'
import { ButtonSizeType, ButtonVariantsType } from '../Button/Button'

type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSizeType
}

export type IconPropsType = {
  color?: string
  variant: ButtonVariantsType
}

export const IconButton: FC<PropsWithChildren<PropsType>> = ({
  children,
  onClick,
  size = 'large',
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e)

    setIsClicked(true)

    setTimeout(() => setIsClicked(false), 400)
  }

  return (
    <StyledIconButton size={size} onClick={handleClick} {...props}>
      {children}
      {isClicked && <span></span>}
    </StyledIconButton>
  )
}
