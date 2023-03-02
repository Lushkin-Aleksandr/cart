import React, { FC } from 'react'
import { CartContent, CartItems, StyledCart } from './Cart.styled'
import { StyledContainer } from '../../common/components/Container/Container.styled'
import { EmptyCart } from './EmptyCart/EmptyCart'
import { Title } from '../../common/components/Title/Title.styled'
import { CartOrderForm } from './CartOrderForm/CartOrderForm'
import { CartItem } from './CartItem/CartItem'

type PropsType = {
  isEmpty?: boolean
}

export const Cart: FC<PropsType> = ({ isEmpty = false }) => {
  return (
    <StyledCart>
      <StyledContainer>
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <>
            <Title>Cart</Title>
            <CartContent>
              <CartItems>
                <CartItem />
                <CartItem />
                <CartItem />
              </CartItems>
              <CartOrderForm />
            </CartContent>
          </>
        )}
      </StyledContainer>
    </StyledCart>
  )
}
