import styled from 'styled-components'

export const StyledCartOrderForm = styled.form`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  flex-basis: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #fff;
  gap: 15px;

  h2 {
    color: ${({ theme }) => theme.textColors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-basis: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-basis: auto;
  }
`

export const CartOrderFormBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.textColors.primary};
  }
`
export const CartOrderFormInputs = styled.div`
  width: 100%;
  & > div {
    margin-bottom: 5px;
  }
`
