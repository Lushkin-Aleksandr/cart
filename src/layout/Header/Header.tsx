import React, { FC } from 'react'
import { StyledHeader } from './Header.styled'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RoutePaths } from '../../routes/AppRoutes'
import { Logo } from '../../common/components/Logo/Logo'
import { CartButton } from '../../common/components/CartButton/CartButton'
import { Button } from '../../common/components/Button/Button'

type PropsType = {}

export const Header: FC<PropsType> = ({}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleCartButtonClick = () => navigate(RoutePaths.CART)
  const handleBackToGoodsButtonClick = () => navigate(RoutePaths.GOODS)

  return (
    <StyledHeader>
      <Link to={RoutePaths.GOODS}>
        <Logo />
      </Link>
      {location.pathname === RoutePaths.CART ? (
        <Button variant={'secondary'} onClick={handleBackToGoodsButtonClick}>
          Goods
        </Button>
      ) : (
        <CartButton onClick={handleCartButtonClick} commonPrice={200} />
      )}
    </StyledHeader>
  )
}
