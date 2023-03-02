import styled from 'styled-components'

export const StyledCartItem = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.4);
`
export const CartItemImgWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const CartItemImg = styled.img``
export const CartItemContent = styled.div`
  padding: 10px;
`
export const CartItemTitle = styled.span`
  display: block;
  font-size: 1.25em;
  font-weight: bold;
  margin-bottom: 10px;
`
export const CartItemDescription = styled.p`
  color: ${({ theme }) => theme.textColors.secondary};
`
export const CartItemControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px;
`
