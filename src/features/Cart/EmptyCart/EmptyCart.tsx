import React from 'react'
import { StyledEmptyCart } from './EmptyCart.styled'
import cartImg from '../../../common/assets/images/cart3.png'

export const EmptyCart = () => {
  return (
    <StyledEmptyCart>
      <h3>
        Your cart is empty <span>:(</span>
      </h3>
      <img src={cartImg} alt="Empty card" />
    </StyledEmptyCart>
  )
}
