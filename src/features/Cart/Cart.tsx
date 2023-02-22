import React, { FC } from 'react'
import { StyledCart } from './Cart.styled'

type PropsType = {}

export const Cart: FC<PropsType> = ({}) => {
  return (
    <StyledCart>
      <h1>Cart page</h1>
    </StyledCart>
  )
}
