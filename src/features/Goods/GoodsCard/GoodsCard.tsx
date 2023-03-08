import React, { FC, useState } from 'react'
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

type PropsType = {
  title: string
  description: string
  price: number
  imageUrl: string | null
}

export const GoodsCard: FC<PropsType> = ({ title, description, price, imageUrl }) => {
  const [value, setValue] = useState(0)

  const handleIncreaseValue = () => setValue(value + 1)
  const handleDecreaseValue = () => setValue(value - 1)

  return (
    <StyledGoodsCard>
      <GoodsCardImgWrapper>
        <img src={imageUrl || dishImg} alt="" />
      </GoodsCardImgWrapper>

      <GoodsCardInfo>
        <GoodsCardTitle>{title}</GoodsCardTitle>

        <GoodsCardDescription>{description}</GoodsCardDescription>

        <GoodsCardBottom>
          <GoodsCardPrice>{price}$</GoodsCardPrice>

          {value <= 0 ? (
            <Button size={'small'} onClick={handleIncreaseValue}>
              Buy
            </Button>
          ) : (
            <PlusMinusCounter
              value={value}
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
