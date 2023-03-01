import styled, { keyframes } from 'styled-components'

const cartAnimation = keyframes`
  from {
    transform: translateX(-500px);
  }
  to {
    transform: translateX(0);
  }
`

export const StyledEmptyCart = styled.div`
  height: 80vh;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 30px;
  }

  span {
    display: inline-block;
    transition: ease-in-out 0.5s;
  }

  h3:hover {
    span {
      transform: rotate(90deg);
    }
  }

  img {
    max-width: 80%;
    max-height: 80%;
    filter: hue-rotate(-145deg);
    animation: ${cartAnimation} 2s;
  }
`
