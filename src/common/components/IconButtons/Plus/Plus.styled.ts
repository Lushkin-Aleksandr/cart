import styled from 'styled-components'
import { IconPropsType } from '../IconButton'

export const StyledPlus = styled.svg<IconPropsType>`
  path {
    stroke: ${({ variant, theme }) => theme.colors[variant]};
  }
`
