import React, { ButtonHTMLAttributes, FC, MouseEvent, PropsWithChildren, useState } from 'react'
import { StyledIconButton } from './IconButton.styled'
import { ButtonType } from '../Button/Button'

type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & {}

export type IconPropsType = ButtonType & {
  color?: string
}

export const IconButton: FC<PropsWithChildren<PropsType>> = ({ children, onClick, ...props }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e)

    setIsClicked(true)

    setTimeout(() => setIsClicked(false), 400)
  }

  return (
    <StyledIconButton onClick={handleClick} {...props}>
      {children}
      {isClicked && <span></span>}
    </StyledIconButton>
  )
}
