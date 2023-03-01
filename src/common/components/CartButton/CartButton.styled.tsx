import styled from 'styled-components'
import { StyledButton } from '../Button/Button.styled'

export const StyledCartButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;

  &:hover {
    transform: none;

    div {
      span {
        opacity: 0;
      }

      svg {
        opacity: 1;
        left: 50%;
      }
    }
  }

  & > span {
    margin-right: 10px;
    padding-right: 10px;
    border-right: 2px solid rgba(255, 255, 255, 0.32);
  }

  div {
    position: relative;

    span {
      transition: ease 0.2s;
    }

    svg {
      position: absolute;
      top: 0;
      left: 30%;
      transform: translateX(-50%);
      width: 24px;
      height: 24px;
      transition: ease 0.2s;
      opacity: 0;

      path {
        fill: #ffffff;
      }
    }
  }
`
