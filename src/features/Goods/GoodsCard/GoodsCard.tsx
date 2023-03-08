import React, { FC } from 'react'
import {
  GoodsCardBottom,
  GoodsCardDescription,
  GoodsCardImgWrapper,
  GoodsCardInfo,
  GoodsCardPrice,
  GoodsCardTitle,
  StyledGoodsCard,
} from './GoodsCard.styled'
import { Button } from '../../../common/components/Button/Button'
import dishImg from '../../../common/assets/images/dish.svg'
import { PlusMinusCounter } from '../../../common/components/PlusMinusCounter/PlusMinusCounter'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { addCartItem, decreaseCartItemCount, increaseCartItemCount } from '../../Cart/cartSlice'
import { GoodType } from '../goodsSlice'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { selectCartItemCount } from '../../Cart/cartSelectors'

type PropsType = {
  good: GoodType
}

export const GoodsCard: FC<PropsType> = ({ good }) => {
  const dispatch = useAppDispatch()
  const countInCart = useAppSelector(state => selectCartItemCount(state, good.id))

  const handleAddGoodToCart = () => dispatch(addCartItem(good))

  const handleIncreaseValue = () => dispatch(increaseCartItemCount(good.id))

  const handleDecreaseValue = () => dispatch(decreaseCartItemCount(good.id))

  return (
    <StyledGoodsCard>
      <GoodsCardImgWrapper>
        <img src={good.imageUrl || dishImg} alt="" />
      </GoodsCardImgWrapper>

      <GoodsCardInfo>
        <GoodsCardTitle>{good.title}</GoodsCardTitle>

        <GoodsCardDescription>{good.description}</GoodsCardDescription>

        <GoodsCardBottom>
          <GoodsCardPrice>{good.price}$</GoodsCardPrice>

          {countInCart < 1 ? (
            <Button size={'small'} onClick={handleAddGoodToCart}>
              Buy
            </Button>
          ) : (
            <PlusMinusCounter
              value={countInCart}
              size={'small'}
              onPlusClick={handleIncreaseValue}
              onMinusClick={handleDecreaseValue}
            />
          )}
        </GoodsCardBottom>
      </GoodsCardInfo>
    </StyledGoodsCard>
  )
}
