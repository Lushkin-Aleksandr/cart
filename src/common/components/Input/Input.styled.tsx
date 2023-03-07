import styled from 'styled-components'

type PropsType = {
  error?: string | false
}
export const StyledInput = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  input {
    border: ${({ error }) => (error ? '2px solid red' : 'none')};
    color: ${({ theme }) => theme.textColors.primary};
    padding: ${({ error }) => (error ? '8px' : '10px')};
    width: 100%;
    border-radius: 10px;

    &:focus {
      outline: solid ${({ theme }) => theme.colors.primary};
    }
  }
`

export const InputLabel = styled.span`
  color: ${({ theme }) => theme.textColors.secondary};
  margin-left: 5px;
`
export const InputError = styled.span`
  font-size: 14px;
  color: red;
  margin-left: 5px;
`
