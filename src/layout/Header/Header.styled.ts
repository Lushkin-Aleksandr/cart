import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 5px 0 #000000;
  z-index: 2;

  img {
    width: 70px;
    height: 70px;
  }
`
