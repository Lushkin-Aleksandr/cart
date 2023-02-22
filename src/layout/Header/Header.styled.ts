import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #f8a64c;
  box-shadow: 0 0 5px 0 #000000;

  img {
    width: 70px;
    height: 70px;
  }

  a {
    border: none;
    border-radius: 25px;
    padding: 10px 40px;
    background-color: #323d39;
    box-shadow: 0 0 2px 0 #000000;
    color: #fff;
    cursor: pointer;
  }

  a:hover {
    background-color: #485953;
    transform: scale(98%);
  }
`
