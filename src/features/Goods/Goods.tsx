import React, { FC, useEffect } from 'react'
import { GoodsItemsWrapper, GoodsLoader, StyledGoods } from './Goods.styled'
import { StyledContainer } from '../../common/components/Container/Container.styled'
import { GoodsCard } from './GoodsCard/GoodsCard'
import { Title } from '../../common/components/Title/Title.styled'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { selectGoodsItems, selectGoodsStatus } from './goodsSelectors'
import { GoodType } from '../../api/api'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { getGoods, RequestStatusType } from './goodsSlice'

type PropsType = {}

export const Goods: FC<PropsType> = ({}) => {
  const dispatch = useAppDispatch()
  const goodsItems = useAppSelector<GoodType[]>(selectGoodsItems)
  const status = useAppSelector<RequestStatusType>(selectGoodsStatus)

  useEffect(() => {
    dispatch(getGoods())
  }, [])

  if (status === 'loading') {
    return <GoodsLoader />
  }

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
