import styled from 'styled-components'
import { IconPropsType } from '../IconButton'

export const StyledMinus = styled.svg<IconPropsType>`
  path {
    fill: ${({ variant, theme }) => theme.colors[variant]};
  }
`
