import React, { FC } from 'react'
import { StyledCart } from './Cart.styled'
import { StyledContainer } from '../../common/components/Container/Container.styled'
import { EmptyCart } from './EmptyCart/EmptyCart'

type PropsType = {}

export const Cart: FC<PropsType> = ({}) => {
  return (
    <StyledCart>
      <StyledContainer>
        {/*<Title>Cart</Title>*/}
        <EmptyCart />
      </StyledContainer>
    </StyledCart>
  )
}
