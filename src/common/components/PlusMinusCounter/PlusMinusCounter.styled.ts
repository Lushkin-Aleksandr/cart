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
  padding: ${({ outlined }) => (outlined ? '0px' : '2px')};
  background: ${({ theme, variant, outlined }) =>
    outlined ? 'transparent' : theme.colors[variant]};
  border-radius: 25px;
  user-select: none;

  & > span {
    display: flex;
    justify-content: center;
    min-width: 1.6em;
    user-select: none;
    font-size: ${({ size }) => {
      switch (size) {
        case 'large':
          return '20px'
        case 'medium':
          return '16px'
        case 'small':
          return '14px'
      }
    }};
    color: ${({ theme, variant, outlined }) => {
      if (outlined) return theme.colors[variant]

      return '#ffffff'
    }};
  }
`
