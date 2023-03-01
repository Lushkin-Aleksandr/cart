import React, { FC } from 'react'
import { StyledHeader } from './Header.styled'

import { Link, useNavigate } from 'react-router-dom'
import { RoutePaths } from '../../routes/AppRoutes'
import { Logo } from '../../common/components/Logo/Logo'
import { CartButton } from '../../common/components/CartButton/CartButton'

type PropsType = {}

export const Header: FC<PropsType> = ({}) => {
  const navigate = useNavigate()

  const handleCartButtonClick = () => navigate(RoutePaths.CART)

  return (
    <StyledHeader>
      <Link to={RoutePaths.GOODS}>
        <Logo />
      </Link>
      <CartButton onClick={handleCartButtonClick} />
    </StyledHeader>
  )
}
