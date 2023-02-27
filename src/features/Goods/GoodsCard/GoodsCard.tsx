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
import steakImg from '../../../common/assets/images/steak1.png'
import { PlusMinusCounter } from '../../../common/components/PlusMinusCounter/PlusMinusCounter'

type PropsType = {}

export const GoodsCard: FC<PropsType> = ({}) => {
  const [value, setValue] = useState(0)

  const handleIncreaseValue = () => setValue(value + 1)
  const handleDecreaseValue = () => setValue(value - 1)

  return (
    <StyledGoodsCard>
      <GoodsCardImgWrapper>
        <img src={steakImg} alt="" />
      </GoodsCardImgWrapper>

      <GoodsCardInfo>
        <GoodsCardTitle>Steak</GoodsCardTitle>

        <GoodsCardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, voluptate?
        </GoodsCardDescription>

        <GoodsCardBottom>
          <GoodsCardPrice>40$</GoodsCardPrice>

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
