import React from 'react'
import { StyledLogo } from './Logo.styled'
import logoImg from '../../assets/images/logo1.png'

export const Logo = () => {
  return <StyledLogo src={logoImg} alt={'logo'} />
}
