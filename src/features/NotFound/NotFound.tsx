import React, { FC } from 'react'
import { StyledNotFound } from './NotFound.styled'

type PropsType = {}

export const NotFound: FC<PropsType> = ({}) => {
  return (
    <StyledNotFound>
      <h1>404 Not Found...</h1>
    </StyledNotFound>
  )
}
