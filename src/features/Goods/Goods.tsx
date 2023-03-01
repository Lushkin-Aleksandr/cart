import React, { FC } from 'react'
import { GoodsItemsWrapper, StyledGoods } from './Goods.styled'
import { StyledContainer } from '../../common/components/Container/Container.styled'
import { GoodsCard } from './GoodsCard/GoodsCard'
import { Title } from '../../common/components/Title/Title.styled'

type PropsType = {}

export const Goods: FC<PropsType> = ({}) => {
  return (
    <StyledGoods>
      <StyledContainer>
        <Title>Goods</Title>

        <GoodsItemsWrapper>
          <GoodsCard />
          <GoodsCard />
          <GoodsCard />
          <GoodsCard />
          <GoodsCard />
          <GoodsCard />
          <GoodsCard />
          <GoodsCard />
          <GoodsCard />
          <GoodsCard />
        </GoodsItemsWrapper>
      </StyledContainer>
    </StyledGoods>
  )
}
