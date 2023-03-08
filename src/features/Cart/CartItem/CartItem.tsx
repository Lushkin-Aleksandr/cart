import React, { FC } from 'react'
import {
  CartItemContent,
  CartItemControl,
  CartItemDescription,
  CartItemImg,
  CartItemImgWrapper,
  CartItemPrice,
  CartItemTitle,
  StyledCartItem,
} from './CartItem.styled'
import dishImg from '../../../common/assets/images/dish.svg'
import { PlusMinusCounter } from '../../../common/components/PlusMinusCounter/PlusMinusCounter'
import { IconButton } from '../../../common/components/IconButton/IconButton'
import { RecycleBin } from '../../../common/components/IconComponents/RecycleBin/RecycleBin'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { decreaseCartItemCount, increaseCartItemCount } from '../cartSlice'

type PropsType = {
  id: string
  title: string
  price: string
  description: string
  imageUrl: string | null
  count: number
}

export const CartItem: FC<PropsType> = ({ id, title, description, price, imageUrl, count }) => {
  const dispatch = useAppDispatch()

  const handleIncreaseValue = () => dispatch(increaseCartItemCount(id))

  const handleDecreaseValue = () => dispatch(decreaseCartItemCount(id))

  return (
    <StyledCartItem>
      <CartItemImgWrapper>
        <CartItemImg src={imageUrl || dishImg} alt={'Cart item image'} />
      </CartItemImgWrapper>
      <CartItemContent>
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemDescription>{description}</CartItemDescription>
        <CartItemPrice>{price}$</CartItemPrice>
      </CartItemContent>
      <CartItemControl>
        <IconButton size={'medium'}>
          <RecycleBin />
        </IconButton>
        <PlusMinusCounter
          value={count}
          onPlusClick={handleIncreaseValue}
          onMinusClick={handleDecreaseValue}
          min={1}
          size={'small'}
        />
      </CartItemControl>
    </StyledCartItem>
  )
}
