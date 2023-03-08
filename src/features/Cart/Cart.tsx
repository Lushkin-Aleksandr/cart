import React, { FC } from 'react'
import { CartContent, CartItems, StyledCart } from './Cart.styled'
import { StyledContainer } from '../../common/components/Container/Container.styled'
import { EmptyCart } from './EmptyCart/EmptyCart'
import { Title } from '../../common/components/Title/Title.styled'
import { CartOrderForm } from './CartOrderForm/CartOrderForm'
import { CartItem } from './CartItem/CartItem'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { CartItemType } from './cartSlice'
import { selectCartItems } from './cartSelectors'

type PropsType = {}

export const Cart: FC<PropsType> = ({}) => {
  const cartItems = useAppSelector<CartItemType[]>(selectCartItems)
  const isCartEmpty = cartItems.length < 1

  return (
    <StyledCart>
      <StyledContainer>
        {isCartEmpty ? (
          <EmptyCart />
        ) : (
          <>
            <Title>Cart</Title>
            <CartContent>
              <CartItems>
                {cartItems.map(item => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    count={item.count}
                  />
                ))}
              </CartItems>
              <CartOrderForm />
            </CartContent>
          </>
        )}
      </StyledContainer>
    </StyledCart>
  )
}
