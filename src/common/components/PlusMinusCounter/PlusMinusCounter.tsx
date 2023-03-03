import React, { FC } from 'react'
import { Minus } from '../IconComponents/Minus/Minus'
import { IconButton } from '../IconButton/IconButton'
import { Plus } from '../IconComponents/Plus/Plus'
import { StyledPlusMinusCounter } from './PlusMinusCounter.styled'
import { ButtonType } from '../Button/Button'

type PropsType = Partial<ButtonType> & {
  value: number
  max?: number
  min?: number
  outlined?: boolean
  onPlusClick(): void
  onMinusClick(): void
}

export const PlusMinusCounter: FC<PropsType> = ({
  value,
  size = 'large',
  variant = 'primary',
  max = 1000,
  min = 0,
  onPlusClick,
  onMinusClick,
  outlined = false,
}) => {
  return (
    <StyledPlusMinusCounter size={size} variant={variant} outlined={outlined}>
      <IconButton size={size} disabled={value <= min} onClick={onMinusClick}>
        <Minus variant={variant} color={outlined ? '' : '#ffffff'} />
      </IconButton>
      <span>{value}</span>
      <IconButton size={size} disabled={value >= max} onClick={onPlusClick}>
        <Plus variant={variant} color={outlined ? '' : '#ffffff'} />
      </IconButton>
    </StyledPlusMinusCounter>
  )
}
