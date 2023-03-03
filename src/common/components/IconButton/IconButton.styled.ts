import styled, { keyframes } from 'styled-components'
import { ButtonSizeType } from '../Button/Button'

type PropsType = {
  size: ButtonSizeType
}

const animation = keyframes`
  to {
    transform: scale(1);
    opacity: 0.1;
  }
`

export const StyledIconButton = styled.button<PropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  padding: ${({ size }) => {
    switch (size) {
      case 'large':
        return '8px'
      case 'medium':
        return '5px'
      case 'small':
        return '5px'
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case 'large':
        return '24px'
      case 'medium':
        return '20px'
      case 'small':
        return '16px'
    }
  }};
  color: rgba(0, 0, 0, 0.54);
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }

  svg {
    z-index: 1;
  }

  &:active {
    transform: scale(98%);
  }

  span {
    transform: scale(0);
    position: absolute;
    border-radius: inherit;
    background-color: rgba(0, 0, 0, 0.35);
    width: 100%;
    height: 100%;
    z-index: 0;
    animation-name: ${animation};
    animation-duration: 0.4s;
  }
`
