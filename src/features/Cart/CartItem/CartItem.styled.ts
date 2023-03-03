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
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media (max-width: 540px) {
    max-width: 100px;
  }
`
export const CartItemImg = styled.img``
export const CartItemContent = styled.div`
  flex: 1;
  padding: 10px;

  @media (max-width: 540px) {
    padding: 5px;
  }
`
export const CartItemTitle = styled.span`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 540px) {
    margin-bottom: 5px;
  }
`
export const CartItemDescription = styled.p`
  color: ${({ theme }) => theme.textColors.secondary};
  overflow: hidden;

  font-size: 0.8em;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-break: break-word;

  @media (max-width: 540px) {
    font-size: 0.6em;
  }
`
export const CartItemControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px;

  @media (max-width: 540px) {
    padding: 5px;
  }
`
