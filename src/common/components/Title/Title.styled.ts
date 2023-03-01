import styled from 'styled-components'

export const Title = styled.h1`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textColors.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    text-align: center;
  }
`
