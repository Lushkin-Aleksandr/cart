import styled from 'styled-components'
import { ButtonType } from '../Button/Button'

type PropsType = ButtonType & {
  outlined?: boolean
}

export const StyledPlusMinusCounter = styled.div<PropsType>`
  display: inline-flex;
  align-items: center;
  border: ${({ theme, variant, outlined }) =>
    outlined ? `2px solid ${theme.colors[variant]}` : 'none'};
  background: ${({ theme, variant, outlined }) =>
    outlined ? 'transparent' : theme.colors[variant]};
  border-radius: 25px;
  font-size: 1em;
  user-select: none;

  & > span {
    display: flex;
    justify-content: center;
    min-width: 1.6em;
    user-select: none;
    color: ${({ theme, variant, outlined }) => {
      if (outlined) return theme.colors[variant]

      return '#ffffff'
    }};
  }
`
