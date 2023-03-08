import React, { FC } from 'react'
import { StyledCartButton } from './CartButton.styled'
import { ArrowRight } from '../IconComponents/ArrowRight/ArrowRight'

type PropsType = {
  totalPrice?: number
  onClick(): void
}

export const CartButton: FC<PropsType> = ({ totalPrice, onClick }) => {
  return (
    <StyledCartButton onClick={onClick} variant={'secondary'} size={'medium'}>
      {totalPrice ? <span>{totalPrice}$</span> : undefined}
      <div>
        <span>Cart</span>
        <ArrowRight />
      </div>
    </StyledCartButton>
  )
}
