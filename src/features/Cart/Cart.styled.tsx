import styled from 'styled-components'

export const StyledCart = styled.div`
  padding: 20px 0 40px;
`

export const CartContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const CartItems = styled.div`
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: auto;
  }
`
