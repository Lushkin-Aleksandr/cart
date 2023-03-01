import styled from 'styled-components'
import { IconPropsType } from '../../IconButton/IconButton'

export const StyledMinus = styled.svg<IconPropsType>`
  width: ${({ size }) => (size === 'medium' ? '24px' : '16px')};
  height: ${({ size }) => (size === 'medium' ? '24px' : '16px')};

  path {
    stroke: ${({ variant, theme, color }) => (color ? color : theme.colors[variant])};
  }
`
