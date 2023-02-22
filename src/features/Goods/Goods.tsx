import React, { FC } from 'react'
import { StyledGoods } from './Goods.styled'

type PropsType = {}

export const Goods: FC<PropsType> = ({}) => {
  return (
    <StyledGoods>
      <h1>Goods page</h1>
    </StyledGoods>
  )
}
