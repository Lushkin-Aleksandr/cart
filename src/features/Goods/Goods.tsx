import React, { FC, useEffect } from 'react'
import { GoodsItemsWrapper, StyledGoods } from './Goods.styled'
import { StyledContainer } from '../../common/components/Container/Container.styled'
import { GoodsCard } from './GoodsCard/GoodsCard'
import { Title } from '../../common/components/Title/Title.styled'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { selectGoodsItems, selectGoodsStatus } from './goodsSelectors'
import { GoodType } from '../../api/api'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { getGoods, RequestStatusType } from './goodsSlice'
import { Loader } from '../../common/components/Loader/Loader.styled'

type PropsType = {}

export const Goods: FC<PropsType> = ({}) => {
  const dispatch = useAppDispatch()
  const goodsItems = useAppSelector<GoodType[]>(selectGoodsItems)
  const isInitialized = useAppSelector<RequestStatusType>(selectGoodsStatus)

  useEffect(() => {
    dispatch(getGoods())
  }, [])

  if (isInitialized === 'loading') {
    return (
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: '999',
        }}
      >
        <h1
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Loading...
        </h1>
        <Loader />
      </div>
    )
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
