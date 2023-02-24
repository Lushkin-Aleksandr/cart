import styled from 'styled-components'

export const StyledContainer = styled.div`
  max-width: 1160px;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 860px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 740px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 540px;
  }
`
