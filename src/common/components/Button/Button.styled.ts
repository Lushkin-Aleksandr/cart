import styled from 'styled-components'
import { ButtonType } from './Button'

export const StyledButton = styled.button<ButtonType>`
  border: none;
  border-radius: 25px;
  padding: ${({ size }) => (size === 'medium' ? '10px 40px' : '5px 25px')};
  background-color: ${({ variant, theme }) => theme.colors[variant]};
  box-shadow: ${({ variant }) => variant === 'secondary' && '0 0 1px 0 #000000'};
  color: ${({ theme }) => theme.textColors.light};
  cursor: pointer;

  &:hover {
    filter: contrast(80%);
    transform: scale(98%);
  }
`
