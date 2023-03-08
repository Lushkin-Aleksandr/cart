import React, { FC } from 'react'
import { GoodsItemsWrapper, StyledGoods } from './Goods.styled'
import { StyledContainer } from '../../common/components/Container/Container.styled'
import { GoodsCard } from './GoodsCard/GoodsCard'
import { Title } from '../../common/components/Title/Title.styled'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { GoodType } from './goodsSlice'
import { selectGoodsItems } from './goodsSelectors'

type PropsType = {}

export const Goods: FC<PropsType> = ({}) => {
  const goodsItems = useAppSelector<GoodType[]>(selectGoodsItems)

  return (
    <StyledGoods>
      <StyledContainer>
        <Title>Goods</Title>

        <GoodsItemsWrapper>
          {goodsItems.map(good => {
            return <GoodsCard key={good.id} good={good} />
          })}
        </GoodsItemsWrapper>
      </StyledContainer>
    </StyledGoods>
  )
}
