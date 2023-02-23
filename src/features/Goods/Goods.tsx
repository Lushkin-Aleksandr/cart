import React, { FC } from 'react'
import { GoodsItemsWrapper, GoodsTitle, StyledGoods } from './Goods.styled'
import { StyledContainer } from '../../common/components/Container/Container.styled'
import { GoodsCard } from './GoodsCard/GoodsCard'

type PropsType = {}

export const Goods: FC<PropsType> = ({}) => {
  return (
    <StyledGoods>
      <StyledContainer>
        <GoodsTitle>Goods</GoodsTitle>

        <GoodsItemsWrapper>
          <GoodsCard></GoodsCard>
          <GoodsCard></GoodsCard>
          <GoodsCard></GoodsCard>
          <GoodsCard></GoodsCard>
          <GoodsCard></GoodsCard>
          <GoodsCard></GoodsCard>
          <GoodsCard></GoodsCard>
        </GoodsItemsWrapper>
      </StyledContainer>
    </StyledGoods>
  )
}
