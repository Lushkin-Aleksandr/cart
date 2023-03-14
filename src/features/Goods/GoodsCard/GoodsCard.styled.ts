import styled from 'styled-components'

export const StyledGoodsCard = styled.div`
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -13px 11px 26px 0 rgba(0, 0, 0, 0.4);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1rem;
  }
`

export const GoodsCardImgWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 53%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 85%;
  }
`

export const GoodsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 47%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 20px;
  }
`

export const GoodsCardTitle = styled.span`
  display: block;
  font-size: 1.25em;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 5px;
  }
`

export const GoodsCardDescription = styled.p`
  font-size: 0.8em;
  margin-bottom: auto;
  color: ${({ theme }) => theme.textColors.secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
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
