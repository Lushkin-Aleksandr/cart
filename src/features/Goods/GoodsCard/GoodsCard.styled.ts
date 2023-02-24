import styled from 'styled-components'

export const StyledGoodsCard = styled.div`
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -13px 11px 26px 0 rgba(0, 0, 0, 0.4);
`

export const GoodsCardImgWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 53%;
  background-color: #df9344;
`

export const GoodsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 47%;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.colors.light};
`

export const GoodsCardTitle = styled.span`
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const GoodsCardDescription = styled.p`
  flex: 1;
  max-height: 70px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.textColors.secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word;
`

export const GoodsCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GoodsCardPrice = styled.span`
  font-weight: bold;
`
