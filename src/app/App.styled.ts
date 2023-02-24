import styled from 'styled-components'

export const StyledApp = styled.div`
  min-height: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.textColors.primary};
`
