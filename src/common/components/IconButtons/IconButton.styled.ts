import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  to {
    transform: scale(1);
    opacity: 0.1;
  }
`

export const StyledIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  padding: 8px;
  color: rgba(0, 0, 0, 0.54);
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
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
