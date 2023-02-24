import styled from 'styled-components'

export const StyledGoods = styled.div`
  padding: 40px 0;
`

export const GoodsTitle = styled.h1`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textColors.light};
`

export const GoodsItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 40px;
  justify-content: space-between;
`
