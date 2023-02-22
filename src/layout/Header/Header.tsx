import React, { FC } from 'react'
import { StyledHeader } from './Header.styled'

type PropsType = {}

export const Header: FC<PropsType> = ({}) => {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  )
}
