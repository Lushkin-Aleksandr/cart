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

type PropsType = {}

export const GoodsCard: FC<PropsType> = ({}) => {
  return (
    <StyledGoodsCard>
      <GoodsCardImgWrapper>
        <img src="" alt="" />
      </GoodsCardImgWrapper>

      <GoodsCardInfo>
        <GoodsCardTitle>Steak</GoodsCardTitle>

        <GoodsCardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, voluptate?
        </GoodsCardDescription>

        <GoodsCardBottom>
          <GoodsCardPrice>40$</GoodsCardPrice>

          <Button variant={'primary'} size={'small'}>
            Buy
          </Button>
        </GoodsCardBottom>
      </GoodsCardInfo>
    </StyledGoodsCard>
  )
}
