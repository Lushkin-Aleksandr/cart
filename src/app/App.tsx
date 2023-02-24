import { GlobalStyles } from '../common/styles/GlobalStyles/GlobalStyles'
import { StyledApp } from './App.styled'
import { Header } from '../layout/Header/Header'
import { AppRoutes } from '../routes/AppRoutes'
import { ThemeProvider } from 'styled-components'
import { theme } from '../common/styles/Theme/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <AppRoutes />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
