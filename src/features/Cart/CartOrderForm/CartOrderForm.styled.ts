import styled from 'styled-components'

export const StyledCartOrderForm = styled.form`
  border: 2px dashed #fff;
  flex-basis: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  font-size: 32px;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-basis: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-basis: auto;
  }
`
