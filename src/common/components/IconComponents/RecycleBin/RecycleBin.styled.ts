import styled from 'styled-components'
import { IconPropsType } from '../../IconButton/IconButton'

export const StyledRecycleBin = styled.svg<IconPropsType>`
  width: 1em;
  height: 1em;

  path {
    fill: ${({ variant, theme, color }) => (color ? color : theme.colors[variant])};
  }
`
