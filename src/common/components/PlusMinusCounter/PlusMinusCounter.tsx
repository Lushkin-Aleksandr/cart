import React, { FC } from 'react'
import { Minus } from '../IconButtons/Minus/Minus'
import { IconButton } from '../IconButtons/IconButton'
import { Plus } from '../IconButtons/Plus/Plus'
import { StyledPlusMinusCounter } from './PlusMinusCounter.styled'
import { ButtonType } from '../Button/Button'

type PropsType = Partial<ButtonType> & {
  value: number
  max?: number
  min?: number
  onPlusClick(): void
  onMinusClick(): void
}

export const PlusMinusCounter: FC<PropsType> = ({
  value,
  size = 'medium',
  variant = 'primary',
  max = 1000,
  min = 0,
  onPlusClick,
  onMinusClick,
}) => {
  return (
    <StyledPlusMinusCounter size={size} variant={variant}>
      <IconButton disabled={value <= min} onClick={onMinusClick}>
        <Minus size={size} variant={variant} />
      </IconButton>
      <span>{value}</span>
      <IconButton disabled={value >= max} onClick={onPlusClick}>
        <Plus size={size} variant={variant} />
      </IconButton>
    </StyledPlusMinusCounter>
  )
}
