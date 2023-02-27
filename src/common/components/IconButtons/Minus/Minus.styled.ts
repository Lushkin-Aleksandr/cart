import styled from 'styled-components'
import { IconPropsType } from '../IconButton'

export const StyledMinus = styled.svg<IconPropsType>`
  width: ${({ size }) => (size === 'medium' ? '25px' : '15px')};
  height: ${({ size }) => (size === 'medium' ? '25px' : '15px')};

  path {
    stroke: ${({ variant, theme }) => theme.colors[variant]};
  }
`
