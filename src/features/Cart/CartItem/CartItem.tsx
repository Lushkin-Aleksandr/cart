import React, { FC, useState } from 'react'
import {
  CartItemContent,
  CartItemControl,
  CartItemDescription,
  CartItemImg,
  CartItemImgWrapper,
  CartItemTitle,
  StyledCartItem,
} from './CartItem.styled'
import steakImg from '../../../common/assets/images/steak1.png'
import { PlusMinusCounter } from '../../../common/components/PlusMinusCounter/PlusMinusCounter'
import { IconButton } from '../../../common/components/IconButton/IconButton'
import { RecycleBin } from '../../../common/components/IconComponents/RecycleBin/RecycleBin'

type PropsType = {}

export const CartItem: FC<PropsType> = () => {
  const [value, setValue] = useState(1)

  const handleIncreaseValue = () => setValue(value + 1)
  const handleDecreaseValue = () => setValue(value - 1)

  return (
    <StyledCartItem>
      <CartItemImgWrapper>
        <CartItemImg src={steakImg} alt={'Cart item image'} />
      </CartItemImgWrapper>
      <CartItemContent>
        <CartItemTitle>Steak</CartItemTitle>
        <CartItemDescription>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
          dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
          amet
        </CartItemDescription>
      </CartItemContent>
      <CartItemControl>
        <IconButton size={'medium'}>
          <RecycleBin />
        </IconButton>
        <PlusMinusCounter
          value={value}
          onPlusClick={handleIncreaseValue}
          onMinusClick={handleDecreaseValue}
          min={1}
          // outlined
          size={'small'}
        />
      </CartItemControl>
    </StyledCartItem>
  )
}
