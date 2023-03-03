import styled from 'styled-components'
import { IconPropsType } from '../../IconButton/IconButton'

export const StyledPlus = styled.svg<IconPropsType>`
  width: 1em;
  height: 1em;

  path {
    stroke: ${({ variant, theme, color }) => (color ? color : theme.colors[variant])};
  }
`
