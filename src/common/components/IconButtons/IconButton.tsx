import React, { FC, PropsWithChildren, useState } from 'react'
import { StyledIconButton } from './IconButton.styled'
import { ButtonVariantsType } from '../Button/Button'

type PropsType = {}

export type IconPropsType = {
  variant: ButtonVariantsType
}

export const IconButton: FC<PropsWithChildren<PropsType>> = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)

    setTimeout(() => setIsClicked(false), 400)
  }

  return (
    <StyledIconButton onClick={handleClick}>
      {children}
      {isClicked && <span></span>}
    </StyledIconButton>
  )
}
