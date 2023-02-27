import React, { FC, useState } from 'react'
import { Minus } from '../IconButtons/Minus/Minus'
import { IconButton } from '../IconButtons/IconButton'
import { Plus } from '../IconButtons/Plus/Plus'
import { StyledPlusMinusCounter } from './PlusMinusCounter.styled'
import { ButtonType } from '../Button/Button'

type PropsType = Partial<ButtonType> & {
  max?: number
  min?: number
}

export const PlusMinusCounter: FC<PropsType> = ({
  size = 'medium',
  variant = 'primary',
  max = 1000,
  min = 0,
}) => {
  const [value, setValue] = useState(0)

  const handleIncreaseValue = () => setValue(value + 1)
  const handleDecreaseValue = () => setValue(value - 1)

  return (
    <StyledPlusMinusCounter size={size} variant={variant}>
      <IconButton disabled={value <= min} onClick={handleDecreaseValue}>
        <Minus size={size} variant={variant} />
      </IconButton>
      <span>{value}</span>
      <IconButton disabled={value >= max} onClick={handleIncreaseValue}>
        <Plus size={size} variant={variant} />
      </IconButton>
    </StyledPlusMinusCounter>
  )
}
