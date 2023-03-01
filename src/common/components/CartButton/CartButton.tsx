import React, { FC } from 'react'
import { StyledCartButton } from './CartButton.styled'
import { ArrowRight } from '../IconComponents/ArrowRight/ArrowRight'

type PropsType = {
  commonPrice?: number
  onClick(): void
}

export const CartButton: FC<PropsType> = ({ commonPrice = 300, onClick }) => {
  return (
    <StyledCartButton onClick={onClick} variant={'secondary'} size={'medium'}>
      {commonPrice ? <span>{commonPrice}$</span> : undefined}
      <div>
        <span>Cart</span>
        <ArrowRight />
      </div>
    </StyledCartButton>
  )
}
