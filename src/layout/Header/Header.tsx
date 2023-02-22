import React, { FC } from 'react'
import { StyledHeader } from './Header.styled'
import logo from '../../common/assets/images/logo1.png'
import { Link } from 'react-router-dom'
import { RoutePaths } from '../../routes/AppRoutes'

type PropsType = {}

export const Header: FC<PropsType> = ({}) => {
  return (
    <StyledHeader>
      <img src={logo} alt={'logo'} />
      <Link to={RoutePaths.CART}>Cart</Link>
    </StyledHeader>
  )
}
