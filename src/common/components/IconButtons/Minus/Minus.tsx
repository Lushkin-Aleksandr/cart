import React, { FC } from 'react'
import { StyledMinus } from './Minus.styled'
import { IconPropsType } from '../IconButton'

export const Minus: FC<Partial<IconPropsType>> = ({
  variant = 'primary',
  size = 'medium',
  color,
}) => {
  return (
    <StyledMinus
      color={color}
      variant={variant}
      size={size}
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M5 12H19"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </StyledMinus>
  )
}
