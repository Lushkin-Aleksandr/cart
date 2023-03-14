import styled, { keyframes } from 'styled-components'

const d1 = keyframes`
  to{clip-path: inset(0 -34% 0 0)}
`

export const Loader = styled.div`
  width: 100px;
  height: 24px;
  background: radial-gradient(
      circle closest-side,
      ${({ theme }) => theme.colors.primary} 90%,
      #0000
    )
    0 0/33% 100% space;
  clip-path: inset(0 100% 0 0);
  animation: ${d1} 1s steps(4) infinite;
`
