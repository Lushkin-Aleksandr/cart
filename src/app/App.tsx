import { GlobalStyles } from '../common/styles/GlobalStyles/GlobalStyles'
import { StyledApp } from './App.styled'
import { Header } from '../layout/Header/Header'
import { AppRoutes } from '../routes/AppRoutes'

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <AppRoutes />
      </StyledApp>
    </>
  )
}

export default App
