import React, { FC } from 'react'
import { GoodsItemsWrapper, StyledGoods } from './Goods.styled'
import { StyledContainer } from '../../common/components/Container/Container.styled'
import { GoodsCard } from './GoodsCard/GoodsCard'
import { Title } from '../../common/components/Title/Title.styled'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { GoodType } from './goodsSlice'
import { getGoodsItems } from './goodsSelectors'

type PropsType = {}

export const Goods: FC<PropsType> = ({}) => {
  const goodsItems = useAppSelector<GoodType[]>(getGoodsItems)

  return (
    <StyledGoods>
      <StyledContainer>
        <Title>Goods</Title>

        <GoodsItemsWrapper>
          {goodsItems.map(good => {
            return (
              <GoodsCard
                key={good.id}
                title={good.title}
                description={good.description}
                price={good.price}
                imageUrl={good.imageUrl}
              />
            )
          })}
        </GoodsItemsWrapper>
      </StyledContainer>
    </StyledGoods>
  )
}
