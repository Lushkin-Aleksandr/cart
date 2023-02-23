import React, { FC } from 'react'
import { StyledHeader } from './Header.styled'

import { Link, useNavigate } from 'react-router-dom'
import { RoutePaths } from '../../routes/AppRoutes'
import { Button } from '../../common/components/Button/Button'
import { Logo } from '../../common/components/Logo/Logo'

type PropsType = {}

export const Header: FC<PropsType> = ({}) => {
  const navigate = useNavigate()

  const handleCartButtonClick = () => navigate(RoutePaths.CART)

  return (
    <StyledHeader>
      <Link to={RoutePaths.GOODS}>
        <Logo />
      </Link>
      <Button variant={'secondary'} onClick={handleCartButtonClick}>
        Cart
      </Button>
    </StyledHeader>
  )
}
