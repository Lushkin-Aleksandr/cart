import styled from 'styled-components'

export const StyledGoods = styled.div`
  padding: 20px 0 40px;
`

export const GoodsTitle = styled.h1`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textColors.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    text-align: center;
  }
`

export const GoodsItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-auto-rows: 450px;
  gap: 40px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 250px);
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 370px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: 280px;
    justify-content: center;
    gap: 30px;
  }
`
